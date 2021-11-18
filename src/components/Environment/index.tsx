import React, { useState, useEffect, useCallback, FC, ChangeEvent, MouseEvent } from 'react';
import { useSelector } from '/src/store/hooks';
import { addEnvVariable, removeEnvVariable, isCustomScrollBar } from '/src/helpers';
import { CancelIcon, EnvironmentIcon } from '/src/components/icons';

import './index.scss';

const Environment: FC = () => {
	const envVariables = useSelector(state => state.environment.variables);
	const envEntries = Object.entries(envVariables);
	const [envKey, setEnvKey] = useState('');
	const [envValue, setEnvValue] = useState('');
	const [isCopiedVisible, setIsCopiedVisible] = useState(false);

	const handleKeyChange = (e: ChangeEvent<HTMLInputElement>) => setEnvKey(e.target.value);

	const handleValueChange = (e: ChangeEvent<HTMLInputElement>) => setEnvValue(e.target.value);

	const handleAddVariable = useCallback(() => {
		if (envKey && envValue) {
			addEnvVariable(envKey, envValue);
			setEnvKey('');
			setEnvValue('');
		}
	}, [envKey, envValue]);

	const handleRemoveVariable = (e: MouseEvent, key: string) => {
		e.stopPropagation();
		
		removeEnvVariable(key);
	}

	const handlePressOnEnter = useCallback(event => {
		const { shiftKey, key, altKey } = event;
		const isEnter = key === 'Enter';
		const shouldHandle = isEnter && !shiftKey && !altKey;

		if (shouldHandle)
			handleAddVariable();
	}, [handleAddVariable]);

	useEffect(() => {
		document.addEventListener('keypress', handlePressOnEnter);

		return () => document.removeEventListener('keypress', handlePressOnEnter)
	}, [handlePressOnEnter]);

	const copyToClipboard = async (value: string): Promise<void> => {
		try {
			await navigator.clipboard.writeText(value);

			setIsCopiedVisible(true);

			setTimeout(() => setIsCopiedVisible(false), 2000);
		} catch(err) {
			console.error('Clipboard API not supported');
		}
	}

	const renderVariablesTableItems = () => envEntries.map(([key, value]) => (
		<div key={key} className='environment__table-row'>
			<div className='environment__table-col environment__table-col--cancel'>
				<CancelIcon onClick={(e: MouseEvent) => handleRemoveVariable(e, key)}/>
			</div>
			<div className='environment__table-col environment__table-col--title'>{key}</div>
			<div className='environment__table-col environment__table-col--clickable' onClick={() => copyToClipboard(value)}>{value}</div>
		</div>
	));

	const copiedIndicatorClassName = `environment__copied-indicator ${isCopiedVisible ? 'environment__copied-indicator--visible' : ''}`;

	return (
		<div className='environment'>
			<div className={`environment__table--wrapper ${isCustomScrollBar() ? 'with-custom-scrollbar' : ''}`}>
				{envEntries.length
					? <div className='environment__table'>
						{renderVariablesTableItems()}
					</div>
					: <div className='environment__image'>
						<div className='environment__image-text'>
							Here you can store something to use later (address or public key, for example).
						</div>
						<div className='environment__image--flex-container'>
							<EnvironmentIcon />
							<div className='environment__image-text'>
								You can access stored data as variables in inputs by adding the &apos;$&apos; prefix to key, or copy data to the clipboard by click on it.
							</div>
						</div>
						<div className='environment__image-text environment__image-text--warning'>
							This storage is not encrypted, so you should not store private keys or seed-phrase here.
						</div>
					</div>
				}
			</div>
			<div className='environment__input-container'>
				<input
					className='environment__input'
					type='text'
					placeholder='Key'
					value={envKey}
					onChange={handleKeyChange}
				/>
				<span className='environment__divider'>:</span>
				<input
					className='environment__input'
					type='text'
					placeholder='Value'
					value={envValue}
					onChange={handleValueChange}
				/>
			</div>
			<div className='environment__footer'>
				<div className={copiedIndicatorClassName}>Copied to clipboard!</div>
				<div onClick={handleAddVariable} className='environment__submit-button'>Add variable</div>
			</div>
		</div>
	);
}

export default Environment;
