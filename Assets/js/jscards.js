$(document).ready(function () {


    $('#modal_btn1').click(function () {
        $('#modal_header').text('Events');
        $('#scheduler_container').empty();
        weatherRender();
    });

    $('#map_btn').click(function () {
        $('#modal_header').text('Locations');
        $('#scheduler_container').empty();
        $('#scheduler_container').append($('<div>').attr('id', 'map'));
        initMap();
        //initializeScheduler();
    });

    $('#coronavirus').click(function () {
        $('#modal_header').text('More Things');
        $('#scheduler_container').empty();
        coronaVirus();

    });

    setInterval(function () {
        var a = moment().toString();
        $('#clock').text(a)
    }, 1000);

    
});

