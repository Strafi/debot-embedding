const CONFIRM_INPUT_ABI = {
	"ABI version": 2,
	"header": ["time"],
	"functions": [
		{
			"name": "get",
			"inputs": [
				{"name":"answerId","type":"uint32"},
				{"name":"prompt","type":"bytes"}
			],
			"outputs": [
				{"name":"value","type":"bool"}
			]
		}
	],
	"data": [
	],
	"events": [
	]
};

export default CONFIRM_INPUT_ABI;
