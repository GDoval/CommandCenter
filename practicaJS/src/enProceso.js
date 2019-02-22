'use strict';
require('./clasesReact');


$(document).ready(function () {


  function cargaImagen() {
      const domContainer = document.querySelector('#en_proceso');
      ReactDOM.render(<Probando />, domContainer);
  }
  $('#proceso_link').click(cargaImagen);
});