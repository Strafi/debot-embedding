import { TonClient } from '@tonclient/core';
import { libWeb } from '@tonclient/lib-web';
import { TON_NETWORK_LS_FIELD, MAIN_NETWORK, DEV_NETWORK, FLD_NETWORK } from '/src/constants';

// eslint-disable-next-line react-hooks/rules-of-hooks
TonClient.useBinaryLibrary(libWeb);

class TonClientController {
	constructor() {
		this.selectedNetwork = localStorage.getItem(TON_NETWORK_LS_FIELD) || MAIN_NETWORK;

		this.mainNetClient = new TonClient({
			network: {
				server_address: MAIN_NETWORK,
			},
		});

		this.devNetClient = new TonClient({
			network: {
				server_address: DEV_NETWORK,
			},
		});

		this.fldNetClient = new TonClient({
			network: {
				server_address: FLD_NETWORK,
			},
		});
	}

	setSelectedNetwork(network) {
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

const clientController = new TonClientController();

export default clientController;
