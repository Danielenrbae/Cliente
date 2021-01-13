var botonMostrarVisitas = document.getElementById("b_visitas");
var parrafoNumeroVisitas = document.getElementById("numVisitas");
var botoneliminar = document.getElementById("b_eliminarStorage");
var visitas = 1;
var local = window.localStorage;

//Metodo para comprobar que existe en el local storage
function comprobarStorage(){
    if(getValor() == null || getValor() == ""){
        local.setItem("visitas", visitas);
    }else{
        visitas = parseInt(getValor()) + 1;
        local.setItem("visitas" , visitas);
    }
}

//Metodo para conseguir el valor del local storage
function getValor(){
    return local.getItem('visitas');
}

//Metodo para eliminar un dato del local storage
function eliminarLocal(){
    local.removeItem('visitas');
    parrafoNumeroVisitas.innerHTML= "";
    alert('Se ha eliminado el valor del local storage . Actualiza para volver a crearlo');
}

//Manejo de eventos
window.addEventListener('load' , comprobarStorage);

botonMostrarVisitas.addEventListener('click' , function (){
    parrafoNumeroVisitas.innerHTML = getValor();
} );

botoneliminar.addEventListener('click' ,eliminarLocal );