import store from '/src/store';
import { interfaceIdToAddress } from '/src/helpers';
import { COMPONENTS_BINDINGS } from '/src/constants';
import { pushItemToStage } from '/src/store/actions/debot';
import { ADDRESS_INPUT_ID } from '/src/constants/debot';
import ADDRESS_INPUT_ABI from './abi';
import BaseInterface from '../../base';
import { TExtendedDebotInterfaceParams } from '../../../types';

class AddressInput extends BaseInterface {
	static id = ADDRESS_INPUT_ID;

	constructor() {
		super(ADDRESS_INPUT_ABI);
	}

	get(params: TExtendedDebotInterfaceParams) {
		const { answerId, prompt } = params.value;

		const stageObject = {
			text: prompt || '',
			functionId: answerId,
			component: COMPONENTS_BINDINGS.ADDRESS_INPUT,
			interfaceAddress: interfaceIdToAddress(AddressInput.id),
		};
		
		store.dispatch(pushItemToStage(stageObject));
	}
}

export default AddressInput;
