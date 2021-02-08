

$(document).ready(function () {
    $.get("https://codeforces.com/api/contest.list?gym=true",
        function (data) {

            var array = data.result;

            array.forEach(element => {

                if (element.hasOwnProperty("season")) {

                    if (element.season > "2012-2013") {

                        if (element.hasOwnProperty("startTimeSeconds")) {

                            var segundos = element.startTimeSeconds;

                            var fecha = new Date(segundos * 1000);

                            if (fecha.getMonth() == 4) {

                                $("#concursos").append("<li>  " + element.name + "</li>");

                            }

                        }
                    }

                }

            });

        }
    );
});