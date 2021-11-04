import store from '/src/store';
import { setEnvironmentVariables } from '/src/store/actions/environment';
import { USER_ENV_LS_FIELD } from '/src/constants';

function addEnvVariable(key, value) {
	const envFromLS = JSON.parse(localStorage.getItem(USER_ENV_LS_FIELD)) || {};

	const newEnv = {
		...envFromLS,
		[key]: value,
	};

	store.dispatch(setEnvironmentVariables(newEnv));
	localStorage.setItem(USER_ENV_LS_FIELD, JSON.stringify(newEnv));
}

export default addEnvVariable;
