import React, { useState, useEffect, FC } from 'react';
import { useRouteMatch } from 'react-router-dom';

import TonClient from '/src/TonClient';
import {  MainNetIcon, DevNetIcon, FldNetIcon, NetworkIcon } from '/src/components/icons';
import { OptionsList } from '/src/components';
import { MAIN_NETWORK, DEV_NETWORK, FLD_NETWORK } from '/src/constants';
import './index.scss';

const HeaderNetworkSelector: FC = () => {
	const [selectedNetwork, setSelectedNetwork] = useState(TonClient.selectedNetwork);
	const match = useRouteMatch('/debot');

	useEffect(() => {
		setSelectedNetwork(TonClient.selectedNetwork);
	}, [match]);

	const handleSelectNetwork = (network: string): void => {
		TonClient.setSelectedNetwork(network);
		setSelectedNetwork(network);
	};

	const renderSelectedNetwork = () => (
		<div className='options-list__selected-item'>
			<NetworkIcon network={selectedNetwork} />
		</div>
	);

	return (
		<OptionsList selectedItem={renderSelectedNetwork()} height={126} width={200} isDisabled={!!match}>
			<div
				className='options-list__list-item'
				onClick={() => handleSelectNetwork(MAIN_NETWORK)}
			>
				<MainNetIcon />
				{MAIN_NETWORK}
			</div>
			<div
				className='options-list__list-item'
				onClick={() => handleSelectNetwork(DEV_NETWORK)}
			>
				<DevNetIcon />
				{DEV_NETWORK}
			</div>
			<div
				className='options-list__list-item'
				onClick={() => handleSelectNetwork(FLD_NETWORK)}
			>
				<FldNetIcon />
				{FLD_NETWORK}
			</div>
		</OptionsList>
	);
}

export default HeaderNetworkSelector;
