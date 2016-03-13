/* Código basado en el estándar ES6
*/

"use strict";
// class Frases
// {
// 	constructor(listado) {
// 		this._listado = listado;
// 	}
// 	get frase() {

// 	}
	
// }
class Partida
{
	constructor(nombreJugador, intentos, frase) {
		this._nombreJugador = nombreJugador;
		this._intentos = intentos;
		this._frase = frase;
	}
	get nombre() {
		return this._nombreJugador;
	}
	get intentos() {
		return this._intentos;
	}
	get frase() {
		return this._frase;
	}

	set nombre(nombreJugador) {
		this._nombreJugador = nombreJugador;
	}
	set intentos(intentos) {
		this._intentos = intentos;
	}
	set frase(frase) {
		this._frase = frase;
	}
}

class Funcionalidades
{
	/*
	TODO
	El problema es que cada vez que coincide, se vuelve a actualizar la variable existe
	*/
	comprobarLetra(letra, frase) {
		var existe = false;

		for (var i = 0; i < frase.length; i++) {
			if(frase[i][0] == letra) {
				existe = true;
				frase[i][1] == true; 
			}
		}
		//mostrarCoincidencias
		return existe;
	}
	mostrarCoincidencias(frase) {
		for(var i = 0; i < frase.length; i++) {
			if(frase[i][1] == true) {
				//mostramos la letra
				
			}
		}
	}
	pedirLetra(p) {
		do {
			var letra = window.prompt("Introduce una letra", "");

		} while (letra == "");
		p.intentos--;
	}
}
$(document).ready(function() {

	$("#iniciar").click(function() {
			//inicializaciones
		var p = new Partida('Hugo', 5, "La Guerra de las Galaxias");
		var f = new Funcionalidades();
		console.log(p);

		var letraActual = '';
		do {
			f.pedirLetra(p);
		} while (p.intentos > 0);

	});

});