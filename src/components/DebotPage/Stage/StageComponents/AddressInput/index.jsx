import React, { useState } from 'react';
import { useDebotAddress, checkIsValidAddress, getEnvVariableFromInput } from '/src/helpers';
import { Input } from '../';
import { DEngine } from '/src/debot';

const AddressInput = ({ params }) => {
	const debotAddress = useDebotAddress();
	const [errorText, setErrorText] = useState('');
	const { interfaceAddress, functionId } = params;

	const handleSubmit = async inputValue => {
		try {
			const value = getEnvVariableFromInput(inputValue) || inputValue;

			const isValidAddress = await checkIsValidAddress(value);

			if (!isValidAddress)
				return setErrorText('Invalid address');

			await DEngine.callDebotFunction(debotAddress, interfaceAddress, functionId, { value });
		} catch(err) {
			setErrorText(err.message);
		}
	}

	return <Input
		customCallback={handleSubmit}
		customErrorText={errorText}
		setCustomErrorText={setErrorText}
		params={params}
	/>
};

export default AddressInput;
