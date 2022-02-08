import store from '/src/store';
import { interfaceIdToAddress } from '/src/helpers';
import { COMPONENTS_BINDINGS } from '/src/constants';
import { pushItemToStage } from '/src/store/actions/debot';
import { TERMINAL_ID } from '/src/constants/debot';
import TERMINAL_ABI from './abi';
import BaseInterface from '../../base';
import { TExtendedDebotInterfaceParams } from '../../../types';

class Terminal extends BaseInterface {
	static id = TERMINAL_ID;

	constructor() {
		super(TERMINAL_ABI);
	}

	input(params: TExtendedDebotInterfaceParams) {
		const { answerId, multiline, prompt } = params.value;

		const stageObject = {
			text: prompt,
			functionId: answerId,
			component: multiline ? COMPONENTS_BINDINGS.TEXTAREA : COMPONENTS_BINDINGS.INPUT,
			interfaceAddress: interfaceIdToAddress(Terminal.id),
		};
		
		store.dispatch(pushItemToStage(stageObject));
	}

	print(params: TExtendedDebotInterfaceParams) {
		const { answerId, message } = params.value;

		const stageObject = {
			text: message,
			functionId: answerId,
			component: COMPONENTS_BINDINGS.TEXT,
			interfaceAddress: interfaceIdToAddress(Terminal.id),
		};

		store.dispatch(pushItemToStage(stageObject));
	}
}

export default Terminal;
