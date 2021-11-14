import store from '/src/store';
import { DEngine } from '/src/debot';
import { decodeString, encodeString, interfaceIdToAddress } from '/src/helpers';
import { COMPONENTS_BINDINGS } from '/src/constants';
import { pushItemToStage } from '/src/store/actions/debot';
import { ECHO_ID } from '/src/constants/debot';
import { ECHO_ABI } from '../ABIs';
import BaseInterface from './base';
import { TExtendedDebotInterfaceParams } from '../types';
import { TDebotStageItem } from '/src/types';

class Echo extends BaseInterface {
	constructor() {
		super(ECHO_ID, ECHO_ABI);
	}

	echo(params: TExtendedDebotInterfaceParams) {
		const { debotAddress } = params;
		const { answerId, request } = params.value;

		const decodedRequest = decodeString(request);
		const response = encodeString(decodedRequest);
		const interfaceAddress = interfaceIdToAddress(this.id);
		
		DEngine.callDebotFunction(debotAddress, interfaceAddress, answerId, { response })
			.catch(err => {
				console.error(err);

				const stageObject = {
					text: err.message,
					component: COMPONENTS_BINDINGS.TEXT,
					isError: true,
					interfaceAddress,
				};
				
				store.dispatch(pushItemToStage(stageObject as TDebotStageItem));
			});
	}
}

export default Echo;
