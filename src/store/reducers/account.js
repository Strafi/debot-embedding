import {
	SET_WALLET,
	SET_CONNECT_WALLET_MODAL,
} from '../actions/account';
import { WALLET_LS_FIELD } from '/src/constants';

const initialState = {
	connectWalletModal: null,
	wallet: JSON.parse(localStorage.getItem(WALLET_LS_FIELD)) || null,
}
  
function reducer(state = initialState, action) {
	const { type, payload } = action;

	switch (type) {
		case SET_WALLET: {
			if (payload)
				localStorage.setItem(WALLET_LS_FIELD, JSON.stringify(payload));
			else
				localStorage.removeItem(WALLET_LS_FIELD);

			return {
				...state,
				wallet: payload,
			}
		}

		case SET_CONNECT_WALLET_MODAL: {
			return {
				...state,
				connectWalletModal: payload,
			}
		}

		default:
			return state
	}
}

export default reducer
