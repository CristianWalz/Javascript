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

/* let nombreUno = "Cristian "
let apellidoUno = "Walz"
let edad = 28
let sumaEntre = nombreUno + apellidoUno

prompt("Tu nombre es : ", nombreUno)
prompt ("Tu apellido es :", apellidoUno)
prompt("Tu edad es : ", edad) */

let textUno = "Cristian "
let textDos = "Walz"
let sumaEntre = textUno + textDos
prompt("Tu nombre y edad es: ", sumaEntre)
