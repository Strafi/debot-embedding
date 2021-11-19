import store from '/src/store';
import { DEngine } from '/src/debot';
import { interfaceIdToAddress } from '/src/helpers';
import { USERINFO_ID } from '/src/constants/debot';
import { USERINFO_ABI } from '../ABIs';
import BaseInterface from './base';
import { TExtendedDebotInterfaceParams } from '../types';

class Userinfo extends BaseInterface {
	constructor() {
		super(USERINFO_ID, USERINFO_ABI);
	}

	async getAccount(params: TExtendedDebotInterfaceParams) {
		const { wallet } = store.getState().account;
		const { value: { answerId }, debotAddress } = params;
		const interfaceAddress = interfaceIdToAddress(this.id);

		try {
			await DEngine.callDebotFunction(debotAddress, interfaceAddress, answerId, { value: wallet!.address });
		} catch(err) {
			console.error((err as Error).message);
		}
	}

	async getPublicKey(params: TExtendedDebotInterfaceParams) {
		const { wallet } = store.getState().account;
		const { value: { answerId }, debotAddress } = params;
		const interfaceAddress = interfaceIdToAddress(this.id);

		try {
			await DEngine.callDebotFunction(debotAddress, interfaceAddress, answerId, { value: `0x${wallet!.publicKey}` });
		} catch(err) {
			console.error((err as Error).message);
		}
	}

	async getSigningBox(params: TExtendedDebotInterfaceParams) {
		const { value: { answerId }, debotAddress, signingBoxHandle } = params;
		const interfaceAddress = interfaceIdToAddress(this.id);

		try {
			await DEngine.callDebotFunction(debotAddress, interfaceAddress, answerId, { handle: signingBoxHandle });
		} catch(err) {
			console.error((err as Error).message);
		}
	}
}

export default Userinfo;
