import React, { FC } from 'react';

import { useSelector, useDispatch } from '/src/store/hooks';
import WalletService from '/src/WalletService';
import { setConnectWalletModal, setWallet } from '/src/store/actions/account';
import { Loader } from '../../';
import Modal from '../Modal';

import './index.scss';

const DEFAULT_MESSAGE = 'Account data will be used to communicate with DeBots';

const ConnectWallet = () => {
	const dispatch = useDispatch();
	const modalData = useSelector(state => state.account.connectWalletModal);
	const { message = DEFAULT_MESSAGE, isError } = modalData || {};

	const closeModal = (): void => {
		WalletService.rejectWaitingConnections();
		dispatch(setConnectWalletModal(null));
	};

	const retryConnect = async (): Promise<void> => {
		try {
			dispatch(setConnectWalletModal({ isError: false }));

			const connectedWallet = await WalletService.connect();

			dispatch(setWallet(connectedWallet));
			closeModal();
		} catch (err) {
			dispatch(setConnectWalletModal({ message: (err as Error).message, isError: true }));
		}
	};

	const headerText = isError ? 'Wallet Connect Error' : 'Connect Wallet';

	return (
		<Modal
			handleCloseModal={isError ? closeModal : null}
			containerClassName='connect-wallet-modal'
		>
			<div className='connect-wallet-modal__header'>
				{headerText}
			</div>
			<div className='connect-wallet-modal__description'>
				{message}
			</div>
			{isError
				? <div className='connect-wallet-modal__retry' onClick={retryConnect}>Connect Wallet</div>
				: <Loader />
			}
		</Modal>
	);
}

export default ConnectWallet;
