const NETWORK_ABI = {
	"ABI version": 2,
	"header": ["time"],
	"functions": [
		{
			"name": "get",
			"inputs": [
				{"name":"answerId","type":"uint32"},
				{"name":"url","type":"bytes"},
				{"name":"headers","type":"bytes[]"}
			],
			"outputs": [
				{"name":"statusCode","type":"int32"},
				{"name":"retHeaders","type":"bytes[]"},
				{"name":"content","type":"bytes"}
			]
		},
		{
			"name": "post",
			"inputs": [
				{"name":"answerId","type":"uint32"},
				{"name":"url","type":"bytes"},
				{"name":"headers","type":"bytes[]"},
				{"name":"body","type":"bytes"}
			],
			"outputs": [
				{"name":"statusCode","type":"int32"},
				{"name":"retHeaders","type":"bytes[]"},
				{"name":"content","type":"bytes"}
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

export default NETWORK_ABI;
