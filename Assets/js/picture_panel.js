function picFuc() {
    var rowsElem = $('<div>');
    for (var i = 0; i < 1; i++) {
        console.log(i);

        rowsElem.append(pcreateRows());
        //createRows();
    }
    return rowsElem;
}

function pcreateRows() {
    var rowElem = $('<div>');
    rowElem.append(pcreateColumns());
    //$('.container').append(rowElem);
    return rowElem
}

function pcreateColumns() {
    var output = $('<div>');
    output.addClass('row grey lighten-4');
    for (var i = 0; i < 3; i++) {

        var colElem = $('<div>');
        colElem.addClass('col m4');

        //btnElem.text('Button')


        //colElem.append(pgsElem);
        colElem.append(pstuffFuc(i));
        //$('.container').append(rowElem);
        output.append(colElem);

    }
    return output;
}

function pstuffFuc(num) {
    var btnElem = $('<div>');
    btnElem.addClass('card');
    
    var btnElem2 = $('<div>');
    btnElem2.addClass('card-image');
    
    var btnElem3 = $('<img>');
    num++;
    btnElem3.attr('src', 'img/resort' + num + '.jpg');
    
    btnElem2.append(btnElem3);
    
    btnElem.append(btnElem2);

    var btnElem4 = $('<div>');
    btnElem4.addClass('card-content');
    
    btnElem.append(btnElem4);

    return btnElem
}
