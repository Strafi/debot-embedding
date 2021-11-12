import { TSetEnvironmentVariablesAction } from '../types';

export const SET_ENVIRONMENT_VARIABLE = 'debot/SET_ENVIRONMENT_VARIABLES';

export const setEnvironmentVariables: TSetEnvironmentVariablesAction = variables => ({
	type: SET_ENVIRONMENT_VARIABLE,
	payload: variables,
});
