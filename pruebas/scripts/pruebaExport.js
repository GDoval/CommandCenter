'use strict';

class test{
	constructor(nombre)
	{
		this.nombre = nombre;
	}
	saludar(){
		console.log("Hola " + this.nombre);
	}
}
module.exports = 
{
	test : new test()
};