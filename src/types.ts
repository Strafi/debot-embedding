import { DebotActivity } from '@tonclient/core';

export type TDebotsListItem = {
	title: string,
	address: string,
	network: string,
}

export type TDebotStageItem = {
	component: string,
	config?: {
		min?: string,
		max?: string,
		decimals?: string,
	}
	menuItems?: Array<{ title: string, description?: string, functionId: string }>
	text?: string,
	data?: string,
	isError?: boolean,
	functionId?: string,
	interfaceAddress?: string,
}

export type TApproveWindow = {
	submit: Function
	params: DebotActivity
}

export type TSigningBox = {
	submit: Function
}

export type Dictionary<T> = {
	[key: string]: T;
}
