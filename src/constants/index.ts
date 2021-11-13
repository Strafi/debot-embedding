const COMPONENTS_BINDINGS = {
	TEXT: 'Text',
	INPUT: 'Input',
	TEXTAREA: 'Textarea',
	AMOUNT_INPUT: 'AmountInput',
	CONFIRM_INPUT: 'ConfirmInput',
	ADDRESS_INPUT: 'AddressInput',
	TOKENS_INPUT: 'TokensInput',
	MENU: 'Menu',
	STDOUT: 'Stdout',
	MEDIA: 'Media',
}

const MEDIA_STATUS = {
    Success: 0,
    UnsupportedMediaType: 1,
    InvalidDataScheme: 2,
}

const EXPLORER_BASE_URL = 'https://ton.live/accounts/accountDetails?id=';

const DEBOT_ADDRESS_SEARCH_PARAM = 'debotAddress';

const DEBOT_WC = -31;
const MNEMONIC_WORD_COUNT = 12;
const DERIVATION_PATH = "m/44'/396'/0'/0/0";

const USER_DEBOTS_LS_FIELD = 'USER_DEBOTS_LS_FIELD';
const USER_ENV_LS_FIELD = 'USER_ENV_LS_FIELD';
const TON_NETWORK_LS_FIELD = 'TON_NETWORK_LS_FIELD';
const WALLET_LS_FIELD = 'WALLET_LS_FIELD';

const MAIN_NETWORK = 'main.ton.dev';
const DEV_NETWORK = 'net.ton.dev';
const FLD_NETWORK = 'fld.ton.dev';

export {
	EXPLORER_BASE_URL,
	COMPONENTS_BINDINGS,
	MEDIA_STATUS,
	DEBOT_ADDRESS_SEARCH_PARAM,
	DEBOT_WC,
	MNEMONIC_WORD_COUNT,
	DERIVATION_PATH,
	USER_DEBOTS_LS_FIELD,
	USER_ENV_LS_FIELD,
	TON_NETWORK_LS_FIELD,
	WALLET_LS_FIELD,
	MAIN_NETWORK,
	DEV_NETWORK,
	FLD_NETWORK,
}
