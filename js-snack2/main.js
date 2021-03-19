// Creare un array di oggetti di squadre di calcio.
// Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti. Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti.
// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

let squadre = [{
	nome: "pippoli",
	puntiFatti: 0,
	falliSubiti: 0,
},
{
	nome: "naccata",
	puntiFatti: 0,
	falliSubiti: 0,
},
{
	nome: "spurtili",
	puntiFatti: 0,
	falliSubiti: 0,
},
{
	nome: "reccale",
	puntiFatti: 0,
	falliSubiti: 0,
},
]
let newArray = []
for (let i = 0; i < squadre.length; i++) {
	squadre[i].puntiFatti = random(1, 100)
	squadre[i].falliSubiti = random(1, 100)

	let {nome, falliSubiti} = squadre[i]
	newArray.push({nome, falliSubiti})
}

console.log(newArray);

function random(min, max) {
	return Math.floor(Math.random() * (max - min)) + min; //Il max è escluso e il min è incluso
  }
  