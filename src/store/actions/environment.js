export const SET_ENVIRONMENT_VARIABLE = 'debot/SET_ENVIRONMENT_VARIABLES';

export const setEnvironmentVariables = variables => ({
	type: SET_ENVIRONMENT_VARIABLE,
	payload: variables,
})
