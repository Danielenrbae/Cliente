
var botonAct2 = document.getElementById('botonAct2');
var botonAct3 = document.getElementById('botonAct3');
var botonAct4 = document.getElementById('botonAct4');


/* ACTIVIDAD 2
    Realiza una Web que almacene en una cookie el número de visitas que has
    realizado, incrementado el valor del número de visitas a cada visita realizada.
    La web debe tener una interfaz para visualizar el contenido de la cookie y para
    eliminar la cookie

*/
function actividad2() {
    let botonMostrarVisitas = document.getElementById("b_visitasC");
    let parrafoNumeroVisitas = document.getElementById("numVisitasC");
    let botoneliminarCookie = document.getElementById("b_eliminarCookie");
    let visitas = 1;

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

}

/* ACTIVIDAD 3

    Realiza el ejercicio anterior usando LocalStorage.

*/

function actividad3() {
    let botonMostrarVisitas = document.getElementById("b_visitas");
    let parrafoNumeroVisitas = document.getElementById("numVisitas");
    let botoneliminar = document.getElementById("b_eliminarStorage");
    let visitas = 1;
    let local = window.localStorage;

    //Metodo para comprobar que existe en el local storage
    function comprobarStorage() {
        if (getValor() == null || getValor() == "") {
            local.setItem("visitas", visitas);
        } else {
            visitas = parseInt(getValor()) + 1;
            local.setItem("visitas", visitas);
        }
    }

    //Metodo para conseguir el valor del local storage
    function getValor() {
        return local.getItem('visitas');
    }

    //Metodo para eliminar un dato del local storage
    function eliminarLocal() {
        local.removeItem('visitas');
        parrafoNumeroVisitas.innerHTML = "";
        alert('Se ha eliminado el valor del local storage . Actualiza para volver a crearlo');
    }

    //Manejo de eventos
    window.addEventListener('load', comprobarStorage);

    botonMostrarVisitas.addEventListener('click', function () {
        parrafoNumeroVisitas.innerHTML = getValor();
    });

    botoneliminar.addEventListener('click', eliminarLocal);
}


/* ACTIVIDAD 4

    Realiza un formulario de películas el cual contenga un campo de texto guardar y 
    un listado de películas con un título de listado de películas y estás se vayan listando
     y mostrando en pantalla si funciona de forma correcta una vez que salgas de la página 
     la información seguirá mostrándose en la página web con las películas puestas anteriormente.

*/

function actividad4() {
    var desplegablePeliculas = document.getElementById('peliculas');
    var array = ['Titanic', 'Avatar', 'Star wars', 'Los Vengadores'];
    var botonAdd = document.getElementById('botonAdd');
    var lista = document.getElementById('carrito');
    var array2 = [];
    var local = window.localStorage;


    //Metodo para rellenar el  desplegable con los datos del array
    function llenarDatos() {

        array.forEach(element => {
            var opcion = document.createElement('option');
            opcion.setAttribute('value', element);
            opcion.innerHTML = element;
            desplegablePeliculas.appendChild(opcion);
        });


        listado = local.getItem('listaPeliculas');

        array2 = listado.split(',');


        for (let i = 0; i < array2.length; i++) {
            const element = array2[i];

            var elementoLista = document.createElement('li');
            elementoLista.innerHTML = element;

            lista.appendChild(elementoLista);

        }
    }

    //Metodo para añadir la pelicula a la lista
    function addPelicula() {
        var valorDesplegable = desplegablePeliculas.options[desplegablePeliculas.selectedIndex].value;

        var elementoLista = document.createElement('li');
        elementoLista.innerHTML = valorDesplegable;

        lista.appendChild(elementoLista);

        array2.push(valorDesplegable);

        local.setItem('listaPeliculas', array2);

    }



    window.addEventListener('load', llenarDatos);
    botonAdd.addEventListener('click', addPelicula);

}




//handle event
var divActi2 = document.getElementById('actv2');

botonAct2.addEventListener('click' , function(){

    this.style.backgroundColor = 'green';
    divActi2.style.visibility= 'visible';
  
    
});

var divActi3 = document.getElementById('actv3');

botonAct3.addEventListener('click' , function (){

    this.style.backgroundColor = 'green';
    divActi3.style.visibility= 'visible';
    
});

var divActi4 = document.getElementById('actv4');

botonAct4.addEventListener('click' , function (){

    this.style.backgroundColor = 'green';
    divActi4.style.visibility= 'visible';
    
});

