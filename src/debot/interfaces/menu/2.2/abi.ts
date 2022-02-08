const MENU_ABI = {
	"ABI version": 2,
	"version": "2.2",
	"header": ["time"],
	"functions": [
		{
			"name": "select",
			"inputs": [
				{"name":"title","type":"string"},
				{"name":"description","type":"string"},
				{"components":[{"name":"title","type":"string"},{"name":"description","type":"string"},{"name":"handlerId","type":"uint32"}],"name":"items","type":"tuple[]"}
			],
			"outputs": [
				{"name":"index","type":"uint32"}
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
}

export default MENU_ABI;
