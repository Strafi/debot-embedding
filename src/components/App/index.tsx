import React, { FC, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';

import { useSelector, useDispatch } from '/src/store/hooks';
import WalletService from '/src/WalletService';
import { createDebotUrl } from '/src/helpers';
import DebotOnlyContext from '/src/contexts/DebotOnlyContext';
import { Header, ConnectWallet } from '/src/components';
import { setWallet } from '/src/store/actions/account';
import './index.scss';

type TProps = {
	initialDebotAddress?: string;
}

const App: FC<TProps> = ({ children, initialDebotAddress }) => {
	const history = useHistory();
	const dispatch = useDispatch();
	const isDebotOnly = useContext(DebotOnlyContext);
	const isConnectWalletModalVisible = useSelector(state => !!state.account.connectWalletModal);
	const hasWallet = useSelector(state => !!state.account.wallet);

	useEffect(() => {
		const onMount = async () => {
			const providerState = await WalletService.getProviderState();

			if (providerState.permissions.accountInteraction) {
				const connectedWallet = await WalletService.connect();

				if (connectedWallet && !hasWallet)
					dispatch(setWallet(connectedWallet));
			}

			if (initialDebotAddress) {
				const debotUrlSlug = isDebotOnly ? '/' : '/debot';
				const debotUrl = createDebotUrl(initialDebotAddress, debotUrlSlug);
	
				history.replace(debotUrl);
			}
		}

		onMount();
	}, []);

	return (
		<div className='app-container'>
			<Header />
			<div className='app-container__flex-wrapper'>
				{children}
				{isConnectWalletModalVisible && !hasWallet && <ConnectWallet />}
			</div>
		</div>
	);
}

export default App;
