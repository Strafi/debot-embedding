import tonClientController from '/src/tonClient';
import { MNEMONIC_WORD_COUNT, DERIVATION_PATH } from '/src/constants';

async function genKeyPairFromMnemonic(mnemonic) {
	const hdkMaster = await tonClientController.client.crypto.hdkey_xprv_from_mnemonic({
		dictionary: 1,
		word_count: MNEMONIC_WORD_COUNT,
		phrase: mnemonic,
	});

	const hdkRoot = await tonClientController.client.crypto.hdkey_derive_from_xprv_path({
		xprv: hdkMaster.xprv,
		path: DERIVATION_PATH,
	});

	const { secret } = await tonClientController.client.crypto.hdkey_secret_from_xprv({
		xprv: hdkRoot.xprv,
	});

	const keyPair = await tonClientController.client.crypto.nacl_sign_keypair_from_secret_key({ secret });

	return {
		secret,
		public: keyPair.public,
	};
}

export default genKeyPairFromMnemonic;
