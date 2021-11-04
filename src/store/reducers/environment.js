import {
	SET_ENVIRONMENT_VARIABLE,
} from '../actions/environment';
import { USER_ENV_LS_FIELD } from '/src/constants';

const initialState = {
	variables: JSON.parse(localStorage.getItem(USER_ENV_LS_FIELD)) || {},
}
  
function reducer(state = initialState, action) {
	const { type, payload } = action;

	switch (type) {
		case SET_ENVIRONMENT_VARIABLE: {
			return {
				...state,
				variables: payload,
			}
		}

		default:
			return state
	}
}

export default reducer
