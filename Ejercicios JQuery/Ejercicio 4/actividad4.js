

$(document).ready(function () {
    $.get("https://codeforces.com/api/contest.list?gym=true",
        function (data) {
            
            console.log(data);
        }
    );
});