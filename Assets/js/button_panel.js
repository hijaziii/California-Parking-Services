function forFuc() {
    var rowsElem = $('<div>');
    for (var i = 0; i < 5; i++) {
        console.log(i);

        rowsElem.append(createRows());
        //createRows();
    }
    return rowsElem;
}

function createRows() {
    var rowElem = $('<div>');
    rowElem.append(createColumns());
    //$('.container').append(rowElem);
    return rowElem
}

function createColumns() {
    var output = $('<div>');
    output.addClass('row');
    for (var i = 0; i < 2; i++) {
        
        var colElema = $('<div>');
        colElema.addClass('col m3');

        var pgsElem = $('<div>').addClass('progress');
        var indElem = $('<div>').addClass('indeterminate');
        pgsElem.append(indElem);       
        colElema.append(pgsElem);
        
        output.append(colElema);

        var colElem = $('<div>');
        colElem.addClass('col m3');

        //btnElem.text('Button')


        //colElem.append(pgsElem);
        colElem.append(stuffFuc(i));
        //$('.container').append(rowElem);
        output.append(colElem);

    }
    return output;
}

function stuffFuc(num) {
    var btnElem = $('<a>');
    btnElem.addClass('waves-effect waves-light btn orange btn-large')
    btnElem.attr('href', '#modal2');
    //<i class="material-icons left">cloud</i>
    var bIcn = $('<i>').text('filter_' + num);
    bIcn.addClass('material-icons left')
    btnElem.text('Button')
    btnElem.append(bIcn);
    return btnElem
}