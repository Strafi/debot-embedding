const NETWORK_ABI = {
	"ABI version": 2,
	"version": "2.2",
	"header": ["time"],
	"functions": [
		{
			"name": "get",
			"inputs": [
				{"name":"answerId","type":"uint32"},
				{"name":"url","type":"string"},
				{"name":"headers","type":"string[]"}
			],
			"outputs": [
				{"name":"statusCode","type":"int32"},
				{"name":"retHeaders","type":"string[]"},
				{"name":"content","type":"string"}
			]
		},
		{
			"name": "post",
			"inputs": [
				{"name":"answerId","type":"uint32"},
				{"name":"url","type":"string"},
				{"name":"headers","type":"string[]"},
				{"name":"body","type":"string"}
			],
			"outputs": [
				{"name":"statusCode","type":"int32"},
				{"name":"retHeaders","type":"string[]"},
				{"name":"content","type":"string"}
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

export default NETWORK_ABI;
