import store from '/src/store';
import { setLocalDebotsList } from '/src/store/actions/debot';
import { USER_DEBOTS_LS_FIELD } from '/src/constants';
import { TDebotsListItem } from '/src/types';

function addLocalDebot(debotObj: TDebotsListItem): void {
	const localDebosFromLS: TDebotsListItem[] = JSON.parse(localStorage.getItem(USER_DEBOTS_LS_FIELD) as string)
		|| [];

	const newLocalDebots = [debotObj, ...localDebosFromLS];

	store.dispatch(setLocalDebotsList(newLocalDebots));
	localStorage.setItem(USER_DEBOTS_LS_FIELD, JSON.stringify(newLocalDebots));
}

export default addLocalDebot;
