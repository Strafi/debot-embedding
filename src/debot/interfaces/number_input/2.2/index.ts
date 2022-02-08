import store from '/src/store';
import { interfaceIdToAddress } from '/src/helpers';
import { COMPONENTS_BINDINGS } from '/src/constants';
import { pushItemToStage } from '/src/store/actions/debot';
import { NUMBER_INPUT_ID } from '/src/constants/debot';
import NUMBER_INPUT_ABI from './abi';
import BaseInterface from '../../base';
import { TExtendedDebotInterfaceParams } from '../../../types';

class NumberInput extends BaseInterface {
	static id = NUMBER_INPUT_ID;

	constructor() {
		super(NUMBER_INPUT_ABI);
	}

	get(params: TExtendedDebotInterfaceParams) {
		const { answerId, prompt, max, min, ...config } = params.value;

		config.min = min;
		config.max = max;

		if (max && min && parseInt(max) < parseInt(min)) {
			config.max = min;
		}

		const stageObject = {
			text: prompt,
			functionId: answerId,
			config,
			component: COMPONENTS_BINDINGS.AMOUNT_INPUT,
			interfaceAddress: interfaceIdToAddress(NumberInput.id),
		};
		
		store.dispatch(pushItemToStage(stageObject));
	}
}

export default NumberInput;
