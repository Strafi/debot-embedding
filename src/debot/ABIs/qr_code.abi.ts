const QR_CODE_ABI = {
	"ABI version": 2,
	"header": ["time"],
	"functions": [
		{
			"name": "scan",
			"inputs": [
				{"name":"answerId","type":"uint32"}
			],
			"outputs": [
				{"name":"value","type":"bytes"}
			]
		},
		{
			"name": "read",
			"inputs": [
				{"name":"answerId","type":"uint32"},
				{"name":"prompt","type":"bytes"}
			],
			"outputs": [
				{"name":"value","type":"bytes"},
				{"name":"result","type":"uint8"}
			]
		},
		{
			"name": "draw",
			"inputs": [
				{"name":"answerId","type":"uint32"},
				{"name":"prompt","type":"bytes"},
				{"name":"text","type":"bytes"}
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
	]
};

export default QR_CODE_ABI;
