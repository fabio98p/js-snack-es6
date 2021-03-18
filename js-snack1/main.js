$(document).ready(function () {
	console.log("ciao ale");
	
	const bikes = [{
			bike: "mtb",
			peso: 50,
		},
		{
			bike: "bici",
			peso: 20,
		},
		{
			bike: "cletta",
			peso: 30,
		},
		{
			bike: "bicicletta",
			peso: 10,
		},
	]
	
	var bicileggera = bikes[0].peso
	var indexBici = 0
	
	for (let i = 1; i < bikes.length; i++) {
		
		console.log(bikes[i].peso, bicileggera);
		if (bikes[i].peso < bicileggera) {
			bicileggera = bikes[i].peso;
			indexBici = i
		}
	}
	let {bike, peso} = bikes[indexBici]
	console.log(`la bici piu leggera è la ${bike} con la bellezza di ${peso}kg`);
})

