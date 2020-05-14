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
            // var divCity = $("<div>").addClass("city");
            // var divWind = $("<div>").addClass("wind");
            // var divHimidity = $("<div>").addClass("humidity");

            // divCity.append("<h5>" + response.name + " Weather Details</h5>");
            // $('#modal_header').text('' + response.name + "-"+ 'Weather Details');
            // divWind.append("Wind Speed: " + response.wind.speed);
            // divHimidity.append("Humidity: " + response.main.humidity);

            // tempContainer.append(divCity) ;
            // tempContainer.append(' <i class="material-icons large amber-text">speed</i>');
            // tempContainer.append(divWind);
            // tempContainer.append(' <i class="material-icons large amber-text">whatshot</i>');
            // tempContainer.append(divHimidity);

            // Convert the temp to fahrenheit
            var tempF = (response.main.temp - 273.15) * 1.80 + 32;
            // var divTemp = $("<div>").addClass("temp");
            // var divTempF= $("<div>").addClass("tempF");

            // add temp content to html
        //    divTemp.append("Temperature (K) " + response.main.temp);
        //     divTempF.append("Temperature (F) " + tempF.toFixed(2));
        //     tempContainer.append(' <i class="material-icons large amber-text">wb_incandescent</i>');
        //     tempContainer.append( divTemp);
        //     tempContainer.append(' <i class="material-icons large amber-text">wb_incandescent</i>');
        //     tempContainer.append(divTempF);


                $('#modal_header').text('' + response.name + "-"+ 'Weather Details');
            //    tempContainer.html('<h1>' + cali.state + ' </h1>');
                tempContainer.append(' <div class="card-panel blue  center"></div>');
                tempContainer.append(' <i class="material-icons medium amber-text">speed</i>');
                tempContainer.append('<h5>Wind Speed:'  + response.wind.speed +  '</h5>');
                tempContainer.append(' <i class="material-icons medium amber-text">whatshot</i>');
                tempContainer.append('<h5>Humidity: ' + response.main.humidity + ' </h5>');
                tempContainer.append(' <i class="material-icons medium amber-text">wb_incandescent</i>');
                tempContainer.append('<h5>Temperature (F) ' + tempF.toFixed(2) + ' </h5>');
                // tempContainer.append(' <i class="material-icons medium amber-text">wb_incandescent</i>');
            //    tempContainer.append('<h5>Temperature (K) ' + response.main.temp + ' </h5>');
                tempContainer.append(' <div class="card-panel amber  center"></div>');
            
              
    
    
            },
        });
    }



     