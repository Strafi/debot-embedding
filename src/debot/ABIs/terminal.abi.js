const TERMINAL_ABI = {
	"ABI version": 2,
	"header": ["time"],
	"functions": [
        {
			"name": "input",
			"inputs": [
				{"name":"answerId","type":"uint32"},
				{"name":"prompt","type":"bytes"},
				{"name":"multiline","type":"bool"}
			],
			"outputs": [
				{"name":"value","type":"bytes"}
			]
		},
		{
			"name": "inputStr",
			"inputs": [
				{"name":"answerId","type":"uint32"},
                {"name":"prompt","type":"bytes"},
                {"name":"multiline","type":"bool"}
			],
			"outputs": [
				{"name":"value","type":"bytes"}
			]
		},
		{
			"name": "inputInt",
			"inputs": [
				{"name":"answerId","type":"uint32"},
				{"name":"prompt","type":"bytes"}
			],
			"outputs": [
				{"name":"value","type":"int256"}
			]
		},
		{
			"name": "inputUint",
			"inputs": [
				{"name":"answerId","type":"uint32"},
				{"name":"prompt","type":"bytes"}
			],
			"outputs": [
				{"name":"value","type":"uint256"}
			]
		},
		{
			"name": "inputTons",
			"inputs": [
				{"name":"answerId","type":"uint32"},
				{"name":"prompt","type":"bytes"}
			],
			"outputs": [
				{"name":"value","type":"uint128"}
			]
		},
		{
			"name": "inputBoolean",
			"inputs": [
				{"name":"answerId","type":"uint32"},
				{"name":"prompt","type":"bytes"}
			],
			"outputs": [
				{"name":"value","type":"bool"}
			]
		},
		{
			"name": "print",
			"inputs": [
				{"name":"answerId","type":"uint32"},
				{"name":"message","type":"bytes"}
			],
			"outputs": [
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

export default TERMINAL_ABI;
