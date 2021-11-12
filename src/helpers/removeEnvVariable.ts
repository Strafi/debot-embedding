import store from '/src/store';
import { setEnvironmentVariables } from '/src/store/actions/environment';
import { USER_ENV_LS_FIELD } from '/src/constants';
import { TSetEnvironmentVariablesPayload } from '/src/store/types';

function removeEnvVariable(key: string) {
	const envFromLS: TSetEnvironmentVariablesPayload = JSON.parse(localStorage.getItem(USER_ENV_LS_FIELD) as string)
		|| {};

	const newEnv = { ...envFromLS };

	delete newEnv[key];

	store.dispatch(setEnvironmentVariables(newEnv));
	localStorage.setItem(USER_ENV_LS_FIELD, JSON.stringify(newEnv));
}

export default removeEnvVariable;
