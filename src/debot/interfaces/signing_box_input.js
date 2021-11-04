import { DEngine } from '/src/debot';
import { DEBOT_WC } from '/src/constants';
import { SIGNING_BOX_INPUT_ABI } from '../ABIs';
import BaseInterface from './base';

const ID = 'c13024e101c95e71afb1f5fa6d72f633d51e721de0320d73dfd6121a54e4d40a';

class SigningBoxInput extends BaseInterface {
	constructor() {
		super(ID, SIGNING_BOX_INPUT_ABI);
	}

	async get(params) {
		const { value: { answerId }, debotAddress, signingBoxHandle } = params;
		const interfaceAddress = `${DEBOT_WC}:${this.id}`;

		try {
			await DEngine.callDebotFunction(debotAddress, interfaceAddress, answerId, { value: signingBoxHandle });
		} catch(err) {
			console.error(err.message);
		}
	}
}

export default SigningBoxInput;
