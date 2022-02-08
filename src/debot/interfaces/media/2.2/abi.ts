const MEDIA_ABI = {
	"ABI version": 2,
	"version": "2.2",
	"header": ["time"],
	"functions": [
		{
			"name": "output",
			"inputs": [
				{"name":"answerId","type":"uint32"},
				{"name":"prompt","type":"string"},
				{"name":"data","type":"string"}
			],
			"outputs": [
				{"name":"result","type":"uint8"}
			]
		},
		{
			"name": "getSupportedMediaTypes",
			"inputs": [
				{"name":"answerId","type":"uint32"}
			],
			"outputs": [
				{"name":"mediaTypes","type":"string"}
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

export default MEDIA_ABI;
