import store from '/src/store';
import { setLocalDebotsList } from '/src/store/actions/debot';
import { USER_DEBOTS_LS_FIELD } from '/src/constants';

function removeLocalDebot(debotAddress) {
	const localDebosFromLS = JSON.parse(localStorage.getItem(USER_DEBOTS_LS_FIELD)) || [];

	const newLocalDebots = localDebosFromLS.filter(debot => debot.address !== debotAddress);

	store.dispatch(setLocalDebotsList(newLocalDebots));
	localStorage.setItem(USER_DEBOTS_LS_FIELD, JSON.stringify(newLocalDebots));
}

export default removeLocalDebot;
