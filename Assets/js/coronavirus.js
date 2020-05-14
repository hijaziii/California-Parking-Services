function coronaVirus() {
var tempContainer = $("#scheduler_container")
    $.ajax({
        url: "https://covidtracking.com/api/v1/states/daily.json",
        method: 'get',
        success: function (response) {
            // JSON format => Javascript Object Notation
            console.log(response[5]);
            var cali = response[5];
           
           
            $('#modal_header').text('' + cali.state +  ' Covid-19 Details');
        //    tempContainer.html('<h1>' + cali.state + ' </h1>');
            tempContainer.append(' <div class="card-panel blue  center"></div>');
           tempContainer.append(' <i class="material-icons large amber-text">person</i>');
           tempContainer.append('<h5>Confirmed cases: ' + cali.positive + ' </h5>');
           tempContainer.append(' <i class="material-icons large amber-text"> timeline</i>');
           tempContainer.append('<h5>Deaths: ' + cali.death + ' </h5>');
           tempContainer.append(' <i class="material-icons large amber-text">person_add</i>');
           tempContainer.append('<h5>Today\'s Cases: ' + cali.positiveIncrease + ' </h5>');
           tempContainer.append(' <i class="material-icons large amber-text">loop</i>');
           tempContainer.append('<h5>Last Update: ' + cali.lastUpdateEt + ' </h5>');
           tempContainer.append(' <div class="card-panel amber  center"></div>');


        },
    });
}