/*
Archivo unico para manejar el React de la página.

*/

/*************************
  Clases
 *************************/


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



class GenerarContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = '';
  }
  render() {
    return (
      <div className="container" id="containerMain">
        {test()}
      </div>
    );
  }
}


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

function renderizarOnReady() {
  const domContainer = document.querySelector('#root');
  ReactDOM.render(<GenerarContainer />, domContainer);
}



/*AJAX que trae las imagenes y sus nombres de la DB */

function retornoDB(callback) {
  $.ajax({
    type: 'POST',
    url: "./scripts/index.php/test",
    success: callback,
    async: true
  })

    .fail(function () {
      console.log("I have failed you :( ");
    });
}



function cargarTresImagenes() {
  retornoDB(function (data) {
    let json = JSON.parse(data);
    let array = [];
    let arrayRows = [];
    let cont = 0;
    let sumame = 1;
    let IDRow = 'id';
    let selectRow = '';
    const domContainer = document.querySelector('#containerMain');
    for (var key in json) {
      if (json.hasOwnProperty(key)) {
        array.push(<CargarImagen ruta={json[key].ruta} name={json[key].nombre} />);
        cont++;
      }
      if (cont == 3) {
        cont = 0;
        IDRow = IDRow + sumame;
        ReactDOM.render(<GenerarRow ID={IDRow} />, domContainer);
        selectRow = document.querySelector('#' + IDRow);
        ReactDOM.render(array, selectRow);
        array = [];
        sumame++;
      }
    }
    //ReactDOM.render(array, domContainer);
  });
}


/******************************
  Pruebas
 ******************************/

//Funciona, pero hay que afinarla para un retorno dinamico desde la base de datos (ahora esta hardcodeado en 6 imagenes)
function test() {
  retornoDB(function (data) {
    let json = JSON.parse(data);
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
    //ReactDOM.render(array, domContainer);
  });
}



// Probamos traer desde la base de datos directamente (sin hardcodear)

function prueba_traerDesdeDB() {
  $.ajax({
    type: 'POST',
    url: "./scripts/index.php/test",
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




/*************************
  Ready!
 *************************/
$(document).ready(function () {
  $('#proceso_link').click(renderizarOnReady);
});