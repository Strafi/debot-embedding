import { TonClient } from '@tonclient/core';
import { libWeb } from '@tonclient/lib-web';
import { TON_NETWORK_LS_FIELD, MAIN_NETWORK, DEV_NETWORK, FLD_NETWORK } from '/src/constants';

TonClient.useBinaryLibrary(libWeb);

interface ITonClientController {
	selectedNetwork: string;
}

class TonClientController implements ITonClientController {
	selectedNetwork = localStorage.getItem(TON_NETWORK_LS_FIELD) || MAIN_NETWORK;
	private mainNetClient = new TonClient({
		network: {
			server_address: MAIN_NETWORK,
		},
	});
	private devNetClient = new TonClient({
		network: {
			server_address: DEV_NETWORK,
		},
	});
	private fldNetClient = new TonClient({
		network: {
			server_address: FLD_NETWORK,
		},
	});

	setSelectedNetwork(network: string) {
		localStorage.setItem(TON_NETWORK_LS_FIELD, network);

		this.selectedNetwork = network;
	}

	get client() {
		if (this.selectedNetwork === DEV_NETWORK)
			return this.devNetClient;

		if (this.selectedNetwork === FLD_NETWORK)
			return this.fldNetClient;

		return this.mainNetClient;
	}
}

export default new TonClientController();
