
var arr = {};
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
            var votos = [];


            var nombres = [];

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
                    
                    if(unicos[i] == nombres[x]){
                        contador++;
                       // console.log(contador);
                    }
                    
                }

                recuento[i] = contador;
                contador = 0 ; 

            }
            
            for (let i = 0; i < votos.length; i++) {
                
               
                votos[i].numeros = recuento[i];
            
            }

          
            votos.forEach(element => {
                $("#noban").append("<p> Restaurante: "+ element.restaurante + " = "+element.numeros+" VOTOS");
            });



        });
}


//lista de votos baneados
function peticionVotosCONBAN(){

    $.get("https://apuntesfpinformatica.es/DWEC/EjemploUD9-3-1Baneados.php", 
        function (data) {
            var baneados = JSON.parse(data);
            console.log(baneados);
        }
    );

}



