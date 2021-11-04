const ADDRESS_INPUT_ABI = {
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
				{"name":"value","type":"address"}
			]
		},
        {
			"name": "select",
			"inputs": [
				{"name":"answerId","type":"uint32"}
			],
			"outputs": [
				{"name":"value","type":"address"}
			]
		}
	],
	"data": [
	],
	"events": [
	]
};

export default ADDRESS_INPUT_ABI;