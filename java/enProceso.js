var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*
Archivo unico para manejar el React de la página.

*/

/*************************
  Clases
 *************************/

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
        test()
      );
    }
  }]);

  return GenerarContainer;
}(React.Component);

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

function renderizarOnReady() {
  var domContainer = document.querySelector('#root');
  ReactDOM.render(React.createElement(GenerarContainer, null), domContainer);
}

/*AJAX que trae las imagenes y sus nombres de la DB */

function retornoDB(callback) {
  $.ajax({
    type: 'POST',
    url: "./scripts/index.php/test",
    success: callback,
    async: true
  }).fail(function () {
    console.log("I have failed you :( ");
  });
}

function cargarTresImagenes() {
  retornoDB(function (data) {
    var json = JSON.parse(data);
    var array = [];
    var arrayRows = [];
    var cont = 0;
    var sumame = 1;
    var IDRow = 'id';
    var selectRow = '';
    var domContainer = document.querySelector('#containerMain');
    for (var key in json) {
      if (json.hasOwnProperty(key)) {
        array.push(React.createElement(CargarImagen, { ruta: json[key].ruta, name: json[key].nombre }));
        cont++;
      }
      if (cont == 3) {
        cont = 0;
        IDRow = IDRow + sumame;
        ReactDOM.render(React.createElement(GenerarRow, { ID: IDRow }), domContainer);
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
    var json = JSON.parse(data);
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
    //ReactDOM.render(array, domContainer);
  });
}

// Probamos traer desde la base de datos directamente (sin hardcodear)

function prueba_traerDesdeDB() {
  $.ajax({
    type: 'POST',
    url: "./scripts/index.php/test",
    success: function success(resp) {
      var json = JSON.parse(resp);
      console.log(json);
    },
    async: false
  }).fail(function () {
    console.log("I have failed you :( ");
  });
}

/*************************
  Ready!
 *************************/
$(document).ready(function () {
  $('#proceso_link').click(renderizarOnReady);
});