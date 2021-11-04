function encodeString(decodedString){
	if (typeof decodedString !== 'string')
		return;

	const hex = unescape(encodeURIComponent(decodedString))
		.split('')
		.map(char => char.charCodeAt(0).toString(16))
		.join('');

	return hex;
}

export default encodeString;
