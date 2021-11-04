import store from '/src/store';
import { DEBOT_WC } from '/src/constants';
import { USERINFO_ABI } from '../ABIs';
import { DEngine } from '/src/debot';
import BaseInterface from './base';

const ID = 'a56115147709ed3437efb89460b94a120b7fe94379c795d1ebb0435a847ee580';

class Userinfo extends BaseInterface {
	constructor() {
		super(ID, USERINFO_ABI);
	}

	async getAccount(params) {
		const { wallet } = store.getState().account;
		const { value: { answerId }, debotAddress } = params;
		const interfaceAddress = `${DEBOT_WC}:${this.id}`;

		try {
			await DEngine.callDebotFunction(debotAddress, interfaceAddress, answerId, { value: wallet.address });
		} catch(err) {
			console.error(err.message);
		}
	}

	async getPublicKey(params) {
		const { wallet } = store.getState().account;
		const { value: { answerId }, debotAddress } = params;
		const interfaceAddress = `${DEBOT_WC}:${this.id}`;

		try {
			await DEngine.callDebotFunction(debotAddress, interfaceAddress, answerId, { value: `0x${wallet.publicKey}` });
		} catch(err) {
			console.error(err.message);
		}
	}

	async getSigningBox(params) {
		const { value: { answerId }, debotAddress, signingBoxHandle } = params;
		const interfaceAddress = `${DEBOT_WC}:${this.id}`;

		try {
			await DEngine.callDebotFunction(debotAddress, interfaceAddress, answerId, { value: signingBoxHandle });
		} catch(err) {
			console.error(err.message);
		}
	}
}

export default Userinfo;
