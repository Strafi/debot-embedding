import TonClient from '/src/TonClient';

async function checkIsValidAddress(address: string): Promise<boolean> {
	try {
		const result = await TonClient.client.utils.convert_address({
			address,
			output_format: {
				type: 'Hex',
			}
		})

		return !!result;
	} catch (err) {
		return false;
	}
}

export default checkIsValidAddress;
