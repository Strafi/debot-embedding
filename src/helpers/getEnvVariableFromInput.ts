import store from '/src/store';
import { TSetEnvironmentVariablesPayload } from '/src/store/types';

function getEnvVariableFromInput(text: string): string | undefined {
	if (!text.startsWith('$'))
		return;
	
	const varName = text.slice(1);

	const { variables } = store.getState().environment;

	return (variables as TSetEnvironmentVariablesPayload)[varName];
}

export default getEnvVariableFromInput;
