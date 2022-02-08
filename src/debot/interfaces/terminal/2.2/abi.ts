const TERMINAL_ABI = {
	"ABI version": 2,
	"version": "2.2",
	"header": ["time"],
	"functions": [
		{
			"name": "input",
			"inputs": [
				{"name":"answerId","type":"uint32"},
				{"name":"prompt","type":"string"},
				{"name":"multiline","type":"bool"}
			],
			"outputs": [
				{"name":"value","type":"string"}
			]
		},
		{
			"name": "print",
			"inputs": [
				{"name":"answerId","type":"uint32"},
				{"name":"message","type":"string"}
			],
			"outputs": [
			]
		},
		{
			"name": "printf",
			"inputs": [
				{"name":"answerId","type":"uint32"},
				{"name":"fmt","type":"string"},
				{"name":"fargs","type":"cell"}
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
	],
	"fields": [
		{"name":"_pubkey","type":"uint256"},
		{"name":"_timestamp","type":"uint64"},
		{"name":"_constructorFlag","type":"bool"}
	]
};

export default TERMINAL_ABI;
