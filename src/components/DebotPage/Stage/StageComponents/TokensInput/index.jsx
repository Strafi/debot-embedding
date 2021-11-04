import React, { useState } from 'react';
import { useDebotAddress } from '/src/helpers';
import { DEngine } from '/src/debot';
import { AmountInput } from '../';

const NANO_MODIFIER = 1000000000;

const convertToNanotokens = tokens => (parseFloat(tokens) * NANO_MODIFIER).toString();

const TokensInput = ({ params }) => {
	const debotAddress = useDebotAddress();
	const [errorText, setErrorText] = useState('');
	const { functionId, interfaceAddress } = params;

	const handleSubmit = async inputValue => {
		try {
			const nanotokens = convertToNanotokens(inputValue);

			await DEngine.callDebotFunction(debotAddress, interfaceAddress, functionId, { value: nanotokens });
		} catch(err) {
			setErrorText(err.message);
		}
	}

	return (
		<AmountInput
			params={params}
			customCallback={handleSubmit}
			customErrorText={errorText}
			setCustomErrorText={setErrorText}
		/>
	)
};

export default TokensInput;
