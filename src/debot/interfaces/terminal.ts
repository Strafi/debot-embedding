import store from '/src/store';
import { decodeString, interfaceIdToAddress } from '/src/helpers';
import { COMPONENTS_BINDINGS } from '/src/constants';
import { pushItemToStage } from '/src/store/actions/debot';
import { TERMINAL_ID } from '/src/constants/debot';
import { TERMINAL_ABI } from '../ABIs';
import BaseInterface from './base';
import { TExtendedDebotInterfaceParams } from '../types';

class Terminal extends BaseInterface {
	constructor() {
		super(TERMINAL_ID, TERMINAL_ABI);
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
			interfaceAddress: interfaceIdToAddress(this.id),
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
			interfaceAddress: interfaceIdToAddress(this.id),
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
			interfaceAddress: interfaceIdToAddress(this.id),
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
			interfaceAddress: interfaceIdToAddress(this.id),
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
			interfaceAddress: interfaceIdToAddress(this.id),
		};

		store.dispatch(pushItemToStage(stageObject));
	}
}

export default Terminal;
