import tonClientController from '/src/TonClient';

class BaseInterface {
	constructor(id, abi) {
		this.id = id;
		this.abi = abi;
	}

	async call(params) {
		try {
			const decodedMessage = await tonClientController.client.abi.decode_message({
				abi: {
					type: 'Contract',
					value: this.abi,
				},
				message: params.message,
			});

			const extendedParams = {
				...params,
				...decodedMessage,
			}

			try {
				this[decodedMessage.name](extendedParams);
			} catch (err) {
				throw new Error(`Function does not exist on interface: ${this.constructor.name}`);
			}
		} catch (err) {
			console.error('Interface execution failed: ', err);
		}
	}
}

export default BaseInterface;
