'use strict';



var MAX_PETICIONES = 100;
var busqueda;
var premios = [];

//Realiza la peticiones cuando carga el documento
$(document).ready(function () {

    for (let i = 0; i < MAX_PETICIONES; i++) {

        $.get("https://apuntesfpinformatica.es/DWEC/sustitutoAPILoteria.php", { n: i },
            function (data) {

                busqueda = eval(data);
                premios[busqueda.numero] = busqueda.premio;

            }
        );

    }

    //ESPERAR 5 SEG PARA QUE SE ACTIVE EL BOTON

    setTimeout(() => {
        $("#botonPrimos").removeAttr("disabled");
        $("#botonPalindromos").removeAttr("disabled");
        $("#botonUsuario").removeAttr("disabled");
    }, 4000);

});

//Comprobar numero primo
function primo(num) {

    if (num === 1)
        return false;
    if (num === 2)
        return true;
    if (num % 2 === 0)
        return false;


    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i === 0)
            return false;
    }
    return true;
}

//Comprobar numero palindromo
function palindromo(num) {
    let copia = [];

    let numeroString = num.toString();
    let numSeparado = numeroString.split("");

    copia = [...numSeparado];

    copia.reverse();

    for (let i = 0; i < numSeparado.length; i++) {

        if (numSeparado[i] == copia[i]) {
            return true;
        } else {
            return false;
        }

    }

    return true;
}

//Recoge el array introducido por el usuario
function recogerDatos() {

    var datos = $("#datos").val();

    var datosSeparados = datos.split(",");


    for (let i = 0; i < datosSeparados.length; i++) {
        if (datosSeparados[i] < 0 || datosSeparados[i] > 99999 || isNaN(datosSeparados[i])) {
            datosSeparados.splice(i, 1);
        }

    }

    return datosSeparados;

}


//Calcular suma de premios de los numeros primos

function sumaPrimos() {

    let total = 0;
    for (let i = 0; i < MAX_PETICIONES; i++) {

        if (primo(i)) {
            total = total + premios[i];
        }

    }

    return total;

}

//Calcula suma de premios de los numero palindromos
function sumaPalindromos() {
    let total = 0;
    for (let i = 0; i < MAX_PETICIONES; i++) {
        if (palindromo(i)) {
            total = total + premios[i];
        }
    }

    return total;
}

//Calcula suma de premios introducidos por el usuario

function sumaUsuarios(listaNumeros) {

    let total = 0;

   
    for (let i = 0; i < listaNumeros.length; i++) {
        for (let x = 0; x < MAX_PETICIONES; x++) {
            if (listaNumeros[i] == x) {
                total = total + premios[x];
               
            }
        }

    }
    return total;

}

    //boton mostrar primos

    $("#botonPrimos").click(function (e) {
        e.preventDefault();

        $("#resultadoPrimo").append("<p>El resultado del sumatorio de premios para los números primos es: " + sumaPrimos() + "</p>");

        $("#botonPrimos").attr("disabled", true);

    });

    //Boton mostrar palindromos

    $("#botonPalindromos").click(function (e) {
        e.preventDefault();

        $("#resultadoPalindromo").append("<p>El resultado del sumatorio de premios para los números palíndromos es: " + sumaPalindromos() + "</p>");


        $("#botonPalindromos").attr("disabled", true);

    });


    //Boton mostrar suma de premios de números introducidos por el usuario

    $("#botonUsuario").click(function (e) {
        e.preventDefault();
        var datosRecogidos = recogerDatos();

        $("#resultadoUsuario").append("<p>El resultado del sumatorio de premios para los números del usuario es: " + sumaUsuarios(datosRecogidos) + "</p>");


        $("#botonUsuario").attr("disabled", true);

    });