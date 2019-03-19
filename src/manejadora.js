/*
Archivo unico para manejar el React de la página.

*/

/*************************
  Clases para React
 *************************/

/*  Genera un div conteniendo una imagen y un anchor. Probar usando React.Fragment para evitar usar un div */

class CargarImagen extends React.Component {
  constructor(props) {
    super(props);
    this.state = '';
    this.handler = this.handler.bind(this);
  }
  handler()
  {
    alerta(this.props.name);
  }
  render() {
    return (
      <div className="col-sm-3">
        <img src={this.props.ruta} height="250" width="250" key="a"></img>
        <a href="#" key="b" onClick={this.handler} >{this.props.name}</a>
      </div>
    );
  }
}


/* Genera un div clase container. Se appendea sobre el div root del html, y adentro se generan los ROW de React  */
class GenerarContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = '';
  }
  render() {
    return (
      <div className="container" id="containerMain">
        {generoRows()}
      </div>
    );
  }
}

/* Genera un  div clase row para guardar 3 imagenes (creadas desde el component CargarImagen. El ID del Row se pasa por props para 
  poder diferenciar los distintos rows dentro del container*/
class GenerarRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = '';
  }
  render() {
    return (
      <div className="row" id={this.props.ID}>
      </div>
    );
  }

}

class GenerarFormAlta extends React.Component {
  constructor(props) {
    super(props);
    this.state = '';
  }

  render() {
    return (
      <div className="container" id="divFormualrio">
        <input type="text" id="nombre" placeholder="Nombre Anime"></input>
        <input type="file" id="imagen" placeholder="Imagen"></input>
        <button type="button" id="btnEnviar" onClick={this.props.guardar}>Guardar</button>
      </div>
    );
  }
}

/*************************
  Funciones
 *************************/


// Probamos traer desde la base de datos directamente (sin hardcodear) Testeado OK y en producción

function traerDesdeDB(callback) {
  $.ajax({
    type: 'POST',
    url: "./scripts/index.php/traerDesdeDB",
    success: callback,
    async: true
  })

    .fail(function () {
      console.log("I have failed you :( ");
    });
}



/* Funcion principal que se ocupa de renderizar todos los row con sus respectivas imagenes. Se genera un array de ROWs, ya cargados con sus imagenes 
y se renderizan. La llamada a la funcion se hace desde el component *GenerarContainer* . Testeada OK y en ya en producción
Se generan los rows a partir de si el tamaño del array es divisible por 3. La idea es generar un ROW extra en caso de que no lo sea. Testeado con 7 imagenes
y funciono */
function generoRows() {
  traerDesdeDB(function (data) {
    let json = JSON.parse(data);
    if (json.length % 3 == 0) {
      restoEsCero(json);
    } else {
      restoNoEsCero(json);
    }
  });
}

/* Recupera data del formulio y lo guarda en la DB. Testeado OK */
function guardar() {
  let imagen = $('#imagen')[0].files[0];
  let nombre = $('#nombre').val();
  let data = new FormData();
  data.append("imagen", imagen);
  data.append("nombre", nombre);
  data.append("nombreImg", imagen.name);
  $.ajax({
    type: 'POST',
    url: "./scripts/index.php/guardarEnDB",
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




/*  Genera ROWS multiplos de 3 */
function restoEsCero(json) {
  let arrayImagenes = [];
  let arrayRows = [];
  let arrayNombresRow = [];
  let cont = 0;
  let sumame = 1;
  let selectRow = '';
  let indiceRows = 0;
  const domContainer = document.querySelector('#containerMain');
  for (var key in json) {
    cont++;
    if (cont == 3) {
      cont = 0;
      let IDRow = 'id' + sumame;
      arrayRows.push(<GenerarRow ID={IDRow} />);
      arrayNombresRow.push(IDRow);
      sumame++;
    }

  }
  ReactDOM.render(arrayRows, domContainer);
  cont = 0;
  for (var key in json) {
    if (json.hasOwnProperty(key)) {
      arrayImagenes.push(<CargarImagen ruta={json[key].ruta} name={json[key].nombre} alerta = {alerta}/>);
      cont++;
    }
    if (cont == 3) {
      cont = 0;
      selectRow = document.querySelector('#' + arrayNombresRow[indiceRows]);
      ReactDOM.render(arrayImagenes, selectRow);
      indiceRows++;
      arrayImagenes = [];
    }
  }
}

/*  Genera ROWS multiplos de 3 y le agrega uno extra para las imagenes que quedaron afuera */
function restoNoEsCero(json) {
  let arrayImagenes = [];
  let arrayRows = [];
  let arrayNombresRow = [];
  let cont = 0;
  let sumame = 1;
  let selectRow = '';
  let indiceRows = 0;
  const domContainer = document.querySelector('#containerMain');

  /* Parte 1 */
  for (var key in json) {
    cont++;
    if (cont == 3) {
      cont = 0;
      let IDRow = 'id' + sumame;
      arrayRows.push(<GenerarRow ID={IDRow} />);
      arrayNombresRow.push(IDRow);
      sumame++;
    }
  }
  let IDRow = 'id' + sumame;
  arrayRows.push(<GenerarRow ID={IDRow} />);
  arrayNombresRow.push(IDRow);


  ReactDOM.render(arrayRows, domContainer);
  cont = 0;

  /* Parte 2 */
  for (var key in json) {
    if (json.hasOwnProperty(key)) {
      arrayImagenes.push(<CargarImagen ruta={json[key].ruta} name={json[key].nombre} />);
      cont++;
    }
    if (cont == 3) {
      cont = 0;
      selectRow = document.querySelector('#' + arrayNombresRow[indiceRows]);
      ReactDOM.render(arrayImagenes, selectRow);
      indiceRows++;
      arrayImagenes = [];
    }
  }

  selectRow = document.querySelector('#' + arrayNombresRow[indiceRows]);
  ReactDOM.render(arrayImagenes, selectRow);
}

/*********************************************************
 Handlers para los eventos
 *********************************************************/


/*  Funcion que se dispara al cargarse el listado. Hace la llmada al container, desde donde se generan los row y se cargan las imagenes  */
function renderizarListado() {
  const domContainer = document.querySelector('#root');
  const domForm = document.querySelector('#divFormualrio');
  if (domForm != null) {
    ReactDOM.unmountComponentAtNode(domForm);
  }
  ReactDOM.render(<GenerarContainer />, domContainer);
}


/* Renderiza el formulario con el cual cargar imagenes y nombres para los animes */
function renderizarForm() {
  const domContainer = document.querySelector('#root');
  const domListado = document.querySelector('#containerMain');
  if (domListado != null) {
    ReactDOM.unmountComponentAtNode(domListado);
  }
  ReactDOM.render(<GenerarFormAlta guardar={guardar} />, domContainer);
}

/*************************
  Ready!
 *************************/
/* Se asocian los handlers a los eventos de los botones del menú. Los botones o anchors que se generan usando React reciben sus handlers a traves de props*/
$(document).ready(function () {
  $('#proceso_link').click(renderizarListado);
  $('#agregar_anime').click(renderizarForm);
});