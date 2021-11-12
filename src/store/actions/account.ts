import { TSetConnectWalletModalAction, TSetWalletAction } from "../types";

export const SET_WALLET = 'account/SET_WALLET';
export const SET_CONNECT_WALLET_MODAL = 'account/SET_CONNECT_WALLET_MODAL';

export const setWallet: TSetWalletAction = payload => ({
	type: SET_WALLET,
	payload,
});

export const setConnectWalletModal: TSetConnectWalletModalAction = payload => ({
	type: SET_CONNECT_WALLET_MODAL,
	payload,
});
