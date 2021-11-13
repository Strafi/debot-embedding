import store from '/src/store';
import { decodeString } from '/src/helpers';
import { COMPONENTS_BINDINGS, DEBOT_WC } from '/src/constants';
import { pushItemToStage } from '/src/store/actions/debot';
import { ADDRESS_INPUT_ABI } from '../ABIs';
import BaseInterface from './base';
import { TExtendedDebotInterfaceParams } from '../types';

const ID = 'd7ed1bd8e6230871116f4522e58df0a93c5520c56f4ade23ef3d8919a984653b';

class AddressInput extends BaseInterface {
	constructor() {
		super(ID, ADDRESS_INPUT_ABI);
	}

	get(params: TExtendedDebotInterfaceParams) {
		const { answerId, prompt } = params.value;

		const decodedPrompt = prompt ? decodeString(prompt) : '';
		const stageObject = {
			text: decodedPrompt,
			functionId: answerId,
			component: COMPONENTS_BINDINGS.ADDRESS_INPUT,
			interfaceAddress: `${DEBOT_WC}:${this.id}`,
		};
		
		store.dispatch(pushItemToStage(stageObject));
	}

	select(params: TExtendedDebotInterfaceParams) {
		return this.get(params);
	}
}

export default AddressInput;
