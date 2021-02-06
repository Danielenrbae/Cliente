
var arr = {};

var votos = [];
$(document).ready(function () {

    peticionVotosSINBAN();

    peticionVotosCONBAN();

});

function peticionVotosSINBAN() {

    $.get("https://apuntesfpinformatica.es/DWEC/EjemploUD9-3-1Restaurante.php",
        function (data) {
            arr = JSON.parse(data);

            // var arr = [{ "restaurante": "El Bully", "usuario": "Pedro" }, { "restaurante": "El Bully", "usuario": "Pablo" }, { "restaurante": "La tasca", "usuario": "Pablo" }, { "restaurante": "El Bully", "usuario": "Pedro" }, { "restaurante": "La tasca", "usuario": "Juan" }, { "restaurante": "La Pepica", "usuario": "Alberto" }, { "restaurante": "El Bully", "usuario": "Pedro" }, { "restaurante": "El Bully", "usuario": "Pedro" }]
            // console.log(arr);


            var nombres = [];

            //COGEMOS LOS NOMBRE DE LOS RESTAURANTES Y LO GUARDAMOS EN EL ARRAY
            for (let i = 0; i < arr.length; i++) {

                const element = arr[i];
                nombres[i] = element.restaurante;
            }

            //COGE LOS NOMBRE UNICOS DEL ARRAY DE NOMBRE
            var unicos = nombres.filter(function (item, index, array) {
                return array.indexOf(item) === index;
            });

            //RECORRE EL ARRAY DE NOMBRE Y LOS AÑADE CON LOS VOTOS
            for (let i = 0; i < unicos.length; i++) {
                const element = unicos[i];

                var json = {
                    "restaurante": element,
                    "numeros": 1
                }

                votos[i] = json;

            }

            var recuento = [];
            //CUENTA LOS VOTOS
            var contador = 0;
            for (let i = 0; i < unicos.length; i++) {

                for (let x = 0; x < nombres.length; x++) {

                    if (unicos[i] == nombres[x]) {
                        contador++;
                        // console.log(contador);
                    }

                }

                recuento[i] = contador;
                contador = 0;

            }

            for (let i = 0; i < votos.length; i++) {


                votos[i].numeros = recuento[i];

            }

            //MUESTRA EL ARRAY DE JSON CON LOS VOTOS SIN LOS BANEADOS
            votos.forEach(element => {
                $("#noban").append("<p> Restaurante: " + element.restaurante + " = " + element.numeros + " VOTOS");
            });



        });
}


//lista de votos baneados
function peticionVotosCONBAN() {

    $.get("https://apuntesfpinformatica.es/DWEC/EjemploUD9-3-1Baneados.php",
        function (data) {
            var baneados = JSON.parse(data);
            var nombres = [];

            //buscamos a los usuarios baneados en la primera lista y los eliminamos
            for (let i = 0; i < baneados.length; i++) {


                for (let x = 0; x < arr.length; x++) {

                    if (arr[x].usuario == baneados[i]) {
                        arr.splice(x, 1);
                    }
                }


            }
            
            for (let i = 0; i < arr.length; i++) {

                const element = arr[i];
                nombres[i] = element.restaurante;
            }


            var unicos = nombres.filter(function (item, index, array) {
                return array.indexOf(item) === index;
            });


            for (let i = 0; i < unicos.length; i++) {
                const element = unicos[i];

                var json = {
                    "restaurante": element,
                    "numeros": 1
                }

                votos[i] = json;

            }

            var recuento = [];

            var contador = 0;
            for (let i = 0; i < unicos.length; i++) {

                for (let x = 0; x < nombres.length; x++) {

                    if (unicos[i] == nombres[x]) {
                        contador++;
                        // console.log(contador);
                    }

                }

                recuento[i] = contador;
                contador = 0;

            }

            for (let i = 0; i < votos.length; i++) {


                votos[i].numeros = recuento[i];

            }

            //MUESTRA EL ARRAY JSON CON LOS USUARIOS YA BANEADOS
            votos.forEach(element => {
                //si no tiene ningún voto no aparecerá
                if (!isNaN(element.numeros)) $("#ban").append("<p> Restaurante: " + element.restaurante + " = " + element.numeros + " VOTOS");

            });
        }
    );

}



