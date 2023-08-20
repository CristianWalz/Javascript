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
// Agregar producto a un array (push)

let nuevoProducto = {
  id: 23,
  nombre: "Bcaa",
  categoria: "suplementacion",
  stock: 4,
  precio: 6500
}

productos.push(nuevoProducto);

console.log(productos)


let mensaje = "1 - Para lista de productos\n2 - Para ver informacion del producto \n3 - Agregar productos al carrito \n4 - Filtrar por categoria \n5 - Finalizar compra \n0 - Para salir"

let opcion

let carrito = []

do {
  opcion = Number(prompt("Bienvenidos a Ludus\n" + mensaje))
  if(opcion === 1) {
    alert(listar(productos))
  }else if (opcion === 2) {
    let id = Number(prompt("Ingrese el id de producto para mas información\n" + listar(productos)))
    infoDelProducto(id)
  }else if (opcion === 4 ) {
    let categoria = prompt("Ingrese categoría:\n Suplementación \n       o      \n Indumentaria").toLocaleLowerCase();
    let mensajeError = `Categoria ${categoria} ingresada no existe`
    if (categoria === "suplementacion" || categoria === "indumentaria") {
      let productosFiltrados = productos.filter(producto => producto.categoria === categoria);
      if (productosFiltrados.length > 0) {
        alert(listar(productosFiltrados));
      }
    } else {
      alert(`${mensajeError}`);
    }
  }
  
} while (opcion != 0); 
  alert("Gracias por su visita")


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

// Filtrar los nombres de los productos, el id y el stock mediante foreach

productos.forEach((producto, precio, stock) => {
  console.log(`Nombre del producto "${producto.nombre}", Precio "${producto.precio}", Stock "${producto.stock}"`)
})

// Ordenar productos de mayor a menor precio

 productos.sort((productoA, productoB) => productoA.precio - productoB.precio); {
    console.log(productos)
} 

// Ordenar productos de menor a mayor

productos.sort((productosA, productosB) => productosB.precio - productosA.precio); {
    console.log(productos)
}

function agregarAlCarrito(carrito, producto) {
  
}

// Eliminar producto de un array

let eliminarProducto = productos.splice(2, 1); { // Elimino el numero 2 de mi lista, si coloco 1 al final del parametro
    console.log(productos)
}