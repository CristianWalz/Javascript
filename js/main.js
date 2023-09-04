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


/* let saludar = function(nombre) {
    console.log("Hola " + nombre)
}
saludar("Cristian"); */

//Escribir una función a la que se le pase una cadena <nombre> y muestre por pantalla el saludo ¡hola <nombre>!

/* let nombre = function(nombre) {
    console.log("Hola " + nombre)
}
nombre("Walz") */

// Escribir una función que reciba un número entero positivo y devuelva su factorial.

/* let calcularFactorial = function(numero) {

}
let numeroEntero = 5
let factorial = calcularFactorial(numeroEntero)
console.log(`El factorial de ${numeroEntero} es: ${factorial}`); */

// Escribir una función que calcule el total de una factura tras aplicarle el IVA. La función debe recibir la cantidad sin IVA y el porcentaje de IVA a aplicar, y devolver el total de la factura. Si se invoca la función sin pasarle el porcentaje de IVA, deberá aplicar un 21%.

// Suma y Resta: Escribe una función que tome dos números como argumentos y devuelva la suma y la resta de esos dos números.

/* let sumaYresta = function(a, b) {
    return(a , b)
}
console.log(10 + 5) */

// Número Mayor: Escribe una función que tome tres números como argumentos y devuelva el número más grande de los tres.

/* let numeroMayor = function(a , b , c) {
    if (a >= b && a >= c) {
        return a;
  } else if (b >= a && b >= c) {
    return b;
  } else { 
    return c;
  }
} 
let resultado = numeroMayor(34, 5, 9)
console.log("El numero mas grande es " + resultado) */

//Escribir una función que muestre por pantalla el saludo ¡Hola amiga! cada vez que se la invoque.

/* function saludar(nombre) {
    console.log("Hola amiga")
}
saludar() */

// 2. Escribir una función a la que se le pase una cadena <nombre> y muestre por pantalla el saludo ¡hola <nombre>!.

/* function nombre(nombre) {
    console.log("Hola " + nombre)
}
nombre("Cristian") */

 //Escribir una función que reciba un número entero positivo y devuelva su factorial.

// Escribir una función que calcule el total de una factura tras aplicarle el IVA. La función debe recibir la cantidad sin IVA y el porcentaje de IVA a aplicar, y devolver el total de la factura. Si se invoca la función sin pasarle el porcentaje de IVA, deberá aplicar un 21%.
/* 
function total (a , b) {
    let totalConIva = (a * 1.21)
    return totalConIva 
} if(b) */









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


// Ejercicios de ARRAYS y sus MÉTODOS

 //1. Escribir un programa que almacene las asignaturas de un curso (por ejemplo
   // Matemáticas, Física, Química, Historia y Lengua) en un array y la muestre por
    //pantalla.

/* let cursos = ["Matemáticas", "Física", "Química", "Historia", "Lengua"]
console.log(cursos) */

// 2. Escribir un programa que almacene las asignaturas de un curso (por ejemplo
//Matemáticas, Física, Química, Historia y Lengua) en un array y la muestre por
//pantalla el mensaje Yo estudio <asignatura>, donde <asignatura> es cada una de
//las asignaturas del array.

/* let cursos = ["Matemáticas", "Física", "Química", "Historia", "Lengua"]
alert("Yo estudio " +  cursos.join(", ")) */

//3. Escribir un programa que almacene las asignaturas de un curso (por ejemplo
//    Matemáticas, Física, Química, Historia y Lengua) en un array, pregunte al usuario
//    la nota que ha sacado en cada asignatura, y después las muestre por pantalla con
//    el mensaje En <asignatura> has sacado <nota> donde <asignatura> es cada una
//    des las asignaturas del array y <nota> cada una de las correspondientes notas
//    introducidas por el usuario.

// Paso 1: Crear el array con las asignaturas
/* let asignaturas = ["Matemáticas", "Física", "Química", "Historia", "Lengua"];

// Paso 2: Crear un array vacío para almacenar las notas
let notas = [];

// Paso 3: Utilizar un bucle for para preguntar al usuario las notas
for (let i = 0; i < asignaturas.length; i++) {
  // Pedir la nota al usuario para cada asignatura
  let nota = prompt(`Ingrese la nota para ${asignaturas[i]}:`);

  // Agregar la nota ingresada al array de notas
  notas.push(nota);
}

// Paso 4: Mostrar las notas por pantalla
for (let i = 0; i < asignaturas.length; i++) {
  console.log(`En ${asignaturas[i]} has sacado ${notas[i]}`);
} */

// 4. Escribir un programa que pregunte al usuario los números ganadores de la lotería
//primitiva, los almacene en un array y los muestre por pantalla ordenados de menor
//a mayor.

/* let usuario = Number(prompt("Ingrese cantidad de números a cargar"))
let numeros = []
for (let i = 0; i < usuario; i++) {
    let numero = Number(prompt("Ingrese numero"))
    numeros.push(numero)
}
console.log(numeros)
console.log(numeros.sort()) */ //Ingresa numeros de menor a mayor con .sort

// 5. Escribir un programa que almacene en un array los números del 1 al 10 y los muestre por pantalla en orden inverso separados por comas.

/* et numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
numeros.reverse() // .reverse me permite romper la estructura y dar vueltas los numeros
alert(numeros.join(" , ")) */

//6. Escribir un programa que almacene las asignaturas de un curso (por ejemplo Matemáticas, Física, Química, Historia y Lengua) en un array, pregunte al usuario la nota que ha sacado en cada asignatura y elimine del array las asignaturas aprobadas. Al final el programa debe mostrar por pantalla las asignaturas que e usuario tiene que repetir.

/* let asignaturas = ["Matemáticas", "Física", "Química", "Historia", "Lengua"];
let usuario = Number(prompt("Que nota te sacaste en " + (asignaturas)))

for (let i = 0; i < asignaturas; i++) { */

/* function saludar(){
    alert("Hola amigo");
} */
// 2. Escribir una función a la que se le pase una cadena <nombre> y muestre
// por pantalla el saludo ¡hola <nombre>!.

// 2. Escribir una función a la que se le pase una cadena <nombre> y muestre
// por pantalla el saludo ¡hola <nombre>!.
/* function saludar(nombre) {
    console.log(`Hola ${nombre  }` )
}
saludar("Fer") */





/* let passGuardada = "1234"

const login = () => {
    let ingresar = false
    for (let i = 3 ;i > 0 ; i--){
        let passIngresada = prompt(`Ingresa tu contraseña. Tienes ${i} intentos`)

    if(passIngresada === passGuardada) {
        alert("El login fue exitoso!")
        ingresar = true
        break
    }else {
        alert("Contraseña incorrecta")
    }
    return ingresar
  }
}
if(login()) {
    let saldo = 50000
    let opcion = prompt (`Elegi una opcion:
                            \n 1- Saldo
                            \n 2- Retirar efectivo
                            \n 3- Depositar
                            \n Escribe "ESC" para salir`).toUpperCase()
    while(opcion != "ESC"){
        switch(opcion) {
            case "1":
                alert(`Tu saldo actual es de $${saldo}`)
                break
                case "2":
                    let retirar = +(prompt(`Ingresa tu monto a retirar`))
                    if(isNaN(retirar)){
                        alert("Error debe ingresar numeros")
                        else {
                            if(retirar <= saldo ) {
                                saldo -= retirar
                                alert(`Retiro exitoso, tu saldo actual es de `)
                            }
                        }
                    }
        }
    }
    }else {
        console.log("Se te ha bloqueado tu tarjeta")
    } */


// Imprimir números pares del 1 al 20:

/* for (let i = 2; i <= 20; i += 2) {
    console.log(`Ahora ${i} vale ${i} `)
    
} */

// Suma de números del 1 al 100: Calcula la suma de todos los números del 1 al 100 utilizando un ciclo for

/* let suma = 0

for (let i = 0; i <= 100; i++) {
    console.log(`Ahora ${i} vale hasta el numero 100`)
    suma += i;
}
console.log(`La suma de todos los numeros da ${suma}`) */

// Tabla de multiplicar: Imprime la tabla de multiplicar de un número específico utilizando un ciclo for. Por ejemplo, la tabla de multiplicar del 5.

/* let numero = 5

for (let i = 1; i <= 10; i ++) {
    let resultado = numero * i;
    console.log(`${numero} x ${i} = ${resultado}`)
} */

// Contar vocales en una cadena: Dada una cadena ingresada por el usuario, cuenta cuántas vocales (a, e, i, o, u) hay utilizando un ciclo for

/* let cadena = prompt("Ingresa una cadena de texto:");
let contadorVocales = 0;

for (let i = 0; i < cadena.length; i++) {
    let letra = cadena[i].toLowerCase();
    if (letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u") {
        contadorVocales++;
    }
}

console.log(`La cadena "${cadena}" tiene ${contadorVocales} vocales.`);
 */

// Imprimir números en reversa: Imprime los números del 10 al 1 en orden descendente utilizando un ciclo for.


/* let mensaje = `
    1 - Listar productos
    2 - Filtrar por categoria
    3 - Ordenar por propiedad de manera asc
    4 - Ordenar por propiedad de manera des
    5 - Agregar producto al carrito por id
    6 - Ver costo total del carrito
    7 - Finalizar compra
    0 - Salir
    */


    /* function filtrar(listaAOrdenar, propiedad, propiedad2, valor, operador) {
    switch (operador) {
      case "===":
        return listaAOrdenar.filter(elemento => elemento[propiedad] === valor)
      case "!==":
        return listaAOrdenar.filter(elemento => elemento[propiedad] !== valor)
      case "includes":
        return listaAOrdenar.filter(elemento => elemento[propiedad].includes(valor) || elemento[propiedad2].includes(valor))
      default:
        break;
    }
  } */
  // console.log(filtrar(productos, "categoria", "deportes", "==="))
  // console.log(filtrar(productos, "categoria", "deportes", "!=="))
  // console.log(filtrar(productos, "nombre", "categoria", "or", "includes"))
  
  /* function ordenar(listaAOrdenar, esAscendente, propiedad) {
    listaAOrdenar.sort((a, b) => {
      if (a[propiedad] > b[propiedad]) {
        return 1
      }
      if (a[propiedad] < b[propiedad]) {
        return -1
      }
      return 0
    })
  
    if (!esAscendente) {
      listaAOrdenar.reverse()
    }
  
    return listaAOrdenar
  } */
  // console.log(ordenar(productos, true, "precio"))
  // console.log(ordenar(productos, false, "nombre"))
  
  /* let mensaje = `
    1 - Listar productos
    2 - Filtrar por categoria
    3 - Ordenar por propiedad de manera asc
    4 - Ordenar por propiedad de manera des
    5 - Agregar producto al carrito por id
    6 - Ver costo total del carrito
    7 - Finalizar compra
    0 - Salir
*/

principal()

function principal() {
  let productosOriginal = [
    { id: 2, nombre: "pelota de futbol", categoria: "deportes", stock: 2, precio: 5000, rutaImagen: "pelota-futbol.jpg" },
    { id: 5, nombre: "gorra 1", categoria: "indumentaria", stock: 7, precio: 2650, rutaImagen: "gorra.jpg" },
    { id: 7, nombre: "remera mangas cortas", categoria: "indumentaria", stock: 4, precio: 4500, rutaImagen: "remera.jpg" },
    { id: 9, nombre: "pelota de voley", categoria: "deportes", stock: 1, precio: 2800, rutaImagen: "pelota-voley.jpg" },
    { id: 12, nombre: "remera mangas largas", categoria: "indumentaria", stock: 3, precio: 7300, rutaImagen: "remera-ml.jpeg" },
    { id: 15, nombre: "short de basquet", categoria: "indumentaria", stock: 8, precio: 5600, rutaImagen: "short.jpg" },
    { id: 17, nombre: "gorra 2", categoria: "indumentaria", stock: 7, precio: 2650, rutaImagen: "gorra2.jpg" },
  ]

  let input = document.getElementById("buscador")
  input.addEventListener("input", () => filtrar(productosOriginal, input))

  let boton = document.getElementById("boton")
  boton.addEventListener("click", () => filtrar(productosOriginal, input))

  let botonesFiltrosCat = document.getElementsByClassName("botonFiltro")
  for (const boton of botonesFiltrosCat) {
    boton.addEventListener("click", () => filtrar(productosOriginal, boton))
  }

  let verOcultarCarrito = document.getElementById("verCarrito")
  verOcultarCarrito.addEventListener("click", mostrarOcultar)

  let botonComprar = document.getElementById("botonComprar")
  botonComprar.addEventListener("click", () => finalizarCompra(productos))

  renderizarCarrito()
  renderizarTarjetas(productosOriginal)
}