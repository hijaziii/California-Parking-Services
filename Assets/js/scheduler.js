
//alert('ready');

function myFunction() {
    console.log('Executed!');
}
var interval = setInterval(function () { myFunction(); }, 60000);

var stored_dates = localStorage.getItem("dates");

if (stored_dates) {
    //localStorage.setItem("dates", JSON.stringify(dates));
    console.log("dates: " + stored_dates);
    var dates = JSON.parse(stored_dates)

} else {
    dates = [{
        "date": "2020-05-01-12",
        "data": "Pick up dry cleaning"
    }]
    localStorage.setItem("dates", JSON.stringify(dates));
}

var a = moment().toString();
var c = moment().format("LLLL");
// $("#title_section").text('HELLO ' + c);

var hours = {
    start: 7,   // 7am
    end: 21,    // 9pm
    window: 2   // How long each item should be slotted for.
};
var rightNow = moment().add(0, 'days').hours(hours.start).minute(0).second(0);

var a = moment().add(0, 'days').hours(hours.start).minute(0).second(0);
var b = moment(a).subtract(12, 'hours');

//initializeScheduler();

function initializeScheduler() {
    console.log('initializeScheduler');

    $("#scheduler_container").empty();
    diplayTimeblocks();
}

function editTimeblock() {
    var id = $(this).attr("data-name");
    console.log('editTimeblock' + id);
}

function saveTimeblock() {
    var id = $(this).attr("data-name");
    console.log('saveTimeblock' + id);

    var textEntry = $('#' + id).val();

    console.log('textarea val: ' + textEntry);
    console.log('saveTimeblock' + id);

    entry = {
        "date": id,
        "data": textEntry
    }

    if (dates.some(d => d.date === id)) {
        //alert("Object found inside the array.");
        var obj = dates.find(o => o.date === id);
        obj.data = textEntry;
    } else {
        dates.push(entry);
    }
    localStorage.setItem("dates", JSON.stringify(dates));
    initializeScheduler();
}

function diplayTimeblocks() {
    // If you want an inclusive end date (fully-closed interval)
    for (var m = moment(a); m.diff(b, 'days') <= 0; m.add(1, 'hours')) {
        console.log(m.format('YYYY-MM-DD'));
        diplayTimeblockRow(m)
    }
}

function diplayTimeblockRow(m) {
    id = m.format('YYYY-MM-DD-HH');
    // Creating a div to hold the movie
    var rowDiv = $("<div class='row grey lighten-4'>");
    var col1Div = $("<div class='col m1'>");
    
    
    var rowH = $("<h6>");
    rowH.text(m.format('h a'))
    col1Div.append(rowH);
    
    //col1Div.text(m.format('h a'));
    
    
    var col2Div = $("<div class='col m10 timeblock-btn'>");
    // Adding a data-attribute
    col2Div.attr("data-name", id);

    if (m > moment()) {
        col2Div.addClass("bg-success");
    }
    else if (m < moment().subtract({ 'hours': 1, 'minutes': 0 })) {
        col2Div.addClass("bg-light");
    } else {
        col2Div.addClass("bg-danger");
    }
    //col2Div.text("Released: " + id);

    // Then dynamicaly generating buttons for each movie in the array
    // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
    
    
    var inpDivElem = $("<div>");
    inpDivElem.addClass('input-field');

    var a = $("<textarea>");
    a.addClass('materialize-textarea')
    // Adding a id
    a.attr("id", id);
    // Adding a data-attribute
    a.attr("data-name", id);

    if (dates.some(d => d.date === id)) {
        //alert("Object found inside the array.");
        var obj = dates.find(o => o.date === id);
        a.text(obj['data'])
    }

    // Adding the button to the buttons-view div
    inpDivElem.append(a);
    col2Div.append(inpDivElem);

    var col3Div = $("<div class='col-md-1'>");

    // Then dynamicaly generating buttons for each movie in the array
    // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
    var a = $("<button>");
    // Adding a class of movie-btn to our button
    a.addClass("save-btn waves-effect waves-light btn orange");
    // Adding a data-attribute
    a.attr("data-name", id);
    // Providing the initial button text
    a.text("Save");
    // Adding the button to the buttons-view div
    col3Div.append(a);


    rowDiv.append(col1Div);
    rowDiv.append(col2Div);
    rowDiv.append(col3Div);



    $('#scheduler_container').append(rowDiv);
    //$('#main_container').append('<hr>');

    // // Creating an element to have the rating displayed
    // var pOne = $("<div>").text("Rating: " + rating);

    // // Displaying the rating
    // movieDiv.append(pOne);

    // // Storing the release year
    // var released = response.Released;

    // // Creating an element to hold the release year
    // var pTwo = $("<p>").text("Released: " + released);

    // // Displaying the release year
    // movieDiv.append(pTwo);
}

// Adding a click event listener to all elements with a class of "movie-btn"
$(document).on("click", ".save-btn", saveTimeblock);

// Adding a click event listener to all elements with a class of "movie-btn"
$(document).on("click", ".timeblock-btn", editTimeblock);

    // Adding a click event listener to all elements with a class of "movie-btn"
    //$(document).on("click", ".movie-btn", saveTimeblock);



