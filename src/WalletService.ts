import CrystallWalletProvider, { hasTonProvider, Permissions, ProviderApiResponse } from 'ton-inpage-provider';

import store from '/src/store';
import DEngine from '/src/debot/DEngine';
import { setWallet } from '/src/store/actions/account';
import { DEBOT_ADDRESS_SEARCH_PARAM } from '/src/constants';

export const WalletErrors = {
	NO_PROVIDER: 'Please, install Crystall Wallet extension to use this DeBot',
	INSUFFICIENT_PERMISSIONS: 'Please, provide all requested permissions to use this DeBot',
}

export type TWalletData = {
	address: Permissions['accountInteraction']['address'] | string;
	publicKey: Permissions['accountInteraction']['publicKey'];
	contractType: Permissions['accountInteraction']['contractType'];
}

export interface IWalletService {
	isConnected: boolean;
	isPermissionsSubscribed: boolean;
	responseToConnectionWaiter: typeof Promise.resolve | null;
	rejectToConnectionWaiter: typeof Promise.reject | null;
	connect: () => Promise<TWalletData>;
	disconnect: () => Promise<void>;
	getProviderState: () => Promise<ProviderApiResponse<'getProviderState'>>;
	sign: (data: string, publicKey: string) => Promise<any>;
	waitForConnection: () => Promise<unknown>;
	rejectWaitingConnections: () => void;
}

class WalletService implements IWalletService {
	isConnected = false;
	isPermissionsSubscribed = false;
	responseToConnectionWaiter = null;
	rejectToConnectionWaiter = null;

	async connect(): Promise<TWalletData> {
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
	
			this.subscribeOnPermissions();
	
			this.setConnectionStatus(true);
	
			return this.formWalletData(accountInteraction);
		} catch (err) {
			throw new Error(WalletErrors.INSUFFICIENT_PERMISSIONS);
		}
	}

	async disconnect(): Promise<void> {
		if (!this.isConnected)
			return;

		try {
			await CrystallWalletProvider.disconnect();

			store.dispatch(setWallet(null));
			this.setConnectionStatus(false);
		} catch(err) {
			console.error(err);
		}
	}

	async getProviderState(): Promise<ProviderApiResponse<'getProviderState'>> {
		const currentProviderState = await CrystallWalletProvider.getProviderState();

		return currentProviderState;
	}

	async sign(data: string, publicKey: string): Promise<any> {
		//@ts-ignore signData exists but somewhy it is not described in rawApi type
		const signed = await CrystallWalletProvider.rawApi.signData({ data, publicKey });

		return signed;
	}

	async waitForConnection(): Promise<unknown> {
		const waitPromise = new Promise((res, rej) => {
			this.responseToConnectionWaiter = res;
			this.rejectToConnectionWaiter = rej;
		});

		return await waitPromise;
	}

	rejectWaitingConnections(): void {
		if (this.rejectToConnectionWaiter) {
			this.rejectToConnectionWaiter(WalletErrors.INSUFFICIENT_PERMISSIONS);

			this.rejectToConnectionWaiter = null;
		}
	}

	private setConnectionStatus(isConnected: boolean): void {
		this.isConnected = isConnected;

		if (isConnected && this.responseToConnectionWaiter) {
			this.responseToConnectionWaiter(true);

			this.responseToConnectionWaiter = null;
		}
	}

	private subscribeOnPermissions(): void {
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

					store.dispatch(setWallet(this.formWalletData(event.permissions.accountInteraction)));
				});
			})
			.catch(err => {
				this.isPermissionsSubscribed = false;
				console.error(err);
			});
	}

	private formWalletData(accountInteraction?: TWalletData | Permissions['accountInteraction']): TWalletData {
		if (!accountInteraction)
			return null;

		const { address, publicKey, contractType } = accountInteraction;

		const walletData = {
			address: typeof address === 'string' ? address : address.toString(),
			publicKey,
			contractType,
		};

		return walletData;
	}
}

export default new WalletService();
