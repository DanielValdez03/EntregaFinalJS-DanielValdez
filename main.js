// Carrito de Compras para una tienda de camisetas de fútbol //
// Defino los Productos que voy a vender con un objeto constructor //
class CamisetaLigaArgentina {
  constructor(equipo, talle, precio, color) {
    this.equipo = equipo;
    this.talle = talle;
    this.precio = precio; 
    this.color = color
  }
}

let CamisetaBocaJuniors = new CamisetaLigaArgentina ("Boca Juniors", "Talle m", 20000, "azul")
let CamisetaRiverPlate = new CamisetaLigaArgentina ("River Plate", "Talle s", 20000, "blanco")
let CamisetaIndependiente = new CamisetaLigaArgentina ("Independiente", "Talle l", 19000, "rojo")
let CamisetaRacing = new CamisetaLigaArgentina ("Racing", "Talle xs", 19000, "celeste")
let CamisetaTalleres = new CamisetaLigaArgentina ("Talleres", "Talle xxl", 17000, "blanco")
let CamisetaEstudiantes = new CamisetaLigaArgentina ("Estudiantes", "Talle xl", 17000, "rojo")


// Creo un Array con cada uno de los productos //

let catalogo = [CamisetaBocaJuniors, CamisetaRiverPlate, CamisetaIndependiente, CamisetaRacing, CamisetaTalleres,CamisetaEstudiantes]

// Defino una Función la cual va a ser la que permita al usuario interactuar con el stock de la página //
function filtrarProducto() {
  // Utilizo un bucle while el cual se repetirá indefinidamente hasta que el usuario ingresé un valor valido (este bucle finaliza por medio de un break si se encuentra un valor que coincida con la bsuqueda del usuario) //
  while (true) {
    let busquedaUsuario = prompt("Bienvenido, Ingrese cualquier filtro para encontrar la camiseta que busca:\nEquipo\nTalle (Ingresá: Talle + el talle que estas buscando)\nPrecio\nColor").toLowerCase(); // Le pedimos al usuario que filtre alguna caracteristica del producto que busca //

    let solicitudUsuario = catalogo.filter((camiseta) => //Mediante un filter el cual se le aplica al Array que creamos definimos los filtros //
      camiseta.equipo.toLowerCase().includes(busquedaUsuario) ||
      camiseta.talle.toLowerCase().includes(busquedaUsuario) ||
      camiseta.precio.toString().includes(busquedaUsuario) ||
      camiseta.color.toLowerCase().includes(busquedaUsuario)
    );

    let resultados = solicitudUsuario.map(camiseta => `Equipo: ${camiseta.equipo}, ${camiseta.talle}, Precio: ${camiseta.precio}, Color: ${camiseta.color}`).join('\n'); // Utilizamos .map para transformar las camisetas filtradas en un nuevo array de strings que contienen información relevante sobre cada camisetas, esto se mostrará en un alert si la busqueda del usuario tiene alguna coincidencia //

    if (resultados.length > 0) { // Si el usuario ingresa alguna coincidencia con el stock de camisetas se parará el bucle //
      alert("Resultados del filtro:\n" + resultados);
      break; // Salir del bucle si se encontraron resultados //
    } else { // Si es usuario no ingresa alguna coincidencia se mostrará este alert y se repetirá el bucle //
      alert("No se encontraron camisetas con ese filtro. Por favor, ingrese un valor válido.");
    }
  }
}

filtrarProducto();













