import store from '/src/store';
import { interfaceIdToAddress } from '/src/helpers';
import { COMPONENTS_BINDINGS } from '/src/constants';
import { pushItemToStage } from '/src/store/actions/debot';
import { MENU_ID } from '/src/constants/debot';
import MENU_ABI from './abi';
import BaseInterface from '../../base';
import { TExtendedDebotInterfaceParams,  } from '../../../types';
import { TDebotStageItem } from '/src/types';

class Menu extends BaseInterface {
	static id = MENU_ID;

	constructor() {
		super(MENU_ABI);
	}

	select(params: TExtendedDebotInterfaceParams) {
		const { description, title, items } = params.value;

		const menuItems = items.map((item: { handlerId: string, title: string, description: string }) => ({
			functionId: item.handlerId,
			title: item.title,
			description: item.description,
		}));

		const stageObject = {
			title,
			text: description,
			menuItems,
			component: COMPONENTS_BINDINGS.MENU,
			interfaceAddress: interfaceIdToAddress(Menu.id),
		};
		
		store.dispatch(pushItemToStage(stageObject as TDebotStageItem));
	}
}

export default Menu;
