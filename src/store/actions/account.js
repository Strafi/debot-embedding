export const SET_WALLET = 'account/SET_WALLET';
export const SET_CONNECT_WALLET_MODAL = 'account/SET_CONNECT_WALLET_MODAL';

export const setWallet = payload => ({
	type: SET_WALLET,
	payload,
})

export const setConnectWalletModal = payload => ({
	type: SET_CONNECT_WALLET_MODAL,
	payload,
})
