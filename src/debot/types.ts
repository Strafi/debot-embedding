import { RegisteredSigningBox, DebotAction, SigningBoxHandle, DebotActivity, RegisteredDebot, AppDebotBrowser, DecodedMessageBody } from '@tonclient/core';

export interface IDebotBrowser extends AppDebotBrowser {
	debot_handle: RegisteredDebot['debot_handle'] | undefined;
	debot_abi: RegisteredDebot['debot_abi'] | undefined;
	info: RegisteredDebot['info'] | undefined;
	signingBoxHandle: RegisteredSigningBox['handle'] | undefined;
	init: () => Promise<void>;
	setDebotParams: (params: RegisteredDebot) => void;
	releaseInterfacesQueue: () => void;
	clearInterfacesQueue: () => void;
	send: (params: ParamsOfAppDebotBrowserSend) => Promise<void>;
}

export interface IDEngineStorageItem extends RegisteredDebot {
	browser: IDebotBrowser;
}

export type ParamsOfAppDebotBrowserLog = {
    msg: string;
}

export type ResultOfAppDebotBrowserInput = {
    value: string;
}

export type ResultOfAppDebotBrowserGetSigningBox = {
    signing_box: SigningBoxHandle;
}

export type ParamsOfAppDebotBrowserSend = {
    message: string;
}

export type ParamsOfAppDebotBrowserApprove = {
    activity: DebotActivity;
}

export type ResultOfAppDebotBrowserApprove = {
    approved: boolean;
}

export type TInterfacesQueueItem = {
	interfaceId: string,
	debotAddress: string,
	signingBoxHandle: RegisteredSigningBox['handle'],
	params: ParamsOfAppDebotBrowserSend,
}

export interface IDebotInterfaceParams extends ParamsOfAppDebotBrowserSend {
	debotAddress: string,
	signingBoxHandle: RegisteredSigningBox['handle'],
}

export type TExtendedDebotInterfaceParams = IDebotInterfaceParams & DecodedMessageBody
