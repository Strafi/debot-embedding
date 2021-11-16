import {
	RegisteredDebot,
	RegisteredSigningBox,
	KeyPair,
} from '@tonclient/core';

import store from '/src/store';
import WalletService from '/src/WalletService';
import tonClientController from '/src/TonClient';
import { DEngine } from '/src/debot';
import EventBus, { TApproveDispatchType } from '/src/EventBus';
import { EVENTS } from '/src/constants/events';
import { COMPONENTS_BINDINGS, DEBOT_WC } from '/src/constants';
import { pushItemToStage } from '/src/store/actions/debot';
import { setSigningBox, setApproveWindow } from '/src/store/actions/debot';
import InterfacesController from './interfaces';
import { TDebotStageItem } from '/src/types';
import {
	IDebotBrowser,
	TInterfacesQueueItem,
	ParamsOfAppDebotBrowserSend,
	ParamsOfAppDebotBrowserLog,
	ResultOfAppDebotBrowserInput,
	ResultOfAppDebotBrowserGetSigningBox,
	ParamsOfAppDebotBrowserApprove,
	ResultOfAppDebotBrowserApprove,
} from './types';

class DebotBrowser implements IDebotBrowser {
	debot_handle: RegisteredDebot['debot_handle'] | undefined;
	debot_abi: RegisteredDebot['debot_abi'] | undefined;
	info: RegisteredDebot['info'] | undefined;
	signingBoxHandle: RegisteredSigningBox['handle'] | undefined;
	private deprecatedMessageTimeout: ReturnType<typeof setTimeout> | undefined;
	private interfacesQueue: TInterfacesQueueItem[] = [];

	async init(): Promise<void> {
		this.signingBoxHandle = await this.registerSigningBox();
	}

	setDebotParams(params: RegisteredDebot): void {
		const { debot_handle, debot_abi, info } = params;

		this.debot_handle = debot_handle;
		this.debot_abi = debot_abi;
		this.info = info;
	}

	releaseInterfacesQueue(): void {
		this.interfacesQueue.shift();

		if (this.interfacesQueue.length) {
			const interfaceState = this.interfacesQueue[0];
			const { interfaceId, debotAddress, params, signingBoxHandle } = interfaceState;

			InterfacesController.delegateToInterface(interfaceId, {
				debotAddress,
				signingBoxHandle,
				...params,
			});
		}
	}

	clearInterfacesQueue(): void {
		this.interfacesQueue = [];
	}

	log(loggerParams: ParamsOfAppDebotBrowserLog): void {
		const browserParams = {
			debot_handle: this.debot_handle,
			debot_abi: this.debot_abi,
			info: this.info,
		};

		console.log(browserParams, loggerParams);

		if (loggerParams.msg) {
			const stageObject = {
				text: loggerParams.msg,
				component: COMPONENTS_BINDINGS.TEXT,
			};
			
			store.dispatch(pushItemToStage(stageObject as TDebotStageItem));
		}
	}

	show_action(): void {
		this.showDeprecatedMessage();
	}

	async input(): Promise<ResultOfAppDebotBrowserInput> {
		this.showDeprecatedMessage();

		return { value: '' };
	}

	switch(): void {
		// deprecated, but should not be handled
	}

	switch_completed(): void {
		// deprecated, but should not be handled
	}

	async get_signing_box(): Promise<ResultOfAppDebotBrowserGetSigningBox> {
		const returnObject = { signing_box: this.signingBoxHandle! };

		EventBus.dispatch(EVENTS.DEBOT.SIGNING_BOX_CALLED, {
			data: returnObject,
		});
	
		return returnObject;
	}

	async invoke_debot(): Promise<void> {
		this.showDeprecatedMessage();
	}

	async send(params: ParamsOfAppDebotBrowserSend): Promise<void> {
		try {
			const parsedMessage = await tonClientController.client.boc.parse_message({ boc: params.message })

			const { dst, src, dst_workchain_id } = parsedMessage.parsed;
			const [, interfaceId] = dst.split(':');
	
			if (dst_workchain_id === DEBOT_WC) {
				this.interfacesQueue.push({
					interfaceId,
					debotAddress: src,
					signingBoxHandle: this.signingBoxHandle!,
					params,
				})

				if (this.interfacesQueue.length === 1) {
					InterfacesController.delegateToInterface(interfaceId, {
						debotAddress: src,
						signingBoxHandle: this.signingBoxHandle!,
						...params,
					});
				}
			} else {
				console.log('Call other debot', parsedMessage, params);

				const browserFromStorage = DEngine.storage.get(dst);

				if (browserFromStorage) {
					const { debot_handle } = browserFromStorage;

					await DEngine.debotModule.send({ debot_handle, message: params.message });
				} else {
					const { debot_handle } = await DEngine.initDebot(dst);

					await DEngine.debotModule.send({ debot_handle, message: params.message });
				}
			}
		} catch(err) {
			console.error(err);

			const stageObject = {
				text: (err as Error).message,
				component: COMPONENTS_BINDINGS.TEXT,
				isError: true,
			};
			
			store.dispatch(pushItemToStage(stageObject as TDebotStageItem));
		}	
	}

	async approve(params: ParamsOfAppDebotBrowserApprove): Promise<ResultOfAppDebotBrowserApprove> {
		let approvePromiseResolve: Function;

		const approvePromise: Promise<boolean> = new Promise((resolve) => {
			approvePromiseResolve = resolve;

			store.dispatch(setApproveWindow({
				submit: resolve,
				params: params.activity,
			}));
		});

		const registry = EventBus.register(EVENTS.CLIENT.EXECUTE_APPROVE, (args: TApproveDispatchType) => {
			if (args?.data?.approved) {
				approvePromiseResolve(true)
			} else {
				approvePromiseResolve(false)
			}
		});
		
		EventBus.dispatch(EVENTS.DEBOT.APPROVE_CALLED, {
			data: params.activity,
		});

		const approved = await approvePromise;

		registry.unregister();

		store.dispatch(setApproveWindow(null));

		return { approved };
	}

	private async registerSigningBox() {
		const { publicKey } = store.getState().account.wallet!;

		const get_public_key = () => Promise.resolve({ public_key: publicKey });

		const sign = async (params: { unsigned: string }) => {
			const { unsigned } = params;

			const signResult = await WalletService.sign(unsigned, publicKey);

			return { signature: signResult.signatureHex };
		}

		const signingBoxCreationObj = {
			get_public_key,
			sign,
		}

		const signingBoxRegistration = await tonClientController.client.crypto.register_signing_box(signingBoxCreationObj);

		return signingBoxRegistration.handle;
	}

	// alternative version w\o extension
	private async get_default_signing_box() {
		const keysPromise: Promise<KeyPair> = new Promise((resolve) => {
			store.dispatch(setSigningBox({
				submit: resolve,
			}));
		});

		const keys = await keysPromise;

		const { handle } = await tonClientController.client.crypto.get_signing_box(keys);

		store.dispatch(setSigningBox(null));

		return { signing_box: handle };
	}

	private showDeprecatedMessage(): void {
		if (this.deprecatedMessageTimeout)
			clearTimeout(this.deprecatedMessageTimeout);

		this.deprecatedMessageTimeout = setTimeout(() => {
			this.deprecatedMessageTimeout = undefined;

			const stageObject = {
				text: 'This DeBot is deprecated and therefore no longer supported.',
				component: COMPONENTS_BINDINGS.TEXT,
				isError: true,
			};
			
			store.dispatch(pushItemToStage(stageObject as TDebotStageItem));
		}, 1000)
	}
}

export default DebotBrowser;