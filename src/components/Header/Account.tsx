import React, { FC } from 'react';

import { useSelector, useDispatch } from '/src/store/hooks';
import WalletService from '/src/WalletService';
import { LogoutIcon } from '/src/components/icons';
import { setConnectWalletModal, setWallet } from '/src/store/actions/account';
import { sliceAddress } from '/src/helpers';
import './index.scss';

const HeaderAccount: FC = () => {
	const dispatch = useDispatch();
	const wallet = useSelector(state => state.account.wallet);

	const handleAddAccount = async () => {
		try {
			dispatch(setConnectWalletModal({ isError: false }));

			const walletData = await WalletService.connect();

			dispatch(setWallet(walletData));
			dispatch(setConnectWalletModal(null));
		} catch(err) {
			dispatch(setConnectWalletModal({ message: (err as Error).message, isError: true }));
		}
	};

	const handleLogout = async () => {
		try {
			await WalletService.disconnect();
		} catch (err) {
			console.error(err);
		}
	};

	if (wallet) {
		return (
			<div className='header-container__account'>
				<span>{sliceAddress(wallet.address)}</span>
				<LogoutIcon width='22px' height='22px' onClick={handleLogout}/>
			</div>
		);
	}	

	return (
		<div
			className='header-container__connect-button'
			onClick={handleAddAccount}
		>
			Connect Wallet
		</div>
	);
}

export default HeaderAccount;
