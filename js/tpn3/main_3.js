let productos = [
  {
    id: 2,
    nombre: "Proteina",
    categoria: "suplementacion",
    stock: 10,
    precio: 6000,
    rutaImagen: "proteina.jpg",
  },
  {
    id: 3,
    nombre: "Creatina",
    categoria: "suplementacion",
    stock: 4,
    precio: 12000,
    rutaImagen: "creatina.jpg",
  },
  {
    id: 5,
    nombre: "Aminoacidos",
    categoria: "suplementacion",
    stock: 5,
    precio: 5000,
    rutaImagen: "aminoacidos.png",
  },
  {
    id: 6,
    nombre: "Prentreno",
    categoria: "suplementacion",
    stock: 6,
    precio: 6500,
    rutaImagen: "preEntreno.jpg",
  },
  {
    id: 7,
    nombre: "Minerales",
    categoria: "suplementacion",
    stock: 7,
    precio: 7000,
    rutaImagen: "multivitaminico.jpeg",
  },
  {
    id: 9,
    nombre: "Barritas de proteina",
    categoria: "snacks",
    stock: 25,
    precio: 500,
    rutaImagen: "barraProteina.jpg",
  },
  {
    id: 10,
    nombre: "Barritas de proteina vegana",
    categoria: "snacks",
    stock: 28,
    precio: 700,
    rutaImagen: "proteinaVegana.jpg",
  },
  {
    id: 12,
    nombre: "Remera",
    categoria: "indumentaria",
    stock: 3,
    precio: 5000,
    rutaImagen: "remera.jpg",
  },
  {
    id: 15,
    nombre: "Muñequera",
    categoria: "indumentaria",
    stock: 2,
    precio: 5200,
    rutaImagen: "muñequera.jpg",
  },
  {
    id: 17,
    nombre: "Musculosa",
    categoria: "indumentaria",
    stock: 4,
    precio: 6300,
    rutaImagen: "musculosa.jpg",
  },
  {
    id: 19,
    nombre: "Campera",
    categoria: "indumentaria",
    stock: 3,
    precio: 12500,
    rutaImagen: "campera.jpg",
  },
  {
    id: 20,
    nombre: "Buzo",
    categoria: "indumentaria",
    stock: 3,
    precio: 15000,
    rutaImagen: "buzo.jpg",
  },
  {
    id: 21,
    nombre: "Termica",
    categoria: "indumentaria",
    stock: 4,
    precio: 10000,
    rutaImagen: "termica.webp",
  },
  {
    id: 22,
    nombre: "Pantalon",
    categoria: "indumentaria",
    stock: 5,
    precio: 8000,
    rutaImagen: "pantalon.webp",
  },
];

let inputBuscarProducto = document.getElementById("buscador");
let botonBuscar = document.getElementById("buscar");
botonBuscar.addEventListener("click", () =>
  filtrar(productos, inputBuscarProducto)
);

let contenedor = document.getElementById("productos"); //Capturo mi contenedor de html "Productos"

function filtrar(productos, input) {
  let productosFiltrados = productos.filter((producto) =>
    producto.nombre.includes(input.value)
  );
  renderizarTarjetas(productosFiltrados);
}

function renderizarTarjetas() {
  contenedor.innerHTML = ""; // Limpiar el contenido existente

  productos.forEach((producto) => {
    let tarjetaProducto = document.createElement("div"); // Por cada producto crear un "div"
    tarjetaProducto.className = "tarjetaProducto"; // Agregando nombre a la clase
    tarjetaProducto.innerHTML = `
        <h4>${producto.nombre}</h4>
        <img src="img/${producto.rutaImagen}" />
        <p>$${producto.precio}</p>
        <button id="${producto.id}">Agregar al carrito</button>
      `;

    contenedor.appendChild(tarjetaProducto); // Agrego un hijo a tarjetaproducto

    /* let botonAgregarAlCarrito = document.getElementById("producto.id")
    botonAgregarAlCarrito.addEventListener("click", (e) => agregarAlCarrito (productos, e)) */
  });
}
renderizarTarjetas(); //llamar a renderizarTarjetas al cargar la pagina

function agregarAlCarrito (productos) {
    let productoBuscado = productos.find(producto => producto.id === e.target.id)
}

function renderizarCarrito () {
    let contenedor = document.getElementById("carrito")
    let carrito = localStorage.getItem("carrito") ? JSON.parse(localStorage.getItem("carrito")) : []

    carrito.forEach(producto => {
        let tarjetaProducto = document.createElement("div")
        tarjetaProducto.innerHTML = `
        <p>${producto.nombre}</p>
        <p>${producto.precio}</p>`
        
        contenedor.appendChild(tarjetaProducto)
    })
}
console.log("hola")
