import store from '/src/store';
import WalletService from '/src/WalletService';
import tonClientController from '/src/tonClient';
import { DEngine } from '/src/debot';
import { COMPONENTS_BINDINGS, DEBOT_WC } from '/src/constants';
import { pushItemToStage } from '/src/store/actions/debot';
import { setSigningBox, setApproveWindow } from '/src/store/actions/debot';
import InterfacesController from './interfaces';

class DebotBrowser {
	constructor() {
		this.debot_handle = null;
		this.debot_abi = null;
		this.info = null;
		this.deprecatedMessageTimeout = null;
		this.interfacesQueue = [];
		this.signingBoxHandle = null;
	}

	async init() {
		this.signingBoxHandle = await this._registerSigningBox();
	}

	async _registerSigningBox() {
		const { publicKey } = store.getState().account.wallet;

		const get_public_key = () => Promise.resolve({ public_key: publicKey });

		const sign = async (params) => {
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

	setDebotParams(params) {
		const { debot_handle, debot_abi, info } = params;

		this.debot_handle = debot_handle;
		this.debot_abi = debot_abi;
		this.info = info;
	}

	releaseInterfacesQueue() {
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

	clearInterfacesQueue() {
		this.interfacesQueue = [];
	}

	showDeprecatedMessage() {
		if (this.deprecatedMessageTimeout)
			clearTimeout(this.deprecatedMessageTimeout);

		this.deprecatedMessageTimeout = setTimeout(() => {
			this.deprecatedMessageTimeout = null;

			const stageObject = {
				text: 'This DeBot is deprecated and therefore no longer supported.',
				component: COMPONENTS_BINDINGS.TEXT,
				isError: true,
			};
			
			store.dispatch(pushItemToStage(stageObject));
		}, 1000)
	}

	log(loggerParams) {
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
			
			store.dispatch(pushItemToStage(stageObject));
		}
	}

	show_action() {
		this.showDeprecatedMessage();
	}

	input() {
		this.showDeprecatedMessage();
	}

	// alternative version w\o extension
	async get_default_signing_box() {
		const keysPromise = new Promise((resolve) => {
			store.dispatch(setSigningBox({
				submit: resolve,
			}));
		});

		const keys = await keysPromise;

		const { handle } = await tonClientController.client.crypto.get_signing_box(keys);

		store.dispatch(setSigningBox(null));

		return { signing_box: handle };
	}

	async get_signing_box() {
		return { signing_box: this.signingBoxHandle };
	}

	invoke_debot() {
		this.showDeprecatedMessage();
	}

	async send(params) {
		try {
			const parsedMessage = await tonClientController.client.boc.parse_message({ boc: params.message })

			const { dst, src, dst_workchain_id } = parsedMessage.parsed;
			const [, interfaceId] = dst.split(':');
	
			if (dst_workchain_id === DEBOT_WC) {
				this.interfacesQueue.push({
					interfaceId,
					debotAddress: src,
					signingBoxHandle: this.signingBoxHandle,
					params,
				})

				if (this.interfacesQueue.length === 1) {
					InterfacesController.delegateToInterface(interfaceId, {
						debotAddress: src,
						signingBoxHandle: this.signingBoxHandle,
						...params,
					});
				}
			} else {
				console.log('Call other debot', parsedMessage, params);

				if (DEngine.storage.has(dst)) {
					const { debot_handle } = DEngine.storage.get(dst);

					await DEngine.debotModule.send({ debot_handle, message: params.message });
				} else {
					const { debot_handle } = await DEngine.initDebot(dst);

					await DEngine.debotModule.send({ debot_handle, message: params.message });
				}
			}
		} catch(err) {
			console.error(err);

			const stageObject = {
				text: err.message,
				component: COMPONENTS_BINDINGS.TEXT,
				isError: true,
			};
			
			store.dispatch(pushItemToStage(stageObject));
		}	
	}

	async approve(params) {
		const approvePromise = new Promise((resolve) => {
			store.dispatch(setApproveWindow({
				submit: resolve,
				params: params.activity,
			}));
		});

		const approved = await approvePromise;

		store.dispatch(setApproveWindow(null));

		return { approved };
	}
}

export default DebotBrowser;