function decodeString(encodedString) {
	if (typeof encodedString !== 'string')
		return;

	const decodedString = Buffer.from(encodedString, 'hex').toString();

	console.log(decodedString);

	return decodedString;
}

export default decodeString;
