import store from '/src/store';
import { decodeString, interfaceIdToAddress } from '/src/helpers';
import { COMPONENTS_BINDINGS } from '/src/constants';
import { pushItemToStage } from '/src/store/actions/debot';
import { ADDRESS_INPUT_ID } from '/src/constants/debot';
import { ADDRESS_INPUT_ABI } from '../ABIs';
import BaseInterface from './base';
import { TExtendedDebotInterfaceParams } from '../types';

class AddressInput extends BaseInterface {
	constructor() {
		super(ADDRESS_INPUT_ID, ADDRESS_INPUT_ABI);
	}

	get(params: TExtendedDebotInterfaceParams) {
		const { answerId, prompt } = params.value;

		const decodedPrompt = prompt ? decodeString(prompt) : '';
		const stageObject = {
			text: decodedPrompt,
			functionId: answerId,
			component: COMPONENTS_BINDINGS.ADDRESS_INPUT,
			interfaceAddress: interfaceIdToAddress(this.id),
		};
		
		store.dispatch(pushItemToStage(stageObject));
	}

	select(params: TExtendedDebotInterfaceParams) {
		return this.get(params);
	}
}

export default AddressInput;
