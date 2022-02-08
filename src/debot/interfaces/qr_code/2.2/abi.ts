const QR_CODE_ABI = {
	"ABI version": 2,
	"version": "2.2",
	"header": ["time"],
	"functions": [
		{
			"name": "scan",
			"inputs": [
				{"name":"answerId","type":"uint32"}
			],
			"outputs": [
				{"name":"value","type":"string"}
			]
		},
		{
			"name": "read",
			"inputs": [
				{"name":"answerId","type":"uint32"},
				{"name":"prompt","type":"string"}
			],
			"outputs": [
				{"name":"value","type":"string"},
				{"name":"result","type":"uint8"}
			]
		},
		{
			"name": "draw",
			"inputs": [
				{"name":"answerId","type":"uint32"},
				{"name":"prompt","type":"string"},
				{"name":"text","type":"string"}
			],
			"outputs": [
				{"name":"result","type":"uint8"}
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

export default QR_CODE_ABI;
