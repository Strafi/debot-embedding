import {
	SET_ENVIRONMENT_VARIABLE,
} from '../actions/environment';
import { USER_ENV_LS_FIELD } from '/src/constants';
import { TEnvironmentActions, TEnvironmentState } from '../types';

const initialState: TEnvironmentState = {
	variables: JSON.parse(localStorage.getItem(USER_ENV_LS_FIELD) as string) || {},
}
  
function reducer(state: TEnvironmentState = initialState, action: ReturnType<TEnvironmentActions>) {
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
