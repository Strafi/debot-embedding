const AMOUNT_INPUT_ABI = {
	"ABI version": 2,
	"version": "2.2",
	"header": ["time"],
	"functions": [
		{
			"name": "get",
			"inputs": [
				{"name":"answerId","type":"uint32"},
				{"name":"prompt","type":"string"},
				{"name":"decimals","type":"uint8"},
				{"name":"min","type":"uint128"},
				{"name":"max","type":"uint128"}
			],
			"outputs": [
				{"name":"value","type":"uint128"}
			]
		},
		{
			"name": "constructor",
			"inputs": [
			],
			"outputs": [
			]
		}
	],
	"data": [
	],
	"events": [
	],
	"fields": [
		{"name":"_pubkey","type":"uint256"},
		{"name":"_timestamp","type":"uint64"},
		{"name":"_constructorFlag","type":"bool"}
	]
};

export default AMOUNT_INPUT_ABI;
