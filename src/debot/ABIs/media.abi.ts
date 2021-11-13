const MEDIA_ABI = {
	"ABI version": 2,
	"header": ["time"],
	"functions": [
		{
			"name": "output",
			"inputs": [
				{"name":"answerId","type":"uint32"},
				{"name":"prompt","type":"bytes"},
				{"name":"data","type":"bytes"}
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
				{"name":"mediaTypes","type":"bytes"}
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

export default MEDIA_ABI;
