import { TonClient } from '@tonclient/core';
import { libWeb, libWebSetup } from '@tonclient/lib-web';

import { getStaticAssetUrl } from '/src/helpers';
import { TON_NETWORK_LS_FIELD, MAIN_NETWORK } from '/src/constants';

libWebSetup({
	binaryURL: getStaticAssetUrl('tonclient.wasm'),
});

//@ts-ignore
TonClient.useBinaryLibrary(libWeb);

interface ITonClientController {
	selectedNetwork: string;
	setSelectedNetwork: (network: string) => void;
	client: TonClient;
}

class TonClientController implements ITonClientController {
	selectedNetwork = localStorage.getItem(TON_NETWORK_LS_FIELD) || MAIN_NETWORK;
	private clientsMap = new Map<string, TonClient>();

	setSelectedNetwork(network: string) {
		localStorage.setItem(TON_NETWORK_LS_FIELD, network);

		this.selectedNetwork = network;
	}

	get client(): TonClient {
		const client = this.clientsMap.get(this.selectedNetwork);

		if (!client) {
			const newClient = new TonClient({
				network: {
					endpoints: [this.selectedNetwork],
				},
			});

			this.clientsMap.set(this.selectedNetwork, newClient);

			return newClient;
		}

		return client;
	}
}

export default new TonClientController();
