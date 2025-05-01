// start code

// QUESTION 1 -----------------------------

// const hamburger = { name: "Cheese Burger", weight: 250 };
// const secondBurger = hamburger;
// secondBurger.name = 'Double Cheese Burger';
// secondBurger.weight = 500;

// console.log(hamburger.name); // ?
// console.log(secondBurger.name ); // ?

// RISPOSTE -----------

// Senza lanciare il codice, riesci a prevedere cosa viene stampato in console?
// console.log(hamburger.name); -> Double Cheese Burger
// console.log(secondBurger.name); -> Double Cheese Burger

// Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice?
// solo un oggetto

// QUESTION 2 -----------------------------

// const hamburger = {
// 	name: "Cheese Burger",
// 	weight: 250,
// 	ingredients: ["Cheese", "Meat", "Bread", "Tomato"]
// };

// const secondBurger = {...hamburger};
// secondBurger.ingredients[0] = "Salad";

// console.log(hamburger.ingredients[0]); // ?
// console.log(secondBurger.ingredients[0]); // ?

// RISPOSTE -----------

// Senza lanciare il codice, riesci a prevedere cosa viene stampato in console?
// console.log(hamburger.ingredients[0]); -> Salad
// console.log(secondBurger.ingredients[0]); -> Salad

// Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice?
// due oggetti, ma l'array di riferimento "ingredients" è uno

// QUESTION 3 -----------------------------

// const hamburger = {
// 	name: "Cheese Burger",
// 	weight: 250,
// 	maker: {
// 		name: "Anonymous Chef",
// 		restaurant: {
// 			name: "Hyur's Burgers",
// 			address: "Main Street, 123",
// 			isOpen: true,
// 		},
// 		age: 29
// 	}
// };

// const secondBurger = structuredClone(hamburger);
// const thirdBurger = structuredClone(hamburger);

// RISPOSTE -----------

// Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice?
// in totale sono 9 oggetti

// QUESTION 4 -----------------------------

// const chef = {
// 	name: "Chef Hyur",
// 	age: 29,
// 	makeBurger: (num = 1) => {
// 		console.log(`Ecco ${num} hamburger per te!`);
// 	},
// }

// const restaurant = {
// 	name: "Hyur's Burgers",
// 	address: {
// 		street: 'Main Street',
// 		number: 123,
// 	},
// 	openingDate: new Date(2025, 3, 11),
// 	isOpen: false,
// };

// RISPOSTE -----------

// Qual è il metodo migliore per clonare l’oggetto chef, e perché?
// lo spread, in quanto permette di copiare i metodi, e non ci sono dati complessi in "chef"

// Qual è il metodo migliore per clonare l’oggetto restaurant, e perché?
// lo structuredClone, in quanto in "restaurant" c'è un Date(), quindi permette di mantenerlo come tale, e non ci sono metodi

// BONUS ------------------------------------------------

// QUESTION 5 -----------------------------

// const hamburger = {
// 	name: "Cheese Burger",
// 	weight: 250,
// 	maker: {
// 		name: "Anonymous Chef",
// 		restaurant: {
// 			name: "Hyur's Burgers",
// 			address: "Main Street, 123",
// 			isOpen: true,
// 		},
// 		age: 29
// 	}
// };

// const newRestaurant = {...hamburger.maker.restaurant};
// newRestaurant.name = "Hyur's II";
// newRestaurant.address = "Second Street, 12";
// const secondBurger = {...hamburger};
// secondBurger.maker.restaurant = newRestaurant;
// secondBurger.maker.name = "Chef Hyur";

// console.log(hamburger.maker.name); // ?
// console.log(secondBurger.maker.name); // ?
// console.log(hamburger.maker.restaurant.name); // ?
// console.log(secondBurger.maker.restaurant.name); // ?

// RISPOSTE -----------

// Senza lanciare il codice, riesci a prevedere cosa viene stampato in console?
// console.log(hamburger.maker.name); // Chef Hyur
// console.log(secondBurger.maker.name); // Chef Hyur
// console.log(hamburger.maker.restaurant.name); // Hyur's II
// console.log(secondBurger.maker.restaurant.name); // Hyur's II

// Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice?
// 7 oggetti

// correzione al console.log 3, perché "secondBurger.maker.restaurant = newRestaurant;" cambia l'originale restaurant in "hamburger"
