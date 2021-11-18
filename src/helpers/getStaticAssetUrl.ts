function getStaticAssetUrl(assetName: string): string {
	return import.meta.env.PROD
		? `https://unpkg.com/debot-web-embedding@${__LIB_VERSION__}/lib/${assetName}`
		: `/${assetName}`;
}

export default getStaticAssetUrl;
