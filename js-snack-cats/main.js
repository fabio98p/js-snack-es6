console.log("ciao ale");
$(document).ready(() => {
	// Milestone 1
	// Definire un array di oggetti; ogni oggetto rappresenta un gatto,
	//che è caratterizzato da: nome, età, colore e sesso.
	const cats = [{
		nome: "zeus",
		eta: 2,
		colore: "azzurro",
		sesso: "femmina",
	},
	{
		nome: "era",
		eta: 3,
		colore: "nero",
		sesso: "maschio",
	},
	{
		nome: "ebe",
		eta: 1,
		colore: "arancione",
		sesso: "maschio",
	},
	{
		nome: "doraimon",
		eta: 30,
		colore: "blu",
		sesso: "maschio",
	},
	{
		nome: "uranietta",
		eta: 45,
		colore: "marrone",
		sesso: "femmina",
	},
	{
		nome: "beby",
		eta: 25,
		colore: "giallo",
		sesso: "femmina",
	},
	]
	//Tramite la funzione .forEach(), stampare in pagina tutti i gattini,
	//ciascuno con il proprio colore e il proprio nome.

	cats.forEach(items => {
		$(".colorName").append(`<li>il gattino ${items.nome} è di colore ${items.colore}</li>`)
	});







	// Milestone 2
	// Dividere i gatti in due contenitori distinti in base al sesso e aggiungere
	//a fianco di ogni gattino un fiocco colorato di rosa, se femmina, o di blu,
	//se maschio. Il colore del fiocco deve essere più tenue se il gatto è più
	//giovane, più scuro se il gatto è più vecchio.
	// Milestone 3


	// Creare un nuovo array con prima tutti i gattini femmina e poi tutti i
	//gattini maschio, inserendo solamente nome e colore e colore e opacità del
	//fiocco per ogni gatto.


})
