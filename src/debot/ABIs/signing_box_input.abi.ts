const SIGNING_BOX_INPUT_ABI = {
	"ABI version": 2,
	"header": ["time"],
	"functions": [
		{
			"name": "get",
			"inputs": [
				{"name":"answerId","type":"uint32"},
				{"name":"prompt","type":"bytes"},
				{"name":"possiblePublicKeys","type":"uint256[]"}
			],
			"outputs": [
				{"name":"handle","type":"uint32"}
			]
		}
	],
	"data": [
	],
	"events": [
	]
};

export default SIGNING_BOX_INPUT_ABI;
