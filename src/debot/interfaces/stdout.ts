import store from '/src/store';
import { decodeString, interfaceIdToAddress } from '/src/helpers';
import { COMPONENTS_BINDINGS } from '/src/constants';
import { pushItemToStage } from '/src/store/actions/debot';
import { STDOUT_ID } from '/src/constants/debot';
import { STDOUT_ABI } from '../ABIs';
import BaseInterface from './base';
import { TExtendedDebotInterfaceParams } from '../types';
import { TDebotStageItem } from '/src/types';

class Stdout extends BaseInterface {
	constructor() {
		super(STDOUT_ID, STDOUT_ABI);
	}

	print(params: TExtendedDebotInterfaceParams) {
		const { message } = params.value;

		const decodedMessage = decodeString(message);
		const stageObject = {
			text: decodedMessage,
			component: COMPONENTS_BINDINGS.STDOUT,
			interfaceAddress: interfaceIdToAddress(this.id),
		};
		
		store.dispatch(pushItemToStage(stageObject as TDebotStageItem));
	}
}

export default Stdout;
