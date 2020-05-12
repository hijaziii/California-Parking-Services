
$("#coronavirus").click(function(){
setInterval(function() {
    $(document).ready(function() {
      $.ajax({
        url: 'https://api.covid19api.com/live/country/united-states/status/confirmed',
        method: 'get',
        success: function(response) {
          // JSON format => Javascript Object Notation
          console.log(response[38]);
          var cali = response [38]; 
          
    
         var currentDate = new Date().getHours();
          console.log(currentDate);
          if (currentDate === 24){
            localStorage.setItem("generalCases", cali.Active);
          }
          var todaysCases = cali.Active - localStorage.getItem("generalCases");
          console.log(todaysCases);
          $('#coronavirus').html('<h1>' + cali.Province + ' </h1>');
          $('#coronavirus').append('<p>Confirmed: ' + cali.Confirmed + ' </p>');
          $('#coronavirus').append('<p>Active: ' + cali.Active + ' </p>');
          $('#coronavirus').append('<p>Recovered: ' + cali.Recovered + ' </p>');
          $('#coronavirus').append('<p>Deaths: ' + cali.Deaths + ' </p>');
          $('#coronavirus').append('<p>Today: ' +  todaysCases + ' </p>');
        },
        
      });
     
      });
    
    }, 1000)
});