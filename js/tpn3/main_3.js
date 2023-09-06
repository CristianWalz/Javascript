principal();
function principal() {
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

  let inputBuscador = document.getElementById("buscador");
  let botonBuscar = document.getElementById("buscar");
  botonBuscar.addEventListener("click", () =>
    filtrar(productos, inputBuscador)
  );
  renderizarTarjetas(productos);
}

function filtrar(productos, input) {
  let textoBuscado = input.value.toLowerCase();
  let productosFiltrados = productos.filter((producto) =>
    producto.nombre.toLowerCase().includes(textoBuscado)
  );
  renderizarTarjetas(productosFiltrados);
}

function renderizarTarjetas(productos) {
  let contenedor = document.getElementById("productos");
  contenedor.innerHTML = "";
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

    let botonAgregarAlCarrito = document.getElementById(`${producto.id}`);
    botonAgregarAlCarrito.addEventListener("click", (e) =>
      agregarAlCarrito(productos, e)
    );
  });
}

function agregarAlCarrito(productos, e) {
  let carrito = recuperarCarrito();
  let productoBuscado = productos.find(
    (producto) => producto.id === Number(e.target.id)
  );
  let productoEnCarrito = carrito.find(
    (producto) => producto.id === productoBuscado.id
  );

  if (productoEnCarrito) {
    productoEnCarrito.unidades++;
    productoEnCarrito.subtotal =
      productoEnCarrito.precioUnitario * productoEnCarrito.unidades;
  } else {
    carrito.push({
      id: productoBuscado.id,
      nombre: productoBuscado.nombre,
      precioUnitario: productoBuscado.precio,
      subtotal: productoBuscado.precio,
      unidades: 1,
    });
  }
  localStorage.setItem("carrito", JSON.stringify(carrito));

  renderizarCarrito();
}

function renderizarCarrito() {
  let contenedor = document.getElementById("carrito");
  contenedor.innerHTML = "";
  let carrito = recuperarCarrito;

  carrito.forEach((producto) => {
    if (producto && producto.nombre) {
      let tarjetaProducto = document.createElement("div");
      tarjetaProducto.innerHTML = `
      <p>${producto.nombre}</p>
      <p>${producto.precioUnitario}</p>
      <p>${producto.unidades}</p>
      <p>${producto.subtotal}</p>
      `;
      contenedor.appendChild(tarjetaProducto);
    }
  });
}

function recuperarCarrito() {
  return localStorage.getItem("carrito")
    ? JSON.parse(localStorage.getItem("carrito"))
    : [];
}
