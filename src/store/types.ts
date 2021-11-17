import { TWalletData } from '/src/WalletService';
import { TDebotsListItem, TDebotStageItem, TApproveWindow, TSigningBox, Dictionary } from '/src/types';

export type TReduxAction<PayloadType> = (payload: PayloadType) => ({
	type: string,
	payload: PayloadType,
})
export type TReduxEmptyAction = () => ({ type: string, payload?: undefined })

// account.ts
export type TSetConnectWalletModalPayload = {
	isError: boolean;
	message?: string;
}
export type TSetConnectWalletModalAction = TReduxAction<TSetConnectWalletModalPayload | null>;
export type TSetWalletAction = TReduxAction<TWalletData | null>;
export type TAccountState = {
	connectWalletModal: TSetConnectWalletModalPayload | null;
	wallet: TWalletData | null;
}
export type TAccountActions = TSetConnectWalletModalAction | TSetWalletAction

//debot.ts
export type TPushItemToStagePayload = TDebotStageItem
export type TPushItemToStageAction = TReduxAction<TPushItemToStagePayload>
export type TClearStageAction = TReduxEmptyAction
export type TSetSigningBoxPayload = TSigningBox | null
export type TSetSigningBoxAction = TReduxAction<TSetSigningBoxPayload>
export type TSetApproveWindowPayload = TApproveWindow | null
export type TSetApproveWindowAction = TReduxAction<TSetApproveWindowPayload>
export type TSetDebotsFilterKeyPayload = string
export type TSetDebotsFilterKeyAction = TReduxAction<TSetDebotsFilterKeyPayload>
export type TSetLocalDebotsListPayload = TDebotsListItem[]
export type TSetLocalDebotsListAction = TReduxAction<TSetLocalDebotsListPayload>
export type TSetIsDebotErrorPayload = boolean
export type TSetIsDebotErrorAction = TReduxAction<TSetIsDebotErrorPayload>
export type TDebotState = {
	stage: TDebotStageItem[],
	signingBox: TSetSigningBoxPayload | null,
	approveWindow: TSetApproveWindowPayload | null,
	filterKey: string,
	debotsList: TDebotsListItem[],
	localDebotsList: TDebotsListItem[],
	isDebotError: boolean,
}
export type TDebotActions = TPushItemToStageAction
	| TClearStageAction
	| TSetSigningBoxAction
	| TSetApproveWindowAction
	| TSetDebotsFilterKeyAction
	| TSetLocalDebotsListAction
	| TSetIsDebotErrorAction

//environment.ts
export type TSetEnvironmentVariablesPayload = Dictionary<string>;
export type TSetEnvironmentVariablesAction = TReduxAction<TSetEnvironmentVariablesPayload>;
export type TEnvironmentState = {
	variables: TSetEnvironmentVariablesPayload | {};
}
export type TEnvironmentActions = TSetEnvironmentVariablesAction

//store
export type TRootStoreState = {
	account: TAccountState;
	environment: TEnvironmentState;
	debot: TDebotState;
}
export type TPossibleStoreActions = ReturnType<TAccountActions | TEnvironmentActions | TDebotActions>;
