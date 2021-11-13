import React, { useState, FC } from 'react';
import { checkIsValidAddress, getEnvVariableFromInput } from '/src/helpers';
import { Input } from '../';
import { DEngine } from '/src/debot';
import { TDebotStageItem } from '/src/types';

type TProps = {
	params: TDebotStageItem;
	debotAddress: string;
}

const AddressInput: FC<TProps> = ({ params, debotAddress }) => {
	const [errorText, setErrorText] = useState('');
	const { interfaceAddress, functionId } = params;

	const handleSubmit = async (inputValue: string): Promise<void> => {
		try {
			const value = getEnvVariableFromInput(inputValue) || inputValue;

			const isValidAddress = await checkIsValidAddress(value);

			if (!isValidAddress)
				return setErrorText('Invalid address');

			await DEngine.callDebotFunction(debotAddress, interfaceAddress, functionId, { value });
		} catch(err) {
			setErrorText((err as Error).message);
		}
	}

	return <Input
		customCallback={handleSubmit}
		customErrorText={errorText}
		setCustomErrorText={setErrorText}
		params={params}
		debotAddress={debotAddress}
	/>
};

export default AddressInput;
