
//ACTIVIDAD 1

var boton1 = document.getElementById('botonAct1');
var botonOcultar1 = document.getElementById('ocultar1');
var resultado1 = document.getElementById('resultado1');
var parrafo1 = document.getElementById('p1');
var parrafo2 = document.getElementById('p2');

const peticion1 = new Request('https://pokeapi.co/api/v2/pokemon/ditto/');

//FETCH A LA URL https://pokeapi.co/api/v2/pokemon/ditto/

function actividad1_EJXMLHttpRequest() {
    return new Promise(function (resolve, reject) {
        let solicitud;
        solicitud = new XMLHttpRequest();

        solicitud.open('GET', 'https://pokeapi.co/api/v2/pokemon/ditto/');

        solicitud.onload = function () {
            if (solicitud.status === 200) {
                parrafo1.innerHTML = "El status de la solicitud GET es :" + solicitud.status;
                resolve(solicitud.response);
            } else {
                reject();
            }
        };

        solicitud.send();

    })
}

//FETCH A LA URL https://pokeapi.co/api/v2/pokemon/ditto/

function actividad1() {
    fetch(peticion1)
        .then(response => {
            if (response.status === 200) {
                parrafo1.innerHTML = 'El codigo de la peticion es ' + response.status;
                return response.text();
            }
        }).then(data => {
            parrafo2.innerHTML = "Los datos son los siguentes  </br> " + data;
        }).catch(error => {
            alert("Ha surgido un error :" + error);
        });

}



boton1.addEventListener('click', function () {
    this.style.backgroundColor = 'green';
    this.style.color = 'white';
    resultado1.style.display = 'block';

    //SOLUCION DE LA PRIMERA ACTIVIDAD - con XMLHttpRequest

    /* actividad1_EJXMLHttpRequest().then(resultado => {
         return resultado;
     }).then(resultado => {
         parrafo2.innerHTML = resultado;
     }).catch(error => {
         console.log('error' + error);
     })
     */


    //SOLUCION DE LA PRIMERA ACTIVIDAD - con fetch

    actividad1();

});

botonOcultar1.addEventListener('click', function () {
    resultado1.style.display = 'none';
});


//ACTIVIDAD 2 

var boton2 = document.getElementById('botonAct2');
var botonOcultar2 = document.getElementById('ocultar2');
var resultado2 = document.getElementById('resultado2');
var imagenes = document.getElementById('imagenes');
var nombreInput = document.getElementById('nombreInput');

function actividad2() {

    var botonBuscar = document.getElementById('botonBuscar');

    botonBuscar.addEventListener('click', function () {
        let nombreAbuscar = nombreInput.value;
        var peticion = 'https://pokeapi.co/api/v2/pokemon/' + nombreAbuscar;



        fetch(peticion)
            .then(response => {
                return response.json();
            }).then(data => {

                //ELIMINAR LAS IMAGENES ANTES DE CADA BUSQUEDA

                // RECORRER LAS PROPIEDADES DEL OBJETO

                var propiedades = listAllProperties(data.sprites);

                propiedades.forEach(element => {
                    if (element.indexOf('front') >= 0) {

                        if (eval('data.sprites.' + element) !== null) {

                            var imagen = document.createElement('img');

                            imagen.setAttribute('src', eval('data.sprites.' + element));
                            imagen.setAttribute('class', 'imagen');

                            imagenes.appendChild(imagen);
                        }
                    }
                });
            }).catch(error => {
                alert('Error: ' + error);
            });


    });



}

function listAllProperties(o) {
    var objectToInspect;
    var result = [];

    for (objectToInspect = o; objectToInspect !== null;
        objectToInspect = Object.getPrototypeOf(objectToInspect)) {
        result = result.concat(
            Object.getOwnPropertyNames(objectToInspect)
        );
    }

    return result;
}

boton2.addEventListener('click', function () {
    this.style.backgroundColor = 'green';
    this.style.color = 'white';
    resultado2.style.display = 'block';

    //SOLUCION ACTIVIDAD 2

    actividad2();


});

botonOcultar2.addEventListener('click', function () {
    resultado2.style.display = 'none';
});
