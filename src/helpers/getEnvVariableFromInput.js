import store from '/src/store';

function getEnvVariableFromInput(text) {
	if (!text.startsWith('$'))
		return false;
	
	const varName = text.slice(1);

	const { variables } = store.getState().environment;

	return variables[varName];
}

export default getEnvVariableFromInput;
