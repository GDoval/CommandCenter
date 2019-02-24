var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*
Archivo unico para manejar el React de la página
*/

/*************************
  Clases
 *************************/

var Probando = function (_React$Component) {
  _inherits(Probando, _React$Component);

  function Probando(props) {
    _classCallCheck(this, Probando);

    var _this = _possibleConstructorReturn(this, (Probando.__proto__ || Object.getPrototypeOf(Probando)).call(this, props));

    _this.state = '';
    return _this;
  }

  _createClass(Probando, [{
    key: 'render',
    value: function render() {
      return React.createElement('img', { src: 'https://i.pinimg.com/originals/bd/3d/0d/bd3d0d5df70b29cc4e6300386f17cab6.png' });
    }
  }]);

  return Probando;
}(React.Component);

/*************************
  Funciones
 *************************/

function cargaImagen() {
  var domContainer = document.querySelector('#en_proceso');
  ReactDOM.render(React.createElement(Probando, null), domContainer);
}

/*************************
  Ready!
 *************************/
$(document).ready(function () {
  $('#proceso_link').click(cargaImagen);
});