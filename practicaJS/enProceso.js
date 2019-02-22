'use strict';

require('./clasesReact');

$(document).ready(function () {

    function cargaImagen() {
        var domContainer = document.querySelector('#en_proceso');
        ReactDOM.render(React.createElement(Probando, null), domContainer);
    }
    $('#proceso_link').click(cargaImagen);
});