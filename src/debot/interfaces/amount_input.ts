import store from '/src/store';
import { decodeString, interfaceIdToAddress } from '/src/helpers';
import { COMPONENTS_BINDINGS } from '/src/constants';
import { pushItemToStage } from '/src/store/actions/debot';
import { AMOUNT_INPUT_ID } from '/src/constants/debot';
import { AMOUNT_INPUT_ABI } from '../ABIs';
import BaseInterface from './base';
import { TExtendedDebotInterfaceParams } from '../types';

class AmountInput extends BaseInterface {
	constructor() {
		super(AMOUNT_INPUT_ID, AMOUNT_INPUT_ABI);
	}

	get(params: TExtendedDebotInterfaceParams) {
		const { answerId, prompt, min, max, ...config } = params.value;

		config.min = min;
		config.max = max;

		if (max && min && parseInt(max) < parseInt(min)) {
			config.max = min;
		}

		const decodedPrompt = decodeString(prompt);
		const stageObject = {
			text: decodedPrompt,
			functionId: answerId,
			config,
			component: COMPONENTS_BINDINGS.AMOUNT_INPUT,
			interfaceAddress: interfaceIdToAddress(this.id),
		};
		
		store.dispatch(pushItemToStage(stageObject));
	}
}

export default AmountInput;
