function formDebotFunctionFromId(id: string): string {
	return `0x${parseInt(id, 10).toString(16)}`
}

export default formDebotFunctionFromId;
