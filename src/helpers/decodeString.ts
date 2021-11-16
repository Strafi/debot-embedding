export type TDecodeString = (encodedString?: string) => string | undefined

export const decodeString: TDecodeString = function (encodedString) {
	if (typeof encodedString !== 'string')
		return;

	const decodedString = Buffer.from(encodedString, 'hex').toString();

	return decodedString;
}

const decodeStringWithLogger: TDecodeString = function (encodedString) {
	const decodedString = decodeString(encodedString);

	console.log(decodedString);

	return decodedString;
}

export default decodeString;
