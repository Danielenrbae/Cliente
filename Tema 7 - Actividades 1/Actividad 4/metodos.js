var desplegablePeliculas = document.getElementById('peliculas');
var array = ['Titanic' , 'Avatar' , 'Star wars' , 'Los Vengadores'];
var botonAdd = document.getElementById('botonAdd');
var lista = document.getElementById('carrito');
var array2 = [];
var local = window.localStorage;


//Metodo para rellenar el  desplegable con los datos del array
function llenarDatos(){

    array.forEach(element => {
        var opcion = document.createElement('option');
        opcion.setAttribute('value' , element);
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
function addPelicula(){
    var valorDesplegable = desplegablePeliculas.options[desplegablePeliculas.selectedIndex].value;
    
    var elementoLista = document.createElement('li');
    elementoLista.innerHTML = valorDesplegable;

    lista.appendChild(elementoLista);

    array2.push(valorDesplegable);

    local.setItem('listaPeliculas' , array2);

}



window.addEventListener('load' , llenarDatos);
botonAdd.addEventListener('click' , addPelicula);
