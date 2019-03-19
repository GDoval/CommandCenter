$(document).ready(function () {
    $('#btnEnviar').on("click", saludar);
});

function saludar() {

    var foto = $('#foto')[0].files[0];
    var data = new FormData();
    data.append("foto", foto);
    data.append("nombre", $('#foto')[0].files[0].name);
    console.log(foto);
    $.ajax({
        type: 'POST',
        url: "./php/conexion.php",
        data: data,
        contentType: false,
        processData: false,
        success: function success(resp) {
            console.log(resp);
        },
        async: true
    }).fail(function () {
        console.log("I have failed you :( ");
    });
}