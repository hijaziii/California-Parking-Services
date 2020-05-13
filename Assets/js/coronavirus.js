




function coronaVirus() {
var tempContainer = $("#scheduler_container")
    $.ajax({
        url: "https://covidtracking.com/api/v1/states/daily.json",
        method: 'get',
        success: function (response) {
            // JSON format => Javascript Object Notation
            console.log(response[5]);
            var cali = response[5];


           tempContainer.html('<h1>' + cali.state + ' </h1>');
           tempContainer.append(' <i class="material-icons">menu</i>');
           tempContainer.append('<p>Confirmed: ' + cali.positive + ' </p>');
           tempContainer.append('<p>Death: ' + cali.death + ' </p>');
           tempContainer.append('<p>Recovered: ' + cali.recovered + ' </p>');
           
            
        },

    });
   
}