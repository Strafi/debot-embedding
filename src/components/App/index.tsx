import React, { FC, useLayoutEffect, useContext, useRef } from 'react';
import { useHistory } from 'react-router-dom';

import TonClient from '/src/TonClient';
import { useSelector, useDispatch } from '/src/store/hooks';
import WalletService from '/src/WalletService';
import { createDebotUrl, isCustomScrollBar } from '/src/helpers';
import { DebotOnlyContext, AppComponentRefContext } from '/src/contexts';
import { Header, ConnectWallet } from '/src/components';
import { SigningBox, ApproveWindow } from '/src/components';
import { setWallet } from '/src/store/actions/account';
import './index.scss';

type TProps = {
	initialDebotAddress?: string;
	initialNetwork?: string;
	isEventsOnly?: boolean;
}

const App: FC<TProps> = ({ children, initialDebotAddress, isEventsOnly, initialNetwork }) => {
	const history = useHistory();
	const dispatch = useDispatch();
	const isDebotOnly = useContext(DebotOnlyContext);
	const appElementRef = useRef<HTMLDivElement>(null);
	const isConnectWalletModalVisible = useSelector(state => !!state.account.connectWalletModal);
	const isSigningBoxVisible = useSelector(state => !!state.debot.signingBox);
	const isApproveWindowVisible = useSelector(state => !!state.debot.approveWindow);
	const hasWallet = useSelector(state => !!state.account.wallet);

	useLayoutEffect(() => {
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

		if (initialNetwork)
			TonClient.setSelectedNetwork(initialNetwork);

		onMount();
	}, []);

	if (isEventsOnly)
		return (<>{children}</>);

	const isScrollDisabled = isSigningBoxVisible || isApproveWindowVisible || isConnectWalletModalVisible;
	const appClassNames = `debot-embedding ${isCustomScrollBar() ? 'with-custom-scrollbar' : ''} ${isScrollDisabled ? 'debot-embedding--scroll-disabled' : ''}`;

	return (
		<div ref={appElementRef} className={appClassNames}>
			<AppComponentRefContext.Provider value={appElementRef}>
				{isConnectWalletModalVisible && !hasWallet && <ConnectWallet />}
				{isSigningBoxVisible && <SigningBox />}
				{isApproveWindowVisible && <ApproveWindow />}
				<Header />
				<div className='debot-embedding__flex-wrapper'>
					{children}
				</div>
			</AppComponentRefContext.Provider>
		</div>
	);
}

export default App;
