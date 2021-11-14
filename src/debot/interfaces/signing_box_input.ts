import { DEngine } from '/src/debot';
import { interfaceIdToAddress } from '/src/helpers';
import { SIGNING_BOX_INPUT_ID } from '/src/constants/debot';
import { SIGNING_BOX_INPUT_ABI } from '../ABIs';
import BaseInterface from './base';
import { TExtendedDebotInterfaceParams } from '../types';

class SigningBoxInput extends BaseInterface {
	constructor() {
		super(SIGNING_BOX_INPUT_ID, SIGNING_BOX_INPUT_ABI);
	}

	async get(params: TExtendedDebotInterfaceParams) {
		const { value: { answerId }, debotAddress, signingBoxHandle } = params;
		const interfaceAddress = interfaceIdToAddress(this.id);

		try {
			await DEngine.callDebotFunction(debotAddress, interfaceAddress, answerId, { value: signingBoxHandle });
		} catch(err) {
			console.error((err as Error).message);
		}
	}
}

export default SigningBoxInput;
