$(document).ready(function () {
    $('#btnEnviar').on("click", saludar);
});

function saludar() {

    var usuario = $('#usuario').val();
    var data = new FormData();

    data.append("usuario", usuario);

    $.ajax({
        type: 'GET',
        url: "./php/conexion.php?nombre=" + usuario,
        success: function success(resp) {
            console.log(resp);
        },
        async: true
    }).fail(function () {
        console.log("I have failed you :( ");
    });
}