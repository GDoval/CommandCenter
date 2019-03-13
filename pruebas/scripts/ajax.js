$(document).ready(function () {
    $('#btnEnviar').on("click", saludar)
});


function saludar() {

    let usuario = $('#usuario').val();
    let data = new FormData();

    data.append("usuario", usuario);

    $.ajax({
        type: 'GET',
        url: "./php/conexion.php?nombre=" + usuario,
        success: function (resp) {
            console.log(resp);
        },
        async: true
    })

        .fail(function () {
            console.log("I have failed you :( ");
        });
}




