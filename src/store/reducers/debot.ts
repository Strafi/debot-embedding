import {
	PUSH_ITEM_TO_STAGE,
	CLEAR_STAGE,
	SET_SIGNING_BOX,
	SET_APPROVE_WINDOW,
	SET_DEBOTS_FILTER_KEY,
	SET_LOCAL_DEBOTS_LIST,
	SET_IS_DEBOT_ERROR,
} from '../actions/debot';
import { USER_DEBOTS_LS_FIELD, MAIN_NETWORK } from '/src/constants';
import { TDebotActions, TDebotState } from "../types";

const initialState: TDebotState = {
	stage: [],
	signingBox: null,
	approveWindow: null,
	filterKey: '',
	debotsList: [
		{ title: 'DeNS', address: '0:c22300f9851e4fc9c246c3b605c521415407d95b272f0624a5e8f0d01ef25f27', network: MAIN_NETWORK },
		{ title: 'Crystal Fever', address: '0:a7115bb9984210697943d409c7bbc77e1db6e2021bb38cb2ebc88d7fdfdf528c', network: MAIN_NETWORK },
		{ title: 'Multisig', address: '0:c69a0ed4a11b467ec1a981f29139dc3ff6af47eeacd2cd93e67a6cfc6f771cfb', network: MAIN_NETWORK },
	],
	localDebotsList: JSON.parse(localStorage.getItem(USER_DEBOTS_LS_FIELD) as string) || [],
	isDebotError: false,
}
  
function reducer(state: TDebotState = initialState, action: ReturnType<TDebotActions>) {
	const { type, payload } = action;

	switch (type) {
		case PUSH_ITEM_TO_STAGE: {
			const stage = [...state.stage, payload];

			return {
				...state,
				stage,
			}
		}

		case CLEAR_STAGE: {
			return {
				...state,
				stage: [],
				isDebotError: false,
			}
		}

		case SET_SIGNING_BOX: {
			return {
				...state,
				signingBox: payload,
			}
		}

		case SET_APPROVE_WINDOW: {
			return {
				...state,
				approveWindow: payload,
			}
		}

		case SET_DEBOTS_FILTER_KEY: {
			const filterKey = (payload as string).toLowerCase();

			return {
				...state,
				filterKey,
			}
		}

		case SET_LOCAL_DEBOTS_LIST: {
			return {
				...state,
				localDebotsList: payload,
			}
		}

		case SET_IS_DEBOT_ERROR: {
			return {
				...state,
				isDebotError: payload,
			}
		}

		default:
			return state
	}
}

export default reducer
