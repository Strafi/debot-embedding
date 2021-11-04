import { combineReducers } from 'redux';
import account from './account';
import debot from './debot';
import environment from './environment';

const rootReducer = combineReducers({
	account,
	debot,
	environment,
});

export default rootReducer;
