import store from '/src/store';
import { decodeString } from '/src/helpers';
import { COMPONENTS_BINDINGS, DEBOT_WC } from '/src/constants';
import { pushItemToStage } from '/src/store/actions/debot';
import { AMOUNT_INPUT_ABI } from '../ABIs';
import BaseInterface from './base';
import { TExtendedDebotInterfaceParams } from '../types';

const ID = 'a1d347099e29c1624c8890619daf207bde18e92df5220a54bcc6d858309ece84';

class AmountInput extends BaseInterface {
	constructor() {
		super(ID, AMOUNT_INPUT_ABI);
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
			interfaceAddress: `${DEBOT_WC}:${this.id}`,
		};
		
		store.dispatch(pushItemToStage(stageObject));
	}
}

export default AmountInput;
