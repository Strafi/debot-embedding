import store from '/src/store';
import { decodeString } from '/src/helpers';
import { COMPONENTS_BINDINGS, DEBOT_WC } from '/src/constants';
import { pushItemToStage } from '/src/store/actions/debot';
import { STDOUT_ABI } from '../ABIs';
import BaseInterface from './base';

const ID = 'c91dcc3fddb30485a3a07eb7c1e5e2aceaf75f4bc2678111de1f25291cdda80b';

class Stdout extends BaseInterface {
	constructor() {
		super(ID, STDOUT_ABI);
	}

	print(params) {
		const { message } = params.value;

		const decodedMessage = decodeString(message);
		const stageObject = {
			text: decodedMessage,
			component: COMPONENTS_BINDINGS.STDOUT,
			interfaceAddress: `${DEBOT_WC}:${this.id}`,
		};
		
		store.dispatch(pushItemToStage(stageObject));
	}
}

export default Stdout;
