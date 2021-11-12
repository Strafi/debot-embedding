function createDebotUrl(debotAddress: string, debotUrl?: string): string {
	const baseUrl = debotUrl || '/debot';

	return `${baseUrl}?debotAddress=${debotAddress}`;
}

export default createDebotUrl;
