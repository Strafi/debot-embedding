import React, { FC, KeyboardEvent, useState } from 'react';

import { CUSTOM_NETWORKS_LS_FIELD } from '/src/constants';

interface IProps {
	handleSelectNetwork: (network: string) => void;
}

const AddCustomNetwork: FC<IProps> = ({ handleSelectNetwork }) => {
	const [isInputStep, setIsInputStep] = useState(false);
	const [inputValue, setInputValue] = useState('');

	const setNetwork = () => {
		const customNetworks = JSON.parse(localStorage.getItem(CUSTOM_NETWORKS_LS_FIELD)!) || [];
		customNetworks.push(inputValue);
		localStorage.setItem(CUSTOM_NETWORKS_LS_FIELD, JSON.stringify(customNetworks));

		setInputValue('');
		setIsInputStep(false);

		handleSelectNetwork(inputValue);
	}

	const handleKeyPress = (event: KeyboardEvent): void => {
		const { shiftKey, key, altKey } = event;
		const isEnter = key === 'Enter';
		const shouldSetNetwork = isEnter && !shiftKey && !altKey;

		if (shouldSetNetwork) {
			event.preventDefault();
			setNetwork();
		}
	}

	if (isInputStep) {
		return (
			<div className='header-container__custom-network-input-container'>
				<input
					className='header-container__custom-network-input'
					type='text'
					value={inputValue}
					onClick={(e) => e.stopPropagation()}
					onChange={(e) => setInputValue(e.target.value)}
					onKeyPress={handleKeyPress}
				/>
				<span
					className='header-container__custom-network-confirm'
					onClick={(e) => {
						e.stopPropagation();
						setNetwork();
					}}
				>
					Add
				</span>
			</div>
		)
	}

	return (
		<div
			className='header-container__custom-network-add'
			onClick={(e) => {
				e.stopPropagation();
				e.preventDefault();
				setIsInputStep(true)
			}}
		>
			Custom
		</div>
	)
}

export default AddCustomNetwork;
