const MENU_ABI = {
	"ABI version": 2,
	"header": ["time"],
	"functions": [
		{
			"name": "select",
			"inputs": [
				{"name":"title","type":"bytes"},
				{"name":"description","type":"bytes"},
				{"components":[{"name":"title","type":"bytes"},{"name":"description","type":"bytes"},{"name":"handlerId","type":"uint32"}],"name":"items","type":"tuple[]"}
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
	]
}

export default MENU_ABI;
