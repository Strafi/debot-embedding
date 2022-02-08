const AMOUNT_INPUT_ABI = {
	"ABI version": 2,
	"header": ["time"],
	"functions": [
		{
			"name": "get",
			"inputs": [
				{"name":"answerId","type":"uint32"},
				{"name":"prompt","type":"bytes"},
				{"name":"decimals","type":"uint8"},
				{"name":"min","type":"uint128"},
				{"name":"max","type":"uint128"}
			],
			"outputs": [
				{"name":"value","type":"uint128"}
			]
		}
	],
	"data": [
	],
	"events": [
	]
};

export default AMOUNT_INPUT_ABI;
