
$(document).ready(function () {
    
    amigoInvisible();

});


function amigoInvisible(){

    $.get("https://apuntesfpinformatica.es/DWEC/EjemploUD9-3-2Amigos.php",
        function (data) {
            var array = JSON.parse(data);
            //console.log(array);

            for(let i = 0; i < array.length; i++){                
                array[i].dineroTotal = 0; // con el punto + nombre = valor añade un nuevo atributo al object
            }

            for (let i = 0; i < array.length; i++) {

               
                let dineroDar = array[i].euros;
                let longitud = array[i].arrayReparto.length;
                let dineroRepartir = 0;

                if(longitud < 1){
                     dineroRepartir = 0;
                }else{
                    let arrayDar = array[i].arrayReparto;

                   dineroRepartir = dineroDar / longitud;  

                    if(dineroDar % longitud != 0 ){
                        let resto = dineroDar % longitud ;
                        array[i].dineroTotal += resto;
                    }

                    

                    arrayDar.forEach(element => {
                        //console.log(element);

                        for (let z = 0; z < array.length; z++) {
                            
                            if(array[z].nombre == element ){
                             array[z].dineroTotal += dineroRepartir;
                            }
                            
                        }

                    });


                }
            }

            array.forEach( element => {
                $("#resumen").append("<p>"+element.nombre+" : "+Math.floor(element.dineroTotal)+" EUR</p>");
            });

           

            
        }
    );

}