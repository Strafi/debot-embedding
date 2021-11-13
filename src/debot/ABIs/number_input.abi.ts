const NUMBER_INPUT_ABI = {
	"ABI version": 2,
	"header": ["time"],
	"functions": [
		{
			"name": "get",
			"inputs": [
				{"name":"answerId","type":"uint32"},
				{"name":"prompt","type":"bytes"},
				{"name":"min","type":"int256"},
				{"name":"max","type":"int256"}
			],
			"outputs": [
				{"name":"value","type":"int256"}
			]
		}
	],
	"data": [
	],
	"events": [
	]
};

export default NUMBER_INPUT_ABI;
