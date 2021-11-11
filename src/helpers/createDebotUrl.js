function createDebotUrl(debotAddress, debotUrl) {
	const baseUrl = debotUrl || '/debot';

	return `${baseUrl}?debotAddress=${debotAddress}`;
}

export default createDebotUrl;
