let productos = [
    { id: 2, nombre: "Proteina", categoria: "suplementacion", stock: 10, precio: 6000 },
    { id: 3, nombre: "Creatina", categoria: "suplementacion", stock: 4, precio: 12000 },
    { id: 5, nombre: "Aminoacidos", categoria: "suplementacion", stock: 5, precio: 5000 },
    { id: 6, nombre: "Prentreno", categoria: "suplementacion", stock: 6, precio: 6500 },
    { id: 7, nombre: "Minerales", categoria: "suplementacion", stock: 7, precio: 7000 },
    { id: 9, nombre: "Barritas de proteina", categoria: "snacks", stock: 25, precio: 500 },
    { id: 10, nombre: "Barritas de proteina vegana", categoria: "snacks", stock: 28, precio: 700 },
    { id: 12, nombre: "Remera", categoria: "indumentaria", stock: 3, precio: 5000 },
    { id: 15, nombre: "Muñequera", categoria: "indumentaria", stock: 2, precio: 5200 },
    { id: 17, nombre: "Musculosa", categoria: "indumentaria", stock: 4, precio: 6300 },
    { id: 19, nombre: "Campera", categoria: "indumentaria", stock: 3, precio: 12500 },
    { id: 20, nombre: "Buzo", categoria: "indumentaria", stock: 3, precio: 15000 },
    { id: 21, nombre: "Termica", categoria: "indumentaria", stock: 4, precio: 10000 },
    { id: 22, nombre: "Pantalon", categoria: "indumentaria", stock: 5, precio: 8000 },
]

/* let salida = productos.map(producto => `ID : ${producto.id} - Nombre: ${producto.nombre}  `)
alert(salida.join("\n")) */

let mensaje = "1 - Para lista de productos\n2 - Para ver informacion del producto \n3 - Agregar productos al carrito \n4 - Filtrar por categoria \n5 - Finalizar compra \n0 - Para salir"

let opcion

do {
  opcion = Number(prompt("Bienvenidos a Ludus\n" + mensaje))
  if(opcion === 1) {
    alert(listar(productos))
  }else if (opcion === 2) {
    let id = Number(prompt("Ingrese el id de producto\n" + listar(productos)))
    infoDelProducto(id)
  }else if (opcion === 4 ) {
    let categoria = prompt("Ingrese categoría:\n Suplementación \n       o      \n Indumentaria").toLocaleLowerCase()
    let productosFiltrados = productos.filter(producto => producto.categoria === categoria)
    alert(listar(productosFiltrados))
  }

} while (opcion != 0); {
  alert("Gracias por su visita")
}

function listar(productos) {
  salida = productos.map(producto => `Nombre: ${producto.nombre} - ID ${producto.id}`).join("\n")
  return(salida)

}
function infoDelProducto(id) {
  let productoBuscado = productos.find(producto => producto.id === id)
  if (productoBuscado) {
    alert(`Nombre: ${productoBuscado.nombre} - Categoria ${productoBuscado.categoria} - Precio ${productoBuscado.precio}`)
  }else {
    alert("Producto buscado no encontrado")
  }
}


/* let productosFiltrados = productos.filter(producto => producto.categoria === "suplementacion"); {
    console.log(productosFiltrados)
} */

// Filtrar productos por precio mayor a 6000

/* let productoFiltrados = productos.filter(producto => producto.precio > 6000); {
    console.log(productoFiltrados)
}
 */


// Ordenar productos de mayor a menor precio

/* productos.sort((productoA, productoB) => productoA.precio - productoB.precio); {
    console.log(productos)
} */

// Ordenar productos de menor a mayor

/* productos.sort((productosA, productosB) => productosB.precio - productosA.precio); {
    console.log(productos)
} */


/* let precioMayor = productos.find(producto => producto.precio >= 5000); {
    console.log(precioMayor)
}
 */

// Buscar un producto del carrito especifico mediante un prompt

/* let buscador = prompt("Que te gustaria comprar ?")

buscador = buscador.toLocaleLowerCase();

productoEncontrado = productos.find(producto => producto.nombre === buscador);

if (productoEncontrado) {
    console.log(`El producto que elegiste es ${productoEncontrado.nombre}`)
} else {
    console.log("El producto no fue encontrado en el carrito")
} */

// Agregar producto a un array

/* let nuevoProducto = {
    id: 23,
    nombre: "bcaa",
    categoria: "suplementacion",
    stock: 4,
    precio: 6500
}

productos.push(nuevoProducto);

console.log(productos) */

// Eliminar producto de un array

/* let eliminarProducto = productos.splice(2, 1); { // Elimino el numero 2 de mi lista, si coloco 1 al final del parametro
    console.log(productos)
} */

// Filtrar los nombres de los productos y el id mediante foreach

/* productos.forEach((producto, id) => {
    console.log(producto.nombre, producto.id)
}) */







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
  `
  alert(mensaje) */
  
  // opcion 5
  // 1 lista para que pueda ver los ids de los productos
  // 2 prompt para que ingrese el id
  // 3 metodo find para buscar el producto por id dentro del array productos
  // 4 agregar producto al carrito con push

  // Crear un programa que determine si un número introducido en un Prompt es par o no, la respuesta será mostrada en una alerta.

  /* let numeroIngresado = parseInt(prompt("Ingrese el numero del 1 al 20"))

  if (numeroIngresado % 2 === 0) {
    alert(`El numero que ingresaste es par ${numeroIngresado}`)
  } else {
    alert(`El numero ingresado es inpar ${numeroIngresado}`)
  } */

  // Crear un programa que determine si un número introducido en un Prompt es divisible por 5 o no, mostrar el resultado con console.log

  /* let numeroIngresado = parseInt(prompt("Ingrese un numero"))

  if (numeroIngresado % 5 === 0) {
    console.log(`El numero ingresado se puede dividir por 5 el resultado es ${numeroIngresado / 5}`)
  } else {
    alert("No se puede dividir por 5")
  } */

  // Crear un programa que le pida al usuario dos números en un Prompt y luego muestre en un alerta el número mayor.

 /*  let numeroIngresado = parseInt(prompt("Ingrese el primer numero"))
  let numeroIngresadoDos = parseInt(prompt("Ingrese el segundo numero"))

  if (numeroIngresado > numeroIngresadoDos) {
    alert(`El numero mas grande que elegiste es ${numeroIngresado}`);
  } else if (numeroIngresadoDos > numeroIngresado) {
    alert(`El numero mas grande que elegiste es ${numeroIngresadoDos}`)
  } else {
    alert("Los numeros son iguales")
  } */

  // Crear un programa que le pida al usuario primero un números al usuario a través de un prompt y luego un segundo número para luego mostrar en un alerta el número mayor, esta vez realizar el ejercicio ocupando un if ternario.

  /* let numeroIngresado = parseInt(prompt("Ingrese el primer numero"))
  let numeroIngresadoDos = parseInt(prompt("Ingrese el segundo numero"))
  let resultado = 0

 resultado = numeroIngresado > numeroIngresadoDos ? numeroIngresado : numeroIngresadoDos
alert(`El numero mayor ingresado es ${resultado}`) */
