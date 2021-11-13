import React, { useState, FC } from 'react';
import { DEngine } from '/src/debot';
import { AmountInput } from '../';
import { TDebotStageItem } from '/src/types';

const NANO_MODIFIER = 1000000000;

const convertToNanotokens = (tokens: string): string => (parseFloat(tokens) * NANO_MODIFIER).toString();

type TProps = {
	params: TDebotStageItem;
	debotAddress: string;
	type?: string;
}

const TokensInput: FC<TProps> = ({ params, debotAddress }) => {
	const [errorText, setErrorText] = useState('');
	const { functionId, interfaceAddress } = params;

	const handleSubmit = async (inputValue: string): Promise<void> => {
		try {
			const nanotokens = convertToNanotokens(inputValue);

			await DEngine.callDebotFunction(debotAddress, interfaceAddress, functionId, { value: nanotokens });
		} catch(err) {
			setErrorText((err as Error).message);
		}
	}

	return (
		<AmountInput
			params={params}
			customCallback={handleSubmit}
			customErrorText={errorText}
			setCustomErrorText={setErrorText}
			debotAddress={debotAddress}
		/>
	)
};

export default TokensInput;
