import React, { useState, useContext, useEffect, useCallback, FC, ChangeEvent } from 'react';
import TonClient from '/src/TonClient';
import { addLocalDebot } from '/src/helpers';
import { ControlWithPopupContext } from '/src/contexts';
import { OptionsList } from '/src/components';
import { MainNetIcon, DevNetIcon, FldNetIcon, NetworkIcon } from '/src/components/icons';
import { MAIN_NETWORK, DEV_NETWORK, FLD_NETWORK } from '/src/constants';
import './index.scss';

type TProps = {
	prefilledAddress?: string;
}

const AddDebot: FC<TProps> = ({ prefilledAddress = '' }) => {
	const popupContext = useContext(ControlWithPopupContext);
	const [debotName, setDebotName] = useState('');
	const [debotAddress, setDebotAddress] = useState(prefilledAddress);
	const [selectedNetwork, setSelectedNetwork] = useState(TonClient.selectedNetwork);

	const handleAddressChange = (e: ChangeEvent<HTMLInputElement>) => setDebotAddress(e.target.value);

	const handleLabelChange = (e: ChangeEvent<HTMLInputElement>) => setDebotName(e.target.value);

	const handleAddDebot = useCallback(() => {
		if (debotName && debotAddress) {
			const debotObj = {
				title: debotName,
				address: debotAddress,
				network: selectedNetwork,
			}

			addLocalDebot(debotObj);

			if (popupContext)
				popupContext.closePopup();
		}
	}, [debotAddress, debotName, popupContext, selectedNetwork]);

	const handlePressOnEnter = useCallback(event => {
		const { shiftKey, key, altKey } = event;
		const isEnter = key === 'Enter';
		const shouldHandle = isEnter && !shiftKey && !altKey;

		if (shouldHandle)
			handleAddDebot();
	}, [handleAddDebot]);

	useEffect(() => {
		document.addEventListener('keypress', handlePressOnEnter);

		return () => document.removeEventListener('keypress', handlePressOnEnter)
	}, [handlePressOnEnter]);

	const renderSelectedItem = () => (
		<div className='options-list__selected-item'>
			<NetworkIcon network={selectedNetwork} />
			{selectedNetwork}
		</div>
	)

	return (
		<div className='add-debot'>
			<div className='add-debot__horizontal-inputs'>
				<div className='add-debot__input-container'>
					<span className='add-debot__input-label'>DeBot name</span>
					<input
						className='add-debot__input'
						type='text'
						placeholder='Enter...'
						value={debotName}
						onChange={handleLabelChange}
					/>
				</div>
				<OptionsList selectedItem={renderSelectedItem()} height={126} width={200}>
					<div
						className='options-list__list-item'
						onClick={() => setSelectedNetwork(MAIN_NETWORK)}
					>
						<MainNetIcon />
						{MAIN_NETWORK}
					</div>
					<div
						className='options-list__list-item'
						onClick={() => setSelectedNetwork(DEV_NETWORK)}
					>
						<DevNetIcon />
						{DEV_NETWORK}
					</div>
					<div
						className='options-list__list-item'
						onClick={() => setSelectedNetwork(FLD_NETWORK)}
					>
						<FldNetIcon />
						{FLD_NETWORK}
					</div>
				</OptionsList>
			</div>
			<div className='add-debot__input-container'>
				<span className='add-debot__input-label'>DeBot address</span>
				<input
					className='add-debot__input'
					type='text'
					placeholder='Enter...'
					value={debotAddress}
					onChange={handleAddressChange}
				/>
			</div>
			<div onClick={handleAddDebot} className='add-debot__submit-button'>Add to list</div>
		</div>
	);
}

export default AddDebot;
