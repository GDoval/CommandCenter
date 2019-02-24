/*
Archivo unico para manejar el React de la página.

*/




/*************************
  Clases
 *************************/


class CuatroImagenes extends React.Component {
  constructor(props) {
    super(props);
    this.state = '';
  }

  render() {
    return (
      <div class="container">
        <div class="row">
          <div class="col-sm-3">
            <img
              src="https://vignette.wikia.nocookie.net/kaguyasama-wa-kokurasetai/images/7/7c/ChikaFujiwara-02.png/revision/latest/scale-to-width-down/258?cb=20171223124642"></img>
            <a href="#">Chika Fujiwara</a>
          </div>
          <div class="col-sm-3">
            <img
              src="https://vignette.wikia.nocookie.net/kaguyasama-wa-kokurasetai/images/7/7c/ChikaFujiwara-02.png/revision/latest/scale-to-width-down/258?cb=20171223124642"></img>
            <a href="#">Chika Fujiwara</a>
          </div>
          <div class="col-sm-3">
            <img
              src="https://vignette.wikia.nocookie.net/kaguyasama-wa-kokurasetai/images/7/7c/ChikaFujiwara-02.png/revision/latest/scale-to-width-down/258?cb=20171223124642"></img>
            <a href="#">Chika Fujiwara</a>
          </div>
          <div class="col-sm-3">
            <img
              src="https://vignette.wikia.nocookie.net/kaguyasama-wa-kokurasetai/images/7/7c/ChikaFujiwara-02.png/revision/latest/scale-to-width-down/258?cb=20171223124642"></img>
            <a href="#">Chika Fujiwara</a>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-3">
            <img
              src="https://vignette.wikia.nocookie.net/kaguyasama-wa-kokurasetai/images/7/7c/ChikaFujiwara-02.png/revision/latest/scale-to-width-down/258?cb=20171223124642"></img>
            <a href="#">Chika Fujiwara</a>
          </div>
          <div class="col-sm-3">
            <img
              src="https://vignette.wikia.nocookie.net/kaguyasama-wa-kokurasetai/images/7/7c/ChikaFujiwara-02.png/revision/latest/scale-to-width-down/258?cb=20171223124642"></img>
            <a href="#">Chika Fujiwara</a>
          </div>
          <div class="col-sm-3">
            <img
              src="https://vignette.wikia.nocookie.net/kaguyasama-wa-kokurasetai/images/7/7c/ChikaFujiwara-02.png/revision/latest/scale-to-width-down/258?cb=20171223124642"></img>
            <a href="#">Chika Fujiwara</a>
          </div>
          <div class="col-sm-3">
            <img
              src="https://vignette.wikia.nocookie.net/kaguyasama-wa-kokurasetai/images/7/7c/ChikaFujiwara-02.png/revision/latest/scale-to-width-down/258?cb=20171223124642"></img>
            <a href="#">Chika Fujiwara</a>
          </div>
        </div>
      </div>
    );
  }
}


/*************************
  Funciones
 *************************/

function cargaImagen() {
  const domContainer = document.querySelector('#en_proceso');
  ReactDOM.render(<CuatroImagenes />, domContainer);
}

/*************************
  Ready!
 *************************/
$(document).ready(function () {
  $('#proceso_link').click(cargaImagen);
});