import store from '/src/store';
import { decodeString, interfaceIdToAddress } from '/src/helpers';
import { COMPONENTS_BINDINGS } from '/src/constants';
import { pushItemToStage } from '/src/store/actions/debot';
import { MENU_ID } from '/src/constants/debot';
import { MENU_ABI } from '../ABIs';
import BaseInterface from './base';
import { TExtendedDebotInterfaceParams,  } from '../types';
import { TDebotStageItem } from '/src/types';

class Menu extends BaseInterface {
	constructor() {
		super(MENU_ID, MENU_ABI);
	}

	select(params: TExtendedDebotInterfaceParams) {
		const { description, title, items } = params.value;

		const decodedTitle = decodeString(title);
		const decodedDescription = decodeString(description);
		const menuItems = items.map((item: { handlerId: string, title: string, description: string }) => ({
			functionId: item.handlerId,
			title: decodeString(item.title),
			description: decodeString(item.description),
		}));

		const stageObject = {
			title: decodedTitle,
			text: decodedDescription,
			menuItems,
			component: COMPONENTS_BINDINGS.MENU,
			interfaceAddress: interfaceIdToAddress(this.id),
		};
		
		store.dispatch(pushItemToStage(stageObject as TDebotStageItem));
	}
}

export default Menu;
