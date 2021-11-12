export type TDebotsListItem = {
	title: string,
	address: string,
	network: string,
}

export type TDebotStageItem = {
	component: string,
	config?: {
		min: number,
		max: number,
		decimals: number,
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
	params: {
		dst: string,
		fee: number,
		out: Array<{ recipient: string, dst: string, amount: number }>,
		setcode: boolean,
		signkey: string,
	}
}

export type TSigningBox = {
	submit: Function
}

export type Dictionary<T> = {
	[key: string]: T;
}
