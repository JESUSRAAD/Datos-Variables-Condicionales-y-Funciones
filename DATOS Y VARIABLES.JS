console.log("EJERCICIO 1");

// - Una tortilla de patatas lleva 200 gramos de patatas por persona.
// Por cada kilo de patatas se necesitan 5 huevos y 300 gramos de cebolla.
//  Escribe un código que, da el número de comensales, calcula las
//  cantidades de ingredientes necesarios y muestra por consola, un mensaje
//   que indica el número de comensales, y la cantidad de cada uno de
//   los ingredientes

//   Ej: 5 comensales,
// Se necesitará:
// 1 kg de papas
// 5 huevos
// 300 gr de cebolla

let clients = prompt("ingrese el numero de comensales");
let potato = clients * 0.2;
let eggs = clients * 1;
let onion = clients * 60;

console.log("el numero de clientes son:" + clients);
console.log("se necesitan:");
console.log(" Papa:" + potato + "kg");
console.log(" Huevos:" + eggs);
console.log(" Cebolla:" + onion + "gr");

console.log("EJERCICIO 2");

// Dado un número por el usuario, devuelve por consola "true" si es un número par y "false" si es un número impar.
//  No usar condicionales!!! aunque, puedes usar operadores de comparación.
// Ej.: numero: 50
// ¿Es par? : verdadero

let number = prompt("Ingrese el numero al que quiera saber si es par o impar");

let parNumber = number % 2 == 0;

console.log("Numero:" + number);
console.log("¿Es par?:" + parNumber);

console.log("EJERCICIO 3");

// - En este ejercicio debes convertir a segundos una medida de tiempo dada en horas y minutos.
// ¿Crees que es necesario recordar que una hora son 60 minutos y cada minuto son 60 segundos?
//  ¿Por dónde mostraras el resultado?
// Ej.: horas : 2
// minutos 30
// Resultado 2*60*60 + 30*60 = 9000 segundos

let hour = prompt("Ingrese la hora ");
let minutes = prompt("Ingrese los minutos");
let seconds = hour * 60 * 60 + minutes * 60;

console.log("horas :" + hour + "h");
console.log("minutos :" + minutes + "min");

console.log("Resultado:" + seconds + "seg");

console.log("EJERCICIO 4");

// Muestra en un aviso (alert), cuánto debe pagar un usuario por un producto con IVA (21%).
//  ¿Tienes alguna manera de preguntarle el precio del producto al usuario?

let price = prompt(
  "Ingrese el monto del producto o servicio al cual se le va a sumar el IVA "
);
let Iva = (21 * price) / 100;
let priceIva = (price*1) + Iva;

console.log("precio Introducido:" + price);
console.log("El IVA del producto es:" + Iva);

alert(`El total a pagar es de:${priceIva}`);
