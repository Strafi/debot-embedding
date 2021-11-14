import store from '/src/store';
import { DEngine } from '/src/debot';
import { decodeString, encodeString, interfaceIdToAddress } from '/src/helpers';
import { COMPONENTS_BINDINGS } from '/src/constants';
import { pushItemToStage } from '/src/store/actions/debot';
import { MEDIA_ID } from '/src/constants/debot';
import { MEDIA_ABI } from '../ABIs';
import BaseInterface from './base';
import { TExtendedDebotInterfaceParams } from '../types';

class Media extends BaseInterface {
	private mediaTypes: string[];

	constructor() {
		super(MEDIA_ID, MEDIA_ABI);

		this.mediaTypes = [
			encodeString('image/png')!,
			encodeString('image/jpg')!,
			encodeString('image/jpeg')!,
			encodeString('image/bmp')!,
			encodeString('image/gif')!,
			encodeString('image/webp')!,
		];
	}

	async getSupportedMediaTypes(params: TExtendedDebotInterfaceParams) {
		const { value: { answerId }, debotAddress } = params;
		const interfaceAddress = interfaceIdToAddress(this.id);

		try {
			await DEngine.callDebotFunction(debotAddress, interfaceAddress, answerId, { mediaTypes: this.mediaTypes });
		} catch(err) {
			console.error((err as Error).message);
		}
	}

	output(params: TExtendedDebotInterfaceParams) {
		const { answerId, data, prompt } = params.value;

		const decodedData = decodeString(data);
		const decodedDescription = decodeString(prompt);

		const stageObject = {
			functionId: answerId,
			text: decodedDescription,
			data: decodedData,
			component: COMPONENTS_BINDINGS.MEDIA,
			interfaceAddress: interfaceIdToAddress(this.id),
		};
		
		store.dispatch(pushItemToStage(stageObject));
	}
}

export default Media;
