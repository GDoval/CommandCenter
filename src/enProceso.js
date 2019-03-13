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
  }
  render() {
    return (
      <div className="col-sm-3">
        <img src={this.props.ruta} height="250" width="250" key="a"></img>
        <a href="#" key="b">{this.props.name}</a>
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

/*************************
  Funciones
 *************************/


// Probamos traer desde la base de datos directamente (sin hardcodear) Testeado OK

function traerDesdeDB() {
  $.ajax({
    type: 'POST',
    url: "./scripts/index.php/traerDesdeDB",
    success: function(resp){
      let json = JSON.parse(resp);
      console.log(json);
    },
    async: false
  })

    .fail(function () {
      console.log("I have failed you :( ");
    });
}




/* Funcion principal que se ocupa de renderizar todos los row con sus respectivas imagenes. Se genera un array de ROWs, ya cargados con sus imagenes 
y se renderizan. La llamada a la funcion se hace desde el component *GenerarContainer* . Todavia en development en la seccion pruebas*/
function cargarTresImagenes() {
}


/******************************
  Pruebas
 ******************************/

/*  Se generan los rows a partir de si el tamaño del array es divisible por 3. La idea es generar un ROW extra en caso de que no lo sea. Testeado con 7 imagenes
y funciono */
function generoRows() {
  retornoDB(function (data) {
      let json = JSON.parse(data);
      if(json.length % 3 == 0)
      {
          restoEsCero(json);
      }else
      {
          restoNoEsCero(json);
      }
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



/*AJAX que trae las imagenes y sus nombres hardcodeados. Recibe un callback para procesar la respuesta del AJAX, evitando lo asincrono. */

function retornoDB(callback) {
  $.ajax({
    type: 'POST',
    url: "./scripts/index.php/retornodb",
    success: callback,
    async: true
  })

    .fail(function () {
      console.log("I have failed you :( ");
    });
}



 /*  Funcion que se dispara al cargarse el listado. Hace la llmada al container, desde donde se generan los row y se cargan las imagenes  */
 function renderizarOnReady() {
  const domContainer = document.querySelector('#root');
  ReactDOM.render(<GenerarContainer />, domContainer);
}

/*************************
  Ready!
 *************************/
 /* Se carga la funcion princiapl dentro del html cuando se termina de cargar. Al hacerse click se dispara la funcion */ 
$(document).ready(function () {
  $('#proceso_link').click(renderizarOnReady);
});