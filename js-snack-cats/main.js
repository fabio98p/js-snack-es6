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
		eta: 6,
		colore: "nero",
		sesso: "maschio",
	},
	{
		nome: "ebe",
		eta: 4,
		colore: "arancione",
		sesso: "maschio",
	},
	{
		nome: "doraimon",
		eta: 7,
		colore: "blu",
		sesso: "maschio",
	},
	{
		nome: "uranietta",
		eta: 11,
		colore: "marrone",
		sesso: "femmina",
	},
	{
		nome: "beby",
		eta: 5,
		colore: "giallo",
		sesso: "femmina",
	},
	]
	//Tramite la funzione .forEach(), stampare in pagina tutti i gattini,
	//ciascuno con il proprio colore e il proprio nome.

	cats.forEach(element => {
		$(".Milestone-1 .colorName").append(`<li>il gattino ${element.nome} è di colore ${element.colore}</li>`)
	});
	// Milestone 2
	// Dividere i gatti in due contenitori distinti in base al sesso e aggiungere
	//a fianco di ogni gattino un fiocco colorato di rosa, se femmina, o di blu, se maschio.
	//Il colore del fiocco deve essere più tenue se il gatto è più
	//giovane, più scuro se il gatto è più vecchio.
	
	
	
	cats.forEach(function (e, i) {
		$(".Milestone-2 .fiocchetto").append(`<li>il gattino ${e.nome} è di colore ${e.colore}</li>`)
		let selezione = $(".Milestone-2 .fiocchetto li")[i]
		opacity(e.eta, e.sesso, selezione)
	});
	
	
	const femmine = cats.filter(element => element.sesso == "femmina");
	const maschi = cats.filter(element => element.sesso == "maschio");
	console.log(femmine, maschi);
	
	
	cats.filter((element, index, array) => {
		if (element.sesso == "femmina") {
			femmine.push(element)			
		}else{
			maschi.push(element)
		}
	})



	// Milestone 3
	// Creare un nuovo array con prima tutti i gattini femmina e poi tutti i
	//gattini maschio, inserendo solamente nome e colore e colore e opacità del
	//fiocco per ogni gatto.


	
	function opacity(eta, sesso, e) {
		console.log(eta, sesso, e);
		$(e).append(`<i class="fas fa-gift"></i>`)
		$(e).children("i").css({"opacity": ()=> {
			if (eta < 3) {
				console.log(eta);
				return 0.2
			}else if (eta > 3 && eta < 6) {
				console.log(eta);
				return 0.5
			}else if (eta >= 6 && eta < 10) {
				console.log(eta);
				return 0.8
			}else if (eta >= 10) {
				console.log(eta);
				return 1
			}
		}}).css({"color": () => {
			if (sesso == "maschio") {
				return "blue"
			} else if (sesso == "femmina") {
				return "pink"
			}
		}})
	}
})
