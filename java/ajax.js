$(document).ready(function () {
    $('#btnEnviar').on("click", probarArray);
});

var afueraFuncion = void 0;

function retornoDB(callback) {
    $.ajax({
        type: 'GET',
        url: "./scripts/index.php/retornodb",
        success: callback,
        async: true
    }).fail(function () {
        console.log("I have failed you :( ");
    });
}

function afuera() {
    retornoDB(function (data) {
        var asd = JSON.parse(data);
    });
}

function probarArray() {
    retornoArray(function (data) {
        var asd = JSON.parse(data);
        for (var key in asd) {
            if (asd.hasOwnProperty(key)) {
                console.log(asd[key].apellido + " --- " + asd[key].nombre);
            }
        }
    });
}

function retornoArray(callback) {
    $.ajax({
        type: 'POST',
        url: "./scripts/index.php/arrays",
        success: callback,
        async: true
    }).fail(function () {
        console.log("I have failed you :( ");
    });
}