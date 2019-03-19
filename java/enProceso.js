var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*
Archivo unico para manejar el React de la página.

*/

/*************************
  Clases para React
 *************************/

/*  Genera un div conteniendo una imagen y un anchor. Probar usando React.Fragment para evitar usar un div */

var CargarImagen = function (_React$Component) {
  _inherits(CargarImagen, _React$Component);

  function CargarImagen(props) {
    _classCallCheck(this, CargarImagen);

    var _this = _possibleConstructorReturn(this, (CargarImagen.__proto__ || Object.getPrototypeOf(CargarImagen)).call(this, props));

    _this.state = '';
    return _this;
  }

  _createClass(CargarImagen, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { className: "col-sm-3" },
        React.createElement("img", { src: this.props.ruta, height: "250", width: "250", key: "a" }),
        React.createElement(
          "a",
          { href: "#", key: "b" },
          this.props.name
        )
      );
    }
  }]);

  return CargarImagen;
}(React.Component);

/* Genera un div clase container. Se appendea sobre el div root del html, y adentro se generan los ROW de React  */


var GenerarContainer = function (_React$Component2) {
  _inherits(GenerarContainer, _React$Component2);

  function GenerarContainer(props) {
    _classCallCheck(this, GenerarContainer);

    var _this2 = _possibleConstructorReturn(this, (GenerarContainer.__proto__ || Object.getPrototypeOf(GenerarContainer)).call(this, props));

    _this2.state = '';
    return _this2;
  }

  _createClass(GenerarContainer, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { className: "container", id: "containerMain" },
        generoRows()
      );
    }
  }]);

  return GenerarContainer;
}(React.Component);

/* Genera un  div clase row para guardar 3 imagenes (creadas desde el component CargarImagen. El ID del Row se pasa por props para 
  poder diferenciar los distintos rows dentro del container*/


var GenerarRow = function (_React$Component3) {
  _inherits(GenerarRow, _React$Component3);

  function GenerarRow(props) {
    _classCallCheck(this, GenerarRow);

    var _this3 = _possibleConstructorReturn(this, (GenerarRow.__proto__ || Object.getPrototypeOf(GenerarRow)).call(this, props));

    _this3.state = '';
    return _this3;
  }

  _createClass(GenerarRow, [{
    key: "render",
    value: function render() {
      return React.createElement("div", { className: "row", id: this.props.ID });
    }
  }]);

  return GenerarRow;
}(React.Component);

/*************************
  Funciones
 *************************/

// Probamos traer desde la base de datos directamente (sin hardcodear) Testeado OK

function traerDesdeDB() {
  $.ajax({
    type: 'POST',
    url: "./scripts/index.php/traerDesdeDB",
    success: function success(resp) {
      var json = JSON.parse(resp);
      console.log(json);
    },
    async: false
  }).fail(function () {
    console.log("I have failed you :( ");
  });
}

/* Funcion principal que se ocupa de renderizar todos los row con sus respectivas imagenes. Se genera un array de ROWs, ya cargados con sus imagenes 
y se renderizan. La llamada a la funcion se hace desde el component *GenerarContainer* . Todavia en development en la seccion pruebas*/
function cargarTresImagenes() {}

/******************************
  Pruebas
 ******************************/

/*  Se generan los rows a partir de si el tamaño del array es divisible por 3. La idea es generar un ROW extra en caso de que no lo sea. Testeado con 7 imagenes
y funciono */
function generoRows() {
  retornoDB(function (data) {
    var json = JSON.parse(data);
    if (json.length % 3 == 0) {
      restoEsCero(json);
    } else {
      restoNoEsCero(json);
    }
  });
}

/*  Genera ROWS multiplos de 3 */
function restoEsCero(json) {
  var arrayImagenes = [];
  var arrayRows = [];
  var arrayNombresRow = [];
  var cont = 0;
  var sumame = 1;
  var selectRow = '';
  var indiceRows = 0;
  var domContainer = document.querySelector('#containerMain');
  for (var key in json) {
    cont++;
    if (cont == 3) {
      cont = 0;
      var IDRow = 'id' + sumame;
      arrayRows.push(React.createElement(GenerarRow, { ID: IDRow }));
      arrayNombresRow.push(IDRow);
      sumame++;
    }
  }
  ReactDOM.render(arrayRows, domContainer);
  cont = 0;
  for (var key in json) {
    if (json.hasOwnProperty(key)) {
      arrayImagenes.push(React.createElement(CargarImagen, { ruta: json[key].ruta, name: json[key].nombre }));
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
  var arrayImagenes = [];
  var arrayRows = [];
  var arrayNombresRow = [];
  var cont = 0;
  var sumame = 1;
  var selectRow = '';
  var indiceRows = 0;
  var domContainer = document.querySelector('#containerMain');

  /* Parte 1 */
  for (var key in json) {
    cont++;
    if (cont == 3) {
      cont = 0;
      var _IDRow = 'id' + sumame;
      arrayRows.push(React.createElement(GenerarRow, { ID: _IDRow }));
      arrayNombresRow.push(_IDRow);
      sumame++;
    }
  }
  var IDRow = 'id' + sumame;
  arrayRows.push(React.createElement(GenerarRow, { ID: IDRow }));
  arrayNombresRow.push(IDRow);

  ReactDOM.render(arrayRows, domContainer);
  cont = 0;

  /* Parte 2 */
  for (var key in json) {
    if (json.hasOwnProperty(key)) {
      arrayImagenes.push(React.createElement(CargarImagen, { ruta: json[key].ruta, name: json[key].nombre }));
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
  }).fail(function () {
    console.log("I have failed you :( ");
  });
}

/*  Funcion que se dispara al cargarse el listado. Hace la llmada al container, desde donde se generan los row y se cargan las imagenes  */
function renderizarOnReady() {
  var domContainer = document.querySelector('#root');
  ReactDOM.render(React.createElement(GenerarContainer, null), domContainer);
}

/*************************
  Ready!
 *************************/
/* Se carga la funcion princiapl dentro del html cuando se termina de cargar. Al hacerse click se dispara la funcion */
$(document).ready(function () {
  $('#proceso_link').click(renderizarOnReady);
});