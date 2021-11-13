import store from '/src/store';
import { decodeString } from '/src/helpers';
import { COMPONENTS_BINDINGS, DEBOT_WC } from '/src/constants';
import { pushItemToStage } from '/src/store/actions/debot';
import { TERMINAL_ABI } from '../ABIs';
import BaseInterface from './base';
import { TExtendedDebotInterfaceParams } from '../types';

const ID = '8796536366ee21852db56dccb60bc564598b618c865fc50c8b1ab740bba128e3';

class Terminal extends BaseInterface {
	constructor() {
		super(ID, TERMINAL_ABI);
	}

	input(params: TExtendedDebotInterfaceParams) {
		return this.inputStr(params);
	}

	inputStr(params: TExtendedDebotInterfaceParams) {
		const { answerId, multiline, prompt } = params.value;

		const decodedPrompt = decodeString(prompt);
		const stageObject = {
			text: decodedPrompt,
			functionId: answerId,
			component: multiline ? COMPONENTS_BINDINGS.TEXTAREA : COMPONENTS_BINDINGS.INPUT,
			interfaceAddress: `${DEBOT_WC}:${this.id}`,
		};
		
		store.dispatch(pushItemToStage(stageObject));
	}

	inputInt(params: TExtendedDebotInterfaceParams) {
		const { answerId, prompt } = params.value;

		const decodedPrompt = decodeString(prompt);
		const stageObject = {
			text: decodedPrompt,
			functionId: answerId,
			component: COMPONENTS_BINDINGS.AMOUNT_INPUT,
			interfaceAddress: `${DEBOT_WC}:${this.id}`,
		};
		
		store.dispatch(pushItemToStage(stageObject));
	}

	inputUint(params: TExtendedDebotInterfaceParams) {
		return this.inputInt(params);
	}

	inputTons(params: TExtendedDebotInterfaceParams) {
		const { answerId, prompt } = params.value;

		const decodedPrompt = decodeString(prompt);
		const stageObject = {
			text: decodedPrompt,
			functionId: answerId,
			config: {
				min: '0',
				decimals: '9',
			},
			component: COMPONENTS_BINDINGS.TOKENS_INPUT,
			interfaceAddress: `${DEBOT_WC}:${this.id}`,
		};
		
		store.dispatch(pushItemToStage(stageObject));
	}

	inputBoolean(params: TExtendedDebotInterfaceParams) {
		const { answerId, prompt } = params.value;

		const decodedPrompt = decodeString(prompt);
		const stageObject = {
			text: decodedPrompt,
			functionId: answerId,
			component: COMPONENTS_BINDINGS.CONFIRM_INPUT,
			interfaceAddress: `${DEBOT_WC}:${this.id}`,
		};
		
		store.dispatch(pushItemToStage(stageObject));
	}

	print(params: TExtendedDebotInterfaceParams) {
		const { answerId, message } = params.value;

		const decodedMessage = decodeString(message);
		const stageObject = {
			text: decodedMessage,
			functionId: answerId,
			component: COMPONENTS_BINDINGS.TEXT,
			interfaceAddress: `${DEBOT_WC}:${this.id}`,
		};

		store.dispatch(pushItemToStage(stageObject));
	}
}

export default Terminal;
