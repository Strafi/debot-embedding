import store from '/src/store';
import { decodeString } from '/src/helpers';
import { COMPONENTS_BINDINGS, DEBOT_WC } from '/src/constants';
import { pushItemToStage } from '/src/store/actions/debot';
import { MENU_ABI } from '../ABIs';
import BaseInterface from './base';

const ID = 'ac1a4d3ecea232e49783df4a23a81823cdca3205dc58cd20c4db259c25605b48';

class Menu extends BaseInterface {
	constructor() {
		super(ID, MENU_ABI);
	}

	select(params) {
		const { description, title, items } = params.value;

		const decodedTitle = decodeString(title);
		const decodedDescription = decodeString(description);
		const menuItems = items.map(item => ({
			functionId: item.handlerId,
			title: decodeString(item.title),
			description: decodeString(item.description),
		}));

		const stageObject = {
			title: decodedTitle,
			text: decodedDescription,
			menuItems,
			component: COMPONENTS_BINDINGS.MENU,
			interfaceAddress: `${DEBOT_WC}:${this.id}`,
		};
		
		store.dispatch(pushItemToStage(stageObject));
	}
}

export default Menu;
