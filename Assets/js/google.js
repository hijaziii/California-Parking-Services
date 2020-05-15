

function initMap() {
    var options = {
      zoom: 8,
      center: {lat: 34.0522, lng:-118.2437},
    }
  //   New Map
      var map = new
      google.maps.Map(document.getElementById('map'),options); 

      // Add Marker
      var marker = new google.maps.Marker({
          position : {lat: 34.0197, lng:-117.9587},
          map:map
      });

      var infoWindow = new google.maps.Infowindow({
          content: '<h1>California<h1>'
      });

        marker.addListener('click', function(){
          infoWindow.open(map, marker);
      });
    
    }