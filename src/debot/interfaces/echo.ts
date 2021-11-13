import store from '/src/store';
import { DEngine } from '/src/debot';
import { decodeString, encodeString } from '/src/helpers';
import { COMPONENTS_BINDINGS, DEBOT_WC } from '/src/constants';
import { pushItemToStage } from '/src/store/actions/debot';
import { ECHO_ABI } from '../ABIs';
import BaseInterface from './base';
import { TExtendedDebotInterfaceParams } from '../types';

const ID = 'f6927c0d4bdb69e1b52d27f018d156ff04152f00558042ff674f0fec32e4369d';

class Echo extends BaseInterface {
	constructor() {
		super(ID, ECHO_ABI);
	}

	echo(params: TExtendedDebotInterfaceParams) {
		const { debotAddress } = params;
		const { answerId, request } = params.value;

		const decodedRequest = decodeString(request);
		const response = encodeString(decodedRequest);
		const interfaceAddress = `${DEBOT_WC}:${this.id}`;
		
		DEngine.callDebotFunction(debotAddress, interfaceAddress, answerId, { response })
			.catch(err => {
				console.error(err);

				const stageObject = {
					text: err.message,
					component: COMPONENTS_BINDINGS.TEXT,
					isError: true,
					interfaceAddress,
				};
				
				store.dispatch(pushItemToStage(stageObject));
			});
	}
}

export default Echo;
