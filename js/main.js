/* Cadena de texto se llama String */
/* Cadena de numeros se llaman Number */
/* Para declarar variable se usar Var o let const */
/* Prompt("Ingrese su nombre" Sirve para interactuar con el cliente) */
/* alert("Hola! " + nombreUsuario + ".") Sirve para interactuar luego de una informacion también se puede usar sumas restas div etc */

/* let nombre = "Cristian";
let apellido ="Walz";
let nombreApellido = nombre + " " + apellido;

nombre = "matias";

let anioActual = 2023;
let anioNacimiento = 1995;
let edad = anioActual - anioNacimiento;


const IVA = 21;

console.log(edad);

let nombreUsuario = prompt("Ingrese su nombre");
console.log(nombreUsuario);

alert("Hola! " + nombreUsuario + ".") */

/* 1 // ==             Es igual
2 // ===            Es estrictamente igual
3 // !=             Es distinto
4 // !==            Es estrictamente distinto
5 // < < = > >=     Menor / mayor / Menor o Igual / Mayor o igual

7 //&&              Operador ANID (y)
8 // !!             Operador OR (o)
9 // !              Operador NOT (no)

let edad = prompt("Ingrese su edad")

if (edad >= 18) {
    alert ("Sos mayor de edad. Podés ingresar.");
} else {
    alert ("Sos menor de edad. No podés ingresar.");
} */

/* let hora = prompt("Ingrese la hora");

if (hora >=6 && hora <12) {
    alert("Buenos días");
} else if (hora >=!2 && hora < 20) {
    alert("Buenas tardes");
}else {
    alert("Buenas noches");
} */

/* let usuario1 = "Cristian";
let usuario2 = "Walz";

let nombreUsuario = prompt("Ingrese su nombre de usuario")

if (nombreUsuario == "Cristian"){
    alert("Bienvenido " + nombreUsuario);
} else if (nombreUsuario == "Walz") {
    alert("Bienvenido " + nombreUsuario);
} else {
    alert("Nombre de usuario incorrecto")
}

if (nombreUsuario == "Cristian" || nombreUsuario == "Walz") {
    alert("Bienvenido " + nombreUsuario)
}else {
    alert ("Nombre de usuario incorrecto.")
}
 */


/* Funciones declaradas */

/* function saludar(nombre, apellido) {
    console.log("Hola" + nombre + " " + apellido);
}
saludar("Cristian");
saludar("Gustavo"); */

// Funciones anonimas
/* const saludar = function(nombre) {
    console.log("Hola " + nombre);
}
saludar("Cristian"); */
// Funciones flecha
/* const saludar = (nombre) => {
console.log("Hola " + nombre);
}

saludar("Cristian"); */

//Funciones declaradas con retorno
/* function suma(a , b) {
    return a + b;
}
//Funciones flecha con retorno implicito 
const resta = (a, b) => a - b;

console.log(suma(2, 3));
console.log(resta(10-3)); */

/* var unNumero = 30;
var otroNumero =  "20";
var resultado = unNumero + otroNumero;
console.log(resultado); */


 /* let edad = prompt("Ingrese su edad");

if (edad >= 18) {
    alert("Sos mayor de edad. Podés ingresar");
}else {
    alert("Sos menor de edad no podes ingresar");
} 
 */

/* let edad = 20;

if (edad >= 18) {
  console.log("Eres mayor de edad");
} else {
  console.log("Eres menor de edad");
}
 */
/* let hora = prompt("Ingrese la hora")

if (hora >= 6 && hora < 12) {
    alert("Buenos dias");
} else if (hora >= 12 && hora < 20) {
    alert("Buenas tardes");
} else {
    alert("Buenas noches");
} */

/* let usuarioUno = "Cristian";
let usuarioDos = "Walz";
let nombreDeUsuario = prompt("Ingrese su nombre de usuario")

if (nombreDeUsuario === usuarioUno || nombreDeUsuario === usuarioDos) {
    alert("Bienvenido " + nombreDeUsuario);
}else {
    alert("Nombre de usuario incorrecto")
} */

// Utilizando un bucle for, imprime los números del 1 al 10 en la consola.

/* for (let i = 0; i <= 10; i = i + 1) {
    console.log(i)
} */
//Utilizando un bucle while, imprime los números pares del 2 al 20 en la consola.

//for
//for (let x = 0; x < 10; x++) {
//  console.log("Ciclo número " + x);
//}


// for anidado
// for (let x = 0; x < 10; x++) {
  //   console.log("Ciclo número " + x);

    // for (let y = 0; y < 5; y++) {
      //   console.log("Ciclo secundario " + y);
    //}
// }


// while
// let x = 5;
// while (x < 5) {
//     console.log("Ciclo while número " + x);
//     x = x + 1;
// }


// do...while
// let z = 5;
// do {
//     console.log("Ciclo do...while número " + z);
//     z++;
// } while (z < 5);


// switch
// let diaDeLaSemana = Number(prompt("Ingrese día de la semana con números"));
// switch (diaDeLaSemana) {
//     case 1:
//         alert("Lunes");
//         break;
//     case 2:
//         alert("Martes");
//         break;
//     case 3:
//         alert("Miércoles");
//         break;
//     case 4:
//         alert("Jueves");
//         break;
//     case 5:
//         alert("Viernes");
//         break;
//     case 6:
//         alert("Sábado");
//         break;
//     case 7:
//         alert("Domingo");
//         break;
//     default:
//         alert("Ese día no existe");
//         break;
// }

//Imprimir los números del 1 al 10 en la consola.

//let x = 0

//for (let x = 0; x <= 10; x = x + 1) {
//    console.log("Numero " + x)
//}

// Imprimir los números pares del 2 al 20 en la consola.

//let x = 0

//for (let x = 0; x <= 20; x = x + 2) {
//    console.log("x ahora vale " + x)
//}

//Calcular la suma de los primeros 50 números naturales (1 + 2 + 3 + ... + 50) y mostrar el resultado en la consola.

//let suma = 0

//for (x = 1; x <= 50; x = x + 1) {
//    suma = suma + x
//}
// console.log("La suma de todos los numeros es " + suma)

// Crear un programa que solicite al usuario un número y luego imprima la tabla de multiplicar de ese número del 1 al 10.
/* let numero = prompt("Ingrese un numero del 1 al 10");
numero = parseInt(numero); // Convertir el valor ingresado a un número entero

// Verificar si el valor ingresado es un número válido
if (isNaN(numero) || numero < 1 || numero > 10) {
  console.log("Ha ingresado un valor no válido. Por favor, ingrese un número del 1 al 10.");
} else {
  // Si el valor es válido, imprimir la tabla de multiplicar
  console.log("Tabla de multiplicar del " + numero + ":");
  for (let x = 1; x <= 10; x++) {
    let resultado = numero * x;
    console.log(numero + " x " + x + " = " + resultado);
  }
} */

//Crear un programa que imprima la siguiente secuencia de números en la consola: 1, 4, 7, 10, 13, ..., hasta llegar a 100. Utilizar un bucle for.

/* let x = 1

for (x = 1; x <= 100; x = x + 3) {
    console.log("x vale " + x)
} */

//Imprimir los números del 1 al 10 en la consola utilizando un bucle while.

/* let x = 1

while (x <= 10) {
    console.log("Numeros del " + x)
    x = x + 1
} */

//Imprimir los números impares del 1 al 20 en la consola utilizando un bucle while.

/* let x = 1

while(x <= 20) {
    console.log("ahora 'x' vale " + x)
    x = x + 2
} */

//Calcular la suma de los primeros 100 números naturales (1 + 2 + 3 + ... + 100) y mostrar el resultado en la consola utilizando un bucle while.

/* let x = 1; // Comenzamos con 1 para incluir el número 1 en la suma
let suma = 0;

while (x <= 100) {
    console.log("Ahora 'x' vale " + x);
    suma = suma + x; // Agregamos el valor de 'x' a la suma
    x = x + 1;
}

console.log("La suma final es: " + suma);
 */

//Crear un programa que imprima la siguiente secuencia de números en la consola: 100, 90, 80, 70, ..., hasta llegar a 0. Utilizar un bucle while.

/* let x = 100;

while (x >= 0) {
    console.log("Secuencia de numeros " + x);
    x = x - 10; // Restar 10 para obtener la secuencia deseada
}
 */

//function sumar(num1, num2) {
    //let resultado = num1 + num2;
    //return resultado;
  //}
  
  //let resultadoSuma = sumar(5, 3); // Llamamos a la función sumar con los valores 5 y 3
  //console.log(resultadoSuma); // El resultado será 8

  // Función anónima tradicional
/* let saludar = function(nombre) {
    return "Hola, " + nombre + "!";
  };
  
  // Función flecha
  let sumar = (num1, num2) => {
    return num1 + num2;
  };  */














//Algoritmo con un condicional 

/* let numero = prompt("Ingrese su edad")
numero = parseInt(numero)

let ninio = 17
let adulto = 18
let anciano = 60


if (numero <= ninio) {
    console.log("Usted es un niño")
}else if (numero >= adulto && numero < 60) {
    console.log("Usted es un adulto")
}else
    console.log("Usted es un anciano") */


//Crear un algoritmo utilizando un ciclo.

/* let x = 0

while (x < 4 ) {
    console.log("Ahora x vale " + x)
    x = x + 1
    alert("x vale " + x )
} */

// Armar un simulador interactivo, la estructura final de tu proyecto integrador


/* let hincha = "river"
let hinchaDos = "boca"
let hinchaTres = "independiente"

let nombreHincha = prompt("Cual fue el último campeòn nacional argentino?")
nombreHincha = nombreHincha.toLowerCase(); // Convertir la entrada del usuario a minúsculas

if (nombreHincha === hincha.toLocaleLowerCase()) { //-- Al final de .toLocaleLowerCase AGREGAR () para invocar la función
    alert("Tu respuesta es correcta")
}else if (nombreHincha === hinchaTres.toLocaleLowerCase()) {
    alert("La respuesta no es Independiente")
}else if (nombreHincha === hinchaDos.toLocaleLowerCase()) {
    alert("La respuesta no es Boca")
}else {
    alert("Respuesta incorrecta")
}  
 */