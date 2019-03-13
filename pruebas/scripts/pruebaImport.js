let saludar = require('./pruebaExport');
let hola = saludar.test;
hola.nombre = "pepe";
hola.saludar();