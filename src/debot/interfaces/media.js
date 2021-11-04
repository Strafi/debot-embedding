import store from '/src/store';
import { DEngine } from '/src/debot';
import { decodeString, encodeString } from '/src/helpers';
import { COMPONENTS_BINDINGS, DEBOT_WC } from '/src/constants';
import { pushItemToStage } from '/src/store/actions/debot';
import { MEDIA_ABI } from '../ABIs';
import BaseInterface from './base';

const ID = '59cdc2aafe53760937dac5b1c4b89ce12950f56a56298108a987cfe49b7c84b5';

class Media extends BaseInterface {
	constructor() {
		super(ID, MEDIA_ABI);

		this.mediaTypes = [
			encodeString('image/png'),
			encodeString('image/jpg'),
			encodeString('image/jpeg'),
			encodeString('image/bmp'),
			encodeString('image/gif'),
			encodeString('image/webp'),
		];
	}

	async getSupportedMediaTypes(params) {
		const { value: { answerId }, debotAddress } = params;
		const interfaceAddress = `${DEBOT_WC}:${this.id}`;

		try {
			await DEngine.callDebotFunction(debotAddress, interfaceAddress, answerId, { mediaTypes: this.mediaTypes });
		} catch(err) {
			console.error(err.message);
		}
	}

	output(params) {
		const { answerId, data, prompt } = params.value;

		const decodedData = decodeString(data);
		const decodedDescription = decodeString(prompt);

		const stageObject = {
			functionId: answerId,
			text: decodedDescription,
			data: decodedData,
			component: COMPONENTS_BINDINGS.MEDIA,
			interfaceAddress: `${DEBOT_WC}:${this.id}`,
		};
		
		store.dispatch(pushItemToStage(stageObject));
	}
}

export default Media;
