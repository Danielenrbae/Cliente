var botonMostrarVisitas = document.getElementById("b_visitas");
var parrafoNumeroVisitas = document.getElementById("numVisitas");
var botoneliminarCookie = document.getElementById("b_eliminarCookie");
var visitas = 1;

//Metodo para conseguir el valor de la cookie
function getValor(nombre) {
  let name = nombre + "=";
  let arrayCookies = document.cookie.split(";");

  for (let i = 0; i < arrayCookies.length; i++) {
    const element = arrayCookies[i];

    if (element.includes(nombre)) {
      let arrayIndv = element.split("=");
      console.log(arrayIndv);
      visitas = parseInt(arrayIndv[1]);
    }
  }

  return visitas;
}

//Método que suma al valor de la cookie cada vez que se carga la página. Si la cookie no existe, se crea una con el valor inicial de 1
function recuentoVisita() {
  let fecha_expiracion;
  let fecha_expiracion_final;

  visitas = getValor("visitas");

  fecha_expiracion = new Date();

  fecha_expiracion.setTime(
    fecha_expiracion.getTime() + 365 * 24 * 60 * 60 * 1000
  );

  fecha_expiracion_final = "expires=" + fecha_expiracion.toUTCString();

  document.cookie =
    "visitas=" + (visitas + 1) + ";" + fecha_expiracion_final + ";path=/";
}

//Método para eliminar la cookie
function eliminarCookie() {
  document.cookie = "visitas=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  parrafoNumeroVisitas.innerHTML = "";
  alert('Se ha eliminado lo cookie . Actualiza para volver a crearla');
  visitas = "";
}


//Manejador de eventos
window.addEventListener("load", recuentoVisita);

botonMostrarVisitas.addEventListener("click", function () {
  parrafoNumeroVisitas.innerHTML = visitas;
});

botoneliminarCookie.addEventListener("click", eliminarCookie);
