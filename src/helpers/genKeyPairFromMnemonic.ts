import TonClient from '/src/TonClient';
import { MNEMONIC_WORD_COUNT, DERIVATION_PATH } from '/src/constants';

async function genKeyPairFromMnemonic(mnemonic: string): Promise<{ secret: string, public: string }> {
	const hdkMaster = await TonClient.client.crypto.hdkey_xprv_from_mnemonic({
		dictionary: 1,
		word_count: MNEMONIC_WORD_COUNT,
		phrase: mnemonic,
	});

	const hdkRoot = await TonClient.client.crypto.hdkey_derive_from_xprv_path({
		xprv: hdkMaster.xprv,
		path: DERIVATION_PATH,
	});

	const { secret } = await TonClient.client.crypto.hdkey_secret_from_xprv({
		xprv: hdkRoot.xprv,
	});

	const keyPair = await TonClient.client.crypto.nacl_sign_keypair_from_secret_key({ secret });

	return {
		secret,
		public: keyPair.public,
	};
}

export default genKeyPairFromMnemonic;
