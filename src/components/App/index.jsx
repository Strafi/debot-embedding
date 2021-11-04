import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import WalletService from '/src/WalletService';
import { Header, DebotsList, DebotPage, ConnectWallet } from '/src/components';
import { setWallet } from '/src/store/actions/account';
import './index.scss';

const App = () => {
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
			<Header />
			<div className='app-container__flex-wrapper'>
				<Switch>
					<Route exact path='/' component={DebotsList} />
					<Route path='/debot' component={DebotPage} />
				</Switch>
				{isConnectWalletModalVisible && !wallet && <ConnectWallet />}
			</div>
		</div>
	);
}

export default App;
