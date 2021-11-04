import React, { useState, useEffect } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import WalletService from '/src/WalletService';
import tonClientController from '/src/tonClient';
import { BackIcon, MainNetIcon, DevNetIcon, FldNetIcon, NetworkIcon, LogoutIcon } from '/src/components/icons';
import { OptionsList } from '/src/components';
import { MAIN_NETWORK, DEV_NETWORK, FLD_NETWORK } from '/src/constants';
import { setConnectWalletModal, setWallet } from '/src/store/actions/account';
import { sliceAddress } from '/src/helpers';
import SearchBar from '../SearchBar';
import './index.scss';

const Header = () => {
	const dispatch = useDispatch();
	const [selectedNetwork, setSelectedNetwork] = useState(tonClientController.selectedNetwork);
	const match = useRouteMatch('/debot');
	const wallet = useSelector(state => state.account.wallet);

	useEffect(() => {
		setSelectedNetwork(tonClientController.selectedNetwork);
	}, [match]);

	const handleSelectNetwork = (network) => {
		tonClientController.setSelectedNetwork(network);
		setSelectedNetwork(network);
	}

	const renderSelectedNetwork = () => (
		<div className='options-list__selected-item'>
			<NetworkIcon network={selectedNetwork} />
		</div>
	)

	const handleAddAccount = async () => {
		try {
			dispatch(setConnectWalletModal({ isError: false }));

			const walletData = await WalletService.connect();

			dispatch(setWallet(walletData));
			dispatch(setConnectWalletModal(null));
		} catch(err) {
			dispatch(setConnectWalletModal({ message: err.message, isError: true }));
		}
	};

	const handleLogout = async () => {
		try {
			await WalletService.disconnect();
		} catch (err) {
			console.error(err);
		}
	};

	const backButtonClassName = `header-container__back-button ${!match ? 'header-container__back-button--disabled' : ''}`

	return (
		<header className='header-container'>
			<Link to='/' className={backButtonClassName}>
				<BackIcon />
			</Link>
			<SearchBar />
			<div className='header-container__settings-bar'>
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
				{wallet
					? <div className='header-container__account'>
						<span>{sliceAddress(wallet.address)}</span>
						<LogoutIcon width='22px' height='22px' onClick={handleLogout}/>
					</div>
					: <div
						className='header-container__connect-button'
						onClick={handleAddAccount}
					>
						Connect Wallet
					</div>
				}
			</div>
		</header>
	);
}

export default Header;
