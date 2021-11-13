import { DebotModule, RegisteredDebot, CallSet } from '@tonclient/core';

import store from '/src/store';
import WalletService from '/src/WalletService';
import tonClientController from '/src/TonClient';
import { formDebotFunctionFromId } from '/src/helpers';
import { COMPONENTS_BINDINGS, DEV_NETWORK, FLD_NETWORK } from '/src/constants';
import { pushItemToStage, clearStage, setApproveWindow, setSigningBox } from '/src/store/actions/debot';
import { setConnectWalletModal, setWallet } from '/src/store/actions/account';
import DebotBrowser from './DebotBrowser';
import InterfacesController from './interfaces';
import { IDEngineStorageItem } from './types';
import { TDebotStageItem } from '/src/types';

interface IDEngine {
	storage: Map<string, IDEngineStorageItem>
	debotModule: DebotModule;
	initDebot: (address: string) => Promise<RegisteredDebot>;
	runDebot: (address: string) => Promise<RegisteredDebot | void>;
	reloadDebot: (address: string) => Promise<RegisteredDebot | void>;
	callDebotFunction: (debotAddress: string, interfaceAddress: string, functionId: string, input: unknown) => Promise<void>;
}

class DEngine implements IDEngine {
	storage = new Map<string, IDEngineStorageItem>();
	private mainDebotModule = new DebotModule(tonClientController.mainNetClient);
	private devDebotModule = new DebotModule(tonClientController.devNetClient);
	private fldDebotModule = new DebotModule(tonClientController.fldNetClient);

	get debotModule() {
		if (tonClientController.selectedNetwork === DEV_NETWORK)
			return this.devDebotModule;

		if (tonClientController.selectedNetwork === FLD_NETWORK)
			return this.fldDebotModule;

		return this.mainDebotModule;
	}

	async initDebot(address: string): Promise<RegisteredDebot> {
		const debotBrowser = new DebotBrowser();

		await debotBrowser.init();

		const initParams = await this.debotModule.init({ address }, debotBrowser);

		debotBrowser.setDebotParams(initParams);
		this.storage.set(address, { ...initParams, browser: debotBrowser });

		return initParams
	}

	async runDebot(address: string): Promise<RegisteredDebot | void> {
		await this.ensureWalletConnected();
		
		const initParams = await this.initDebot(address);

		const { debot_handle, info: { interfaces } } = initParams;

		const isDebotSupported = InterfacesController.checkAreInterfacesSupported(interfaces);

		if (!isDebotSupported)
			return this.showUnsupportedMessage();

		await this.debotModule.start({ debot_handle });

		return initParams;
	}

	async callDebotFunction(
		debotAddress: string,
		interfaceAddress: string,
		functionId?: string,
		input?: unknown,
	): Promise<void> {
		const debotParams = this.storage.get(debotAddress);
		const { debot_handle, debot_abi, browser } = debotParams!;

		let call_set: CallSet | undefined;

		if (functionId && functionId !== '0') {
			const functionName = formDebotFunctionFromId(functionId);

			call_set = {
				function_name: functionName,
			}

			if (input) {
				call_set.input = input;
			}
		}

		const encodedMessage = await tonClientController.client.abi.encode_internal_message({
			abi: {
				type: 'Json',
				value: debot_abi,
			},
			address: debotAddress,
			src_address: interfaceAddress,
			call_set,
			value: '1000000000000000',
		});

		try {
			const sendRes = await this.debotModule.send({ debot_handle, message: encodedMessage.message });

			browser.releaseInterfacesQueue();

			return sendRes;
		} catch(err) {
			console.error(err);

			browser.releaseInterfacesQueue();

			store.dispatch(pushItemToStage({
				text: (err as Error).message,
				component: COMPONENTS_BINDINGS.TEXT,
				isError: true,
			} as TDebotStageItem));
		}
	}

	async reloadDebot(address: string): Promise<RegisteredDebot | void> {
		store.dispatch(clearStage());
		store.dispatch(setApproveWindow(null));
		store.dispatch(setSigningBox(null));
		
		const debotParams = this.storage.get(address);
		const { browser } = debotParams!;

		browser.clearInterfacesQueue();

		return this.runDebot(address);
	}

	private showUnsupportedMessage(): void {
		const stageObject = {
			text: 'This DeBot is not yet supported by our browser :(\nTry another browser for now and come back to us later',
			component: COMPONENTS_BINDINGS.TEXT,
		};
		
		store.dispatch(pushItemToStage(stageObject as TDebotStageItem));
	}

	private async ensureWalletConnected(): Promise<void> {
		try {
			if (!WalletService.isConnected) {
				const connectedWallet = await WalletService.connect();
				store.dispatch(setWallet(connectedWallet));
			}
		} catch (err) {
			store.dispatch(setConnectWalletModal({ message: (err as Error).message, isError: true }));
			await WalletService.waitForConnection();
		}
	}
}

export default new DEngine();