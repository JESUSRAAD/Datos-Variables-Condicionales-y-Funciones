console.log("EJERCICIO 0");
// Crea una función que salude al usuario por su nombre.
//  Puedes utilizar la consola o un cuadro de diálogo. Ej.: Hola Ángel!!!

let userName = prompt("Hola ¿como te llamas?");
function hello(userName) {
  if (
    userName === "Angel" ||
    userName === "angel" ||
    userName === "Angel segundo" ||
    userName === "angel Segundo" ||
    userName === "angel segundo"
  ) {
    alert("HOLA!!! Profe gracias por probar mi codigo");
  } else {
    alert(
      `Hola ${userName}, creo que no nos conocemos y de lo contrario, pues, no nos conocemos lo suficiente para estar definid@ en mi codigo`
    );
  }
}
hello(userName);

console.log("EJERCICIO 1");

// Crea una función que tenga dos argumentos: num1, num2, y que devuelva como resultado la suma de ambos números.
// Se supone que se usarán solo números válidos, no letras o símbolos, es decir, no hace falta comprobar el dato ingresado.
// Ej.: Llamo a la función como sumar(3,5) deberá devolver 8.

let amount1 = prompt("Ingrese el primer numero a sumar");
let amount2 = prompt("Ingrese el segundo numero a summar");
function suma(amount1, amount2) {
  console.log(parseInt(amount1) + parseInt(amount2));
}
suma(amount1, amount2);

console.log("EJERCICIO 2");
// .- Esta función se va a llamar  esPar(num)  y deberá devolver verdadero si el argumento es par y falso si es impar.
//  Se acepta que solo se usarán números válidos. Si quieres hacer la validación del dato, sería genial lograrlo.
//   Puedes hacerlo aplicando condicionales, sin embargo, tienes las herramientas para hacerlo sin usar las condicionales.
// Ej.: al llamarla como esPar(5) me dará false, mientras que con esPar(6) me dará true.

let digi = prompt("Ingrese el el dato a evaluar");
function isEqual(digi) {
  let caratersDigi = digi.length;
  parseInt(digi) % 2 == 0 || caratersDigi % 2 == 0;
  console.log(digi % 2 == 0);
}
isEqual(digi);

console.log("EJERCICIO 3");
// - Crea tres variables: lado1, lado2, lado3. Dale 3 valores numéricos. A continuación,
//  crea una función y sus condicionales para que se muestreen por consola si el triángulo es equilátero, isósceles o escaleno.

let side1 = prompt("Primer lado del triangulo");
let side2 = prompt("Segundo lado del triangulo");
let side3 = prompt("Tercero lado del triangulo");

function triangle(type) {
  switch (type) {
    case (parseInt(side1) == parseInt(side2)) == parseInt(side3):
      console.log("Triangulo equilatero");
      break;
    case parseInt(side1) == parseInt(side2) ||
      parseInt(side1) == parseInt(side3) ||
      parseInt(side2) == parseInt(side3):
      console.log("Triangulo isósceles");
      break;
    case (parseInt(side1) != parseInt(side2)) != parseInt(side3):
      console.log("Triangulo escaleno");
  }
}
triangle(type);

console.log("EJERCICIO 4");
// .- Subimos el nivel?... crea un programa que simule una calculadora con funciones para realizar operaciones matemáticas básicas.
//  Pide al usuario dos números y el operador que utilizarás( "+" , "-" , "*" , "/" ).

let b = prompt(
  "BIENVENIDO A MI CALCULADORA. Ingrese el primer numero con el que quiere trabajar "
);
let operator = prompt("seleccione tipo de operacion: + , - , * , / ");
let c = prompt("Ingrese el segundo numero con el que quiere trabajar ");

function calculator(operator, b, c) {
  switch (operator) {
    case "+":
      console.log(parseInt(b) + parseInt(c));
      break;
    case "-":
      console.log(parseInt(b) - parseInt(c));
      break;
    case "*":
      console.log(parseInt(b) * parseInt(c));
      break;
    case "/":
      console.log(parseInt(b) / parseInt(c));

    default:
      console.log(undefined);
  }
}
calculator(operator, b, c);

console.log("EJERCICIO 5");
// Y por si fuera poco:
// El Índice de Masa Corporal (IMC) es una forma de estimar si una persona tiene un peso saludable para su altura.
// Se calcula dividiendo el peso de una persona (en kilogramos) por el cuadrado de su altura (en metros).

// Su tarea es escribir una función calcular IMC (peso, altura) que tome dos argumentos:
// peso (en kilogramos) y altura (en metros) y devuelva el IMC calculado.

// Además, la función debería devolver una cadena que interprete el IMC según la siguiente tabla:

// Menos de 18,5: 'Bajo peso'
// 18,5 - 24,9: 'Normal'
// 25 - 29,9: 'Sobrepeso'
// 30 o más: 'Obesidad'

// Por ejemplo, calcular IMC(70, 1,75) debería devolver "Normal".
// Recuerde redondear el IMC a dos decimales.
