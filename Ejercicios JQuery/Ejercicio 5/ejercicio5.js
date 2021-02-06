

var clave = '142e7362';

$(document).ready(function () {

    $("#boton").click(function (e) {
        e.preventDefault();

        var tipo = $("#selector").val();
        var year = $("#anio").val();
        var titulo = $("#titulo").val();


        buscarDatos(tipo, year, titulo);


    });

});



function buscarDatos(tipo, year, titulo) {


    $.get("https://www.omdbapi.com/?apikey=142e7362&", {
        type: tipo,
        y: year,
        s: titulo

    },
        function (data) {


            if (data.Error == "Too many results." || data.Error == "Series not found!") {
                alert("No existe o la API no contenpla la petición");
            } else {

                var objeto = data.Search[0];

                $("#consulta").append("<p> El titulo es: " + objeto.Title + "</p> <p> El año de la pelicula es: " + objeto.Year + "</p>");

                if (objeto.Poster != 'N/A') {
                    $("#imagen").attr("src", objeto.Poster);
                } else {

                    $("#consulta").append("<p>Póster no encontrado </p>");


                }

            }


        }
    );





}