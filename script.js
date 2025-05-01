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
