import { DebotActivity } from '@tonclient/core';

export * from './EventBus'
export type { encodeString, decodeString } from './helpers'
export type { EVENTS, DEBOT_INTERFACE_ID } from './constants'

export type TDebotsListItem = {
	title: string,
	address: string,
	network: string,
}

export type TDebotStageItem = {
	component: string,
	interfaceAddress: string,
	functionId: string,
	config?: {
		min?: string,
		max?: string,
		decimals?: string,
	}
	menuItems?: Array<{ title: string, description?: string, functionId: string }>
	text?: string,
	title?: string,
	data?: string,
	isError?: boolean,
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
