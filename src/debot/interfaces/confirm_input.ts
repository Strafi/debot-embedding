import store from '/src/store';
import { decodeString, interfaceIdToAddress } from '/src/helpers';
import { COMPONENTS_BINDINGS } from '/src/constants';
import { pushItemToStage } from '/src/store/actions/debot';
import { CONFIRM_INPUT_ID } from '/src/constants/debot';
import { CONFIRM_INPUT_ABI } from '../ABIs';
import BaseInterface from './base';
import { TExtendedDebotInterfaceParams } from '../types';

class ConfirmInput extends BaseInterface {
	constructor() {
		super(CONFIRM_INPUT_ID, CONFIRM_INPUT_ABI);
	}

	get(params: TExtendedDebotInterfaceParams) {
		const { answerId, prompt } = params.value;

		const decodedPrompt = decodeString(prompt);
		const stageObject = {
			text: decodedPrompt,
			functionId: answerId,
			component: COMPONENTS_BINDINGS.CONFIRM_INPUT,
			interfaceAddress: interfaceIdToAddress(this.id),
		};
		
		store.dispatch(pushItemToStage(stageObject));
	}
}

export default ConfirmInput;
