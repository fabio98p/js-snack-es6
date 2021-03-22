console.log("ciao ale");
console.log("questo 'bonus' non lo ho fatto per aggiungerci roba ma semplicemente per tentare di rifare tutto da capo (escludendo l'array iniziale) per provare a vedere se trovavo metodi migliori per farlo, percio ho tentato di usare cose diverse, nonostante lo avessi gia fatto ci ho comunque messo 1 ora e 20 min");
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

	cats.forEach(e => {
		$(".Milestone-1 ul.list").append(`<li>il gattino ${e.nome} è di colore ${e.colore}</li>`)
	});

	// Milestone 2
	//Dividere i gatti in due contenitori distinti in base al sesso,
	const femmine = cats.filter((e) => e.sesso == "femmina")
	const maschi = cats.filter((e) => e.sesso == "maschio")
	 
	//e aggiungere a fianco di ogni gattino un fiocco colorato di rosa, se femmina, o di blu, se maschio.
	//Il colore del fiocco deve essere più tenue se il gatto è più
	//giovane, più scuro se il gatto è più vecchio.
	var milestone2 = $(".Milestone-2 ul.list")
	cats.forEach((e, i) => {

		milestone2.append(`<li><i class="fas fa-gift"></i></li>`)
		var milestone2I = $(".Milestone-2 ul.list li i")[i]

		$(milestone2I).css({"color": () => {
			if (e.sesso == "femmina") {
				return "pink"
			} else if (e.sesso == "maschio") {
				return "blue"
			}
		}, "opacity": () => {
			if (e.eta < 10) {
				return e.eta/10
			} else if (e.eta >= 10) {
				return 1
			}
		}})
	});

	// Milestone 3
	//Creare un nuovo array con prima tutti i gattini femmina e poi tutti i
	//gattini maschio, inserendo solamente nome e colore e colore e opacità del
	//fiocco per ogni gatto.

	const femmineMaschi = [...femmine, ...maschi]
	var milestone3 = $(".Milestone-3 ul.list")
	femmineMaschi.forEach((e, i) => {

		milestone3.append(`<li>${e.nome} ${e.colore}<i class="fas fa-gift"></i></li>`)
		var milestone3I = $(".Milestone-3 ul.list li i")[i]

		$(milestone3I).css({"color": () => {
			if (e.sesso == "femmina") {
				return "pink"
			} else if (e.sesso == "maschio") {
				return "blue"
			}
		}, "opacity": () => {
			if (e.eta < 10) {
				return e.eta/10
			} else if (e.eta >= 10) {
				return 1
			}
		}})
	});


	
	
	
	
	
	
	
	
	
	
	
	//FUNZIONI
	function fiocco(eta, sesso, e) {
		console.log(eta, sesso, e);
		$(e).append(`<i class="fas fa-gift"></i>`)
		$(e).children("i").css({
			"opacity": () => {
				if (eta < 3) {
					console.log(eta);
					return 0.2
				} else if (eta > 3 && eta < 6) {
					console.log(eta);
					return 0.5
				} else if (eta >= 6 && eta < 10) {
					console.log(eta);
					return 0.8
				} else if (eta >= 10) {
					console.log(eta);
					return 1
				}
			}
		}).css({
			"color": () => {
				if (sesso == "maschio") {
					return "blue"
				} else if (sesso == "femmina") {
					return "pink"
				}
			}
		})
	}
})
