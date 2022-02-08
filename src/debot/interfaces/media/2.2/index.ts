import store from '/src/store';
import { DEngine } from '/src/debot';
import { interfaceIdToAddress } from '/src/helpers';
import { COMPONENTS_BINDINGS } from '/src/constants';
import { pushItemToStage } from '/src/store/actions/debot';
import { MEDIA_ID } from '/src/constants/debot';
import MEDIA_ABI from './abi';
import BaseInterface from '../../base';
import { TExtendedDebotInterfaceParams } from '../../../types';

class Media extends BaseInterface {
	static id = MEDIA_ID;
	private mediaTypes: string[];

	constructor() {
		super(MEDIA_ABI);

		this.mediaTypes = [
			'image/png',
			'image/jpg',
			'image/jpeg',
			'image/bmp',
			'image/gif',
			'image/webp',
		];
	}

	async getSupportedMediaTypes(params: TExtendedDebotInterfaceParams) {
		const { value: { answerId }, debotAddress } = params;
		const interfaceAddress = interfaceIdToAddress(Media.id);

		try {
			await DEngine.callDebotFunction(debotAddress, interfaceAddress, answerId, { mediaTypes: this.mediaTypes });
		} catch(err) {
			console.error((err as Error).message);
		}
	}

	output(params: TExtendedDebotInterfaceParams) {
		const { answerId, data, prompt } = params.value;

		const stageObject = {
			functionId: answerId,
			text: prompt,
			data,
			component: COMPONENTS_BINDINGS.MEDIA,
			interfaceAddress: interfaceIdToAddress(Media.id),
		};
		
		store.dispatch(pushItemToStage(stageObject));
	}
}

export default Media;
