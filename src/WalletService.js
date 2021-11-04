import CrystallWalletProvider, { hasTonProvider } from 'ton-inpage-provider';

import store from '/src/store';
import DEngine from '/src/debot/DEngine';
import { setWallet } from '/src/store/actions/account';
import { DEBOT_ADDRESS_SEARCH_PARAM } from '/src/constants';

export const WalletErrors = {
	NO_PROVIDER: 'Please, install Crystall Wallet extension to use this DeBot',
	INSUFFICIENT_PERMISSIONS: 'Please, provide all requested permissions to use this DeBot',
}

class WalletService {
	constructor() {
		this.isConnected = false;
		this.isPermissionsSubscribed = false;
		this.responseToConnectionWaiter = null;
		this.rejectToConnectionWaiter = null;
	}

	async connect() {
		const hasProvider = await hasTonProvider();

		if (!hasProvider) {
			throw new Error(WalletErrors.NO_PROVIDER);
		}

		await CrystallWalletProvider.ensureInitialized();

		try {
			const { accountInteraction } = await CrystallWalletProvider.rawApi.requestPermissions({
				permissions: ['tonClient', 'accountInteraction']
			});
	
			if (!accountInteraction) {
				throw new Error(WalletErrors.INSUFFICIENT_PERMISSIONS);
			}
	
			this._subscribeOnPermissions();
	
			this._setConnectionStatus(true);
	
			return this._formWalletData(accountInteraction);
		} catch (err) {
			throw new Error(WalletErrors.INSUFFICIENT_PERMISSIONS);
		}
	}

	async disconnect() {
		if (!this.isConnected)
			return;

		try {
			await CrystallWalletProvider.disconnect();

			store.dispatch(setWallet(null));
			this._setConnectionStatus(false);
		} catch(err) {
			console.error(err);
		}
	}

	async getProviderState() {
		const currentProviderState = await CrystallWalletProvider.getProviderState();

		return currentProviderState;
	}

	async sign(data, publicKey) {
		const signed = await CrystallWalletProvider.rawApi.signData({ data, publicKey });

		return signed;
	}

	async waitForConnection() {
		const waitPromise = new Promise((res, rej) => {
			this.responseToConnectionWaiter = res;
			this.rejectToConnectionWaiter = rej;
		});

		return await waitPromise;
	}

	rejectWaitingConnections() {
		if (this.rejectToConnectionWaiter) {
			this.rejectToConnectionWaiter(WalletErrors.INSUFFICIENT_PERMISSIONS);

			this.rejectToConnectionWaiter = null;
		}
	}

	_setConnectionStatus(isConnected) {
		this.isConnected = isConnected;

		if (isConnected && this.responseToConnectionWaiter) {
			this.responseToConnectionWaiter(true);

			this.responseToConnectionWaiter = null;
		}
			
	}

	_subscribeOnPermissions() {
		if (this.isPermissionsSubscribed)
			return;

		this.isPermissionsSubscribed = true;

		CrystallWalletProvider.subscribe('permissionsChanged')
			.then(permissionsSubscriber => {
				permissionsSubscriber.on('data', event => {
					this.isConnected = !!event.permissions.accountInteraction;

					const searchParams = new URLSearchParams(window.location.search);
					const debotAddress = searchParams.get(DEBOT_ADDRESS_SEARCH_PARAM);

					if (debotAddress)
						DEngine.reloadDebot(debotAddress);

					store.dispatch(setWallet(this._formWalletData(event.permissions.accountInteraction)));
				});
			})
			.catch(err => {
				this.isPermissionsSubscribed = false;
				console.error(err);
			});
	}

	_formWalletData(accountInteraction) {
		if (!accountInteraction)
			return null;

		const { address, publicKey, contractType } = accountInteraction;

		const walletData = {
			address: typeof address === 'string' ? address : address._address,
			publicKey,
			contractType,
		};

		return walletData;
	}
}

export default new WalletService();
