console.log("EJERCICIO 1");
// - En un tramo de un rally los conductores no deben ir ni demasiado rápido ni demasiado lentos.
// Este ejercicio debe tomar la longitud del tramo en kilómetros y el tiempo empleado en horas enteras,
// si la velocidad está entre 40 y 60 km/h el conductor pasa la prueba y en caso contrario es descalificado.
// Ej. 75 km en 2 horas ó 120 km en 3 horas. (siempre, números enteros). Si recorre 100 km en 4 horas,
//  ha ido a una velocidad de 100/4 que son 25 km/h. Estaría descalificada.

let distance = prompt("Ingrese longitud del tramo de la via ");
let time = prompt("Ingrese el tiempo empleado en horas enteras");
let speed = distance / time;
console.log(speed + "km/h");
if (speed >= 40 && speed < 60) {
  console.log("El conductor aprueba");
} else {
  console.log("Conductor descalificado");
}

console.log("EJERCICIO 2");
// - Crea un programa que pide la nota de un estudiante en los tres trimestres del curso y calcula la nota promedio
// (Solicita tres números en tres entradas distintas). El resultado que dará será "SUSPENDIDO" si la media es menor de 5,
//  "APROBADO" si está entre 5 y 7 y "NOTABLE" por encima de 7.

let qualification1 = prompt("ingrese calificacion del primer trimestre");
let qualification2 = prompt("ingrese calificacion del segundo trimestre");
let qualification3 = prompt("ingrese calificacion del tercer trimestre");
let avarage = (qualification1*1)/3 + (qualification2*1)/3 + (qualification3*1) / 3;
console.log(avarage);
if (avarage <= 5) {
  console.log("SUSPENDIDO");
} else if (avarage > 5 && avarage <= 7) {
  console.log("APROBADO");
} else {
  console.log("NOTABLE");
}

console.log("EJERCICIO 3");
// - Este ejercicio le indicará a los clientes que se dirijan a la barra de bebidas oa la de comidas,
// para ello el cliente puede pedir vino, cerveza, refresco, agua. Si pide una cerveza o vino se le dirige a la barra y si no,
//  pues, se le dirige a la barra de comida

console.log("EJERCICIO 4");
// - El usuario tecleará dos números. Debes devolver por consolación, la diferencia entre el mayor y el menor.
// Ej.: Si el usuario ingresa 5 y 8, el programa devolverá 3.... (8-5=3). Utiliza TERNARIO, es decir, la forma  cond ? verdadero : falso

console.log("EJERCICIO 5");
// El usuario debe ingresar dos datos: un número y su cuadrado. Si es correcto el programa enviará un mensaje de acierto en caso contrario
//  dirá que se produjo un error. Utiliza TERNARIO, es decir, la forma  cond ? verdadero Falso
// Ej.: Si teclea 3 y 9 el resultado es Correcto. Si teclea 3 y 8, el resultado será Error. Se creativo con los mensajes ; )
