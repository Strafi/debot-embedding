import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import WalletService from '/src/WalletService';
import { Header, ConnectWallet } from '/src/components';
import { setWallet } from '/src/store/actions/account';
import './index.scss';

const App = ({ children, headerParams }) => {
	const dispatch = useDispatch();
	const isConnectWalletModalVisible = useSelector(state => !!state.account.connectWalletModal);
	const wallet = useSelector(state => !!state.account.wallet);

	useEffect(() => {
		const onMount = async () => {
			const providerState = await WalletService.getProviderState();

			if (providerState.permissions.accountInteraction) {
				const connectedWallet = await WalletService.connect();

				if (connectedWallet && !wallet)
					dispatch(setWallet(connectedWallet));
			}
		}

		onMount();
	}, []);

	return (
		<div className='app-container'>
			<Header headerParams={headerParams} />
			<div className='app-container__flex-wrapper'>
				{children}
				{isConnectWalletModalVisible && !wallet && <ConnectWallet />}
			</div>
		</div>
	);
}

export default App;
