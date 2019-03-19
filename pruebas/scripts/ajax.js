$(document).ready(function () {
    $('#btnEnviar').on("click", saludar)
});


function saludar() {

    let foto = $('#foto')[0].files[0];
    let data = new FormData();
    data.append("foto", foto);
    data.append("nombre", $('#foto')[0].files[0].name   )
    console.log(foto);
    $.ajax({
        type: 'POST',
        url: "./php/conexion.php",
        data: data,
        contentType: false,
        processData: false,
        success: function (resp) {
            console.log(resp);
        },
        async: true
    })

        .fail(function () {
            console.log("I have failed you :( ");
        });
}
