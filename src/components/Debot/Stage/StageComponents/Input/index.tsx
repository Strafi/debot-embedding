import React, { useState, useRef, useEffect, FC, Dispatch, SetStateAction, ChangeEvent, RefObject, KeyboardEvent } from 'react';
import { encodeString, getEnvVariableFromInput } from '/src/helpers';
import { DEngine } from '/src/debot';
import { TDebotStageItem } from '/src/types';
import './index.scss';

type TProps = {
	params: TDebotStageItem;
	debotAddress: string;
	type?: string;
	isMultiline?: boolean;
	customCallback?: (inputValue: string) => unknown;
	customErrorText?: string;
	setCustomErrorText?: Dispatch<SetStateAction<string>>;
}

const Input: FC<TProps> = ({
	params,
	type = 'text',
	isMultiline = false,
	customCallback,
	customErrorText,
	setCustomErrorText,
	debotAddress,
}) => {
	const [inputValue, setInputValue] = useState('');
	const [errorText, setErrorText] = useState('');
	const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement>(null);
	const { text, interfaceAddress, functionId } = params;

	useEffect(() => {
		inputRef?.current?.focus();
	}, []);

	const handleInputChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		setInputValue(event.target.value);
		setErrorText('');

		if (setCustomErrorText)
			setCustomErrorText('');
	}

	const handleSend = async () => {
		if (errorText || customErrorText || !inputValue)
			return;

		try {
			if (customCallback)
				return customCallback(inputValue);

			const value = getEnvVariableFromInput(inputValue) || inputValue;

			await DEngine.callDebotFunction(debotAddress, interfaceAddress, functionId, { value: encodeString(value) });
		} catch(err) {
			setErrorText((err as Error).message);
		}
	}

	const handleKeyPress = (event: KeyboardEvent) => {
		const { shiftKey, key, altKey } = event;
		const isEnter = key === 'Enter';
		const isSendKeyPressed = isEnter && !shiftKey && !altKey;

		if (isSendKeyPressed) {
			event.preventDefault();

			handleSend();
		}
	}

	const inputClassName = `stage-component__input ${errorText || customErrorText ? 'stage-component__input--error' : ''}`;

	return (
		<div className='stage-component__input-container'>
			{!!text && <span className='stage-component__input-label'>{text}</span>}
			<div className='stage-component__input-flex'>
				{isMultiline
					? <textarea
						className={inputClassName}
						placeholder='Enter...'
						value={inputValue}
						onChange={handleInputChange}
						onKeyPress={handleKeyPress}
						ref={inputRef as RefObject<HTMLTextAreaElement>}
					></textarea>
					: <input
						className={inputClassName}
						autoComplete="off"
						type={type}
						placeholder='Enter...'
						value={inputValue}
						onChange={handleInputChange}
						onKeyPress={handleKeyPress}
						ref={inputRef as RefObject<HTMLInputElement>}
					/>
				}
				<div className='stage-component__input-send-button' onClick={handleSend}>Send</div>
			</div>
			{!!errorText && <span className='stage-component__input-error'>{errorText}</span>}
			{!!customErrorText && <span className='stage-component__input-error'>{customErrorText}</span>}
		</div>
	)
};

export default Input;
