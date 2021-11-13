import React, { useState, useRef, useEffect, FC, Dispatch, SetStateAction, KeyboardEvent, ChangeEvent } from 'react';
import { DEngine } from '/src/debot';
import { TDebotStageItem } from '/src/types';

const normalizeValue = (value: string, power?: string): string => {
	if (!power || power === "0")
		return value;

	const numPower = parseInt(power);

	return (parseFloat(value) * Math.pow(10, numPower)).toString();
}

function formStepFromDecimals(decimals?: string): string {
	if (!decimals || decimals === "0")
		return '1';

	const decimalsInt = parseInt(decimals, 10);
	let resultString = '0.';

	for(let i = 1; i < decimalsInt; i++) {
		resultString += '0';
	}

	resultString += '1';

	return resultString;
}

function formDescription(config: TDebotStageItem['config']): string {
	if (!config)
		return '';

	if (config.min && config.max)
		return `Input value must be greater than (or equal) ${config.min} and less than (or equal) ${config.max}`;
	else if (config.min)
		return `Input value must be greater than (or equal) ${config.min}`;
	else if (config.max)
		return `Input value must be less than (or equal) ${config.max}`;
	else
		return '';
}

type TProps = {
	params: TDebotStageItem;
	debotAddress: string;
	customCallback?: (inputValue: string) => unknown;
	customErrorText?: string;
	setCustomErrorText?: Dispatch<SetStateAction<string>>;
}

const AmountInput: FC<TProps> = ({
	params,
	customCallback,
	customErrorText,
	setCustomErrorText,
	debotAddress,
}) => {
	const [inputValue, setInputValue] = useState('');
	const [errorText, setErrorText] = useState('');
	const inputRef = useRef<HTMLInputElement>(null);
	const { text, functionId, interfaceAddress, config = {} } = params;
	const inputConfig = {
		min: config.min,
		max: config.max,
		step: formStepFromDecimals(config!.decimals),
	};
	const description = formDescription(config);

	useEffect(() => {
		inputRef?.current?.focus();
	}, []);

	const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
		const { value } = event.target;
		
		if (value === '') {
			setInputValue(event.target.value);
			setErrorText('');

			if (setCustomErrorText)
				setCustomErrorText('');

			return;
		}

		if (!config.decimals || config.decimals === "0") {
			if (value.includes('.')) {
				setErrorText('This input does not support decimals');
				setInputValue(event.target.value);

				return;
			}
		} else {
			const [, decimalsString] = value.split('.');

			if (decimalsString && parseInt(config.decimals) < decimalsString.length) {
				setErrorText('Too many decimals');
				setInputValue(event.target.value);

				return;
			}
		}

		const floatValue = parseFloat(value);
		const isOutOfRange = (config.max && floatValue > (config.max as unknown as number))
			|| (config.min && floatValue < (config.min as unknown as number));

		if (value.includes('e')) {
			setErrorText('Input includes not valid characters');
		} else if (isOutOfRange) {
			setErrorText(description);
		} else {
			setErrorText('');

			if (setCustomErrorText)
				setCustomErrorText('');
		}

		setInputValue(event.target.value);
	}

	const handleSend = async () => {
		if (errorText || customErrorText || !inputValue)
			return;

		try {
			if (customCallback)
				return customCallback(inputValue);

			await DEngine.callDebotFunction(debotAddress, interfaceAddress, functionId, { value: normalizeValue(inputValue, config.decimals) });
		} catch(err) {
			setErrorText((err as Error).message);
		}
	}

	const handleKeyPress = (event: KeyboardEvent) => {
		const { shiftKey, key, altKey } = event;
		const isEnter = key === 'Enter';
		const shouldTriggerFunction = isEnter && !shiftKey && !altKey;

		if (shouldTriggerFunction) {
			event.preventDefault();

			handleSend();
		}
	}

	const inputClassName = `stage-component__input ${errorText ? 'stage-component__input--error' : ''}`;

	return (
		<div className='stage-component__input-container'>
			{!!text && <span className='stage-component__input-label'>{text}</span>}
			{!!description && <div className='stage-component__input-description'>{description}</div>}
			<div className='stage-component__input-flex'>
				<input
					className={inputClassName}
					type='number'
					placeholder='Enter...'
					value={inputValue}
					onChange={handleInputChange}
					onKeyPress={handleKeyPress}
					ref={inputRef}
					{...inputConfig}
				/>
				<div className='stage-component__input-send-button' onClick={handleSend}>Send</div>
			</div>
			{!!errorText && <span className='stage-component__input-error'>{errorText}</span>}
			{!!customErrorText && <span className='stage-component__input-error'>{customErrorText}</span>}
		</div>
	)
};

export default AmountInput;
