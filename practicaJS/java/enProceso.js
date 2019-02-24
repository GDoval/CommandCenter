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

var CuatroImagenes = function (_React$Component) {
  _inherits(CuatroImagenes, _React$Component);

  function CuatroImagenes(props) {
    _classCallCheck(this, CuatroImagenes);

    var _this = _possibleConstructorReturn(this, (CuatroImagenes.__proto__ || Object.getPrototypeOf(CuatroImagenes)).call(this, props));

    _this.state = '';
    return _this;
  }

  _createClass(CuatroImagenes, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { "class": "container" },
        React.createElement(
          "div",
          { "class": "row" },
          React.createElement(
            "div",
            { "class": "col-sm-3" },
            React.createElement("img", {
              src: "https://vignette.wikia.nocookie.net/kaguyasama-wa-kokurasetai/images/7/7c/ChikaFujiwara-02.png/revision/latest/scale-to-width-down/258?cb=20171223124642" }),
            React.createElement(
              "a",
              { href: "#" },
              "Chika Fujiwara"
            )
          ),
          React.createElement(
            "div",
            { "class": "col-sm-3" },
            React.createElement("img", {
              src: "https://vignette.wikia.nocookie.net/kaguyasama-wa-kokurasetai/images/7/7c/ChikaFujiwara-02.png/revision/latest/scale-to-width-down/258?cb=20171223124642" }),
            React.createElement(
              "a",
              { href: "#" },
              "Chika Fujiwara"
            )
          ),
          React.createElement(
            "div",
            { "class": "col-sm-3" },
            React.createElement("img", {
              src: "https://vignette.wikia.nocookie.net/kaguyasama-wa-kokurasetai/images/7/7c/ChikaFujiwara-02.png/revision/latest/scale-to-width-down/258?cb=20171223124642" }),
            React.createElement(
              "a",
              { href: "#" },
              "Chika Fujiwara"
            )
          ),
          React.createElement(
            "div",
            { "class": "col-sm-3" },
            React.createElement("img", {
              src: "https://vignette.wikia.nocookie.net/kaguyasama-wa-kokurasetai/images/7/7c/ChikaFujiwara-02.png/revision/latest/scale-to-width-down/258?cb=20171223124642" }),
            React.createElement(
              "a",
              { href: "#" },
              "Chika Fujiwara"
            )
          )
        ),
        React.createElement(
          "div",
          { "class": "row" },
          React.createElement(
            "div",
            { "class": "col-sm-3" },
            React.createElement("img", {
              src: "https://vignette.wikia.nocookie.net/kaguyasama-wa-kokurasetai/images/7/7c/ChikaFujiwara-02.png/revision/latest/scale-to-width-down/258?cb=20171223124642" }),
            React.createElement(
              "a",
              { href: "#" },
              "Chika Fujiwara"
            )
          ),
          React.createElement(
            "div",
            { "class": "col-sm-3" },
            React.createElement("img", {
              src: "https://vignette.wikia.nocookie.net/kaguyasama-wa-kokurasetai/images/7/7c/ChikaFujiwara-02.png/revision/latest/scale-to-width-down/258?cb=20171223124642" }),
            React.createElement(
              "a",
              { href: "#" },
              "Chika Fujiwara"
            )
          ),
          React.createElement(
            "div",
            { "class": "col-sm-3" },
            React.createElement("img", {
              src: "https://vignette.wikia.nocookie.net/kaguyasama-wa-kokurasetai/images/7/7c/ChikaFujiwara-02.png/revision/latest/scale-to-width-down/258?cb=20171223124642" }),
            React.createElement(
              "a",
              { href: "#" },
              "Chika Fujiwara"
            )
          ),
          React.createElement(
            "div",
            { "class": "col-sm-3" },
            React.createElement("img", {
              src: "https://vignette.wikia.nocookie.net/kaguyasama-wa-kokurasetai/images/7/7c/ChikaFujiwara-02.png/revision/latest/scale-to-width-down/258?cb=20171223124642" }),
            React.createElement(
              "a",
              { href: "#" },
              "Chika Fujiwara"
            )
          )
        )
      );
    }
  }]);

  return CuatroImagenes;
}(React.Component);

/*************************
  Funciones
 *************************/

function cargaImagen() {
  var domContainer = document.querySelector('#en_proceso');
  ReactDOM.render(React.createElement(CuatroImagenes, null), domContainer);
}

/*************************
  Ready!
 *************************/
$(document).ready(function () {
  $('#proceso_link').click(cargaImagen);
});