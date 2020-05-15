function weatherRender() {
    var tempContainer = $("#scheduler_container")
    // This is our API key
    var APIKey = "3d9efbfbf46372a4ff1a6d074b5ed18c";

    // Here we are building the URL we need to query the database

    $.ajax({
        url: "https://api.openweathermap.org/data/2.5/weather?" +
            "lat=34.0522&lon=-118.2437&appid=" + APIKey,
        method: 'get',
        success: function (response) {
            // JSON format => Javascript Object Notation
            console.log(response);
            // Convert the temp to fahrenheit
            var tempF = (response.main.temp - 273.15) * 1.80 + 32;
                $('#modal_header').text('' + response.name + "-"+ 'Weather Details');
                tempContainer.append(' <div class="card-panel blue  center"></div>');
                tempContainer.append(' <i class="material-icons medium amber-text">speed</i>');
                tempContainer.append('<h5>Wind Speed:'  + response.wind.speed +  '</h5>');
                tempContainer.append(' <i class="material-icons medium amber-text">whatshot</i>');
                tempContainer.append('<h5>Humidity: ' + response.main.humidity + ' </h5>');
                tempContainer.append(' <i class="material-icons medium amber-text">wb_incandescent</i>');
                tempContainer.append('<h5>Temperature (F) ' + tempF.toFixed(2) + ' </h5>');
                tempContainer.append(' <div class="card-panel amber  center"></div>');
            
              
    
    
            },
        });
    }



     