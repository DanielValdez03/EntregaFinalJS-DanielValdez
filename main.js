let consulta = confirm("Bienvenido a Accionarte, la franquicia de gimnasios más grande del país. ¿Desea adquirir una mensualidad?"); // Al abrir la página se mostrará un confirm para que el usuario elija si quiere adquirir o no los servicios //

if (consulta == true) { // Si el usuario acepta (true) se iniciará el proceso de inscripción //
  let mensualidad; // Declaramos la variable "mensualidad" la cual el usuario le asignará su valor por medio de un prompt //
  do { // Por medio de este ciclo do... while haremos que en caso de que el usuario elija una mensualidad errónea se vuelva a repetir el proceso de inscripción //
    alert("Elige uno de nuestros planes mensuales:\nBasico: $3,000\nCompleto: $5,000\nFamiliar: $6,000");
    mensualidad = prompt("Elige la mensualidad que deseas adquirir"); // Estos son los valores válidos de mensualidades que el usuario debe elegir //
    switch (mensualidad.toLowerCase()) { // Creamos un switch el cuál avisa al usuario que plan adquirió y proceda al registro del user (En caso de poner un valor válido) o avise que se ha colocado un valor inválido y dé la oportunidad de volverlo a intentar //
      case "basico":
        alert("Has adquirido el plan básico por $3,000");
        createUser();
        break;
      case "completo":
        alert("Has adquirido el plan completo por $5,000");
        createUser();
        break;
      case "familiar":
        alert("Has adquirido el plan familiar por $6,000");
        createUser();
        break;
      default:
        alert("Esta mensualidad no está disponible, por favor selecciona una válida");
        break;
    }
  } while (mensualidad !== "basico" && mensualidad !== "completo" && mensualidad !== "familiar"); // Condiciones, las cuales si se cumplen, mantienen el ciclo en funcionamiento //
}else { // Else en caso de que el usuario presione cancelar (false) //
    alert("Gracias por tu visita. ¡Hasta luego!");
  }

function createUser() { // Creamos esta función para crear el nombre de usuario y contraseña por medio de prompts, luego la llamaremos en nuestro switch para que se aplique en todos los casos en donde el usuario seleccione una mensualidad válida //
  let usuario = prompt("Genial ahora creemos una cuenta para guardar tus rutinas\nIngresá un nombre de usuario");
  let contraseña = prompt("Ingresa tu contraseña");
  alert("¡Usuario creado exitosamente!");
}