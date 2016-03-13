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
	


	//nombreJugador: "";
	constructor(nombreJugador, intentos, frase) {
		function insertarFrase(f) {
		var ff = f.split("");
		var final = [];
		for(var i = 0; i < ff.length; i++) {
			final[i] = []
			final[i][0] = ff[i];
			final[i][1] = false;
		}
		return final;
	}
		this._nombreJugador = nombreJugador;
		this._intentos = intentos;
		this._frase = insertarFrase(frase);
		/*this._frase[0] = frase;
		for(var i = 0; i < this._frase.length; i++) {
			this._frase[1] = false;
		}*/
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
	mostrarFraseOculta(p) {
		var st = p.frase;
		for(var i = 0; i < st.length; i++) {
			if(st[i] == " ")
				$(".frase").append(" &nbsp; ");
			else
				$(".frase").append(" _ ");
		}

	}
	comprobarLetra(letra, frase) {
		var existe = false;

		for (var i = 0; i < frase.length; i++) {
			if(frase[i][0] == letra) {
				existe = true;
				frase[i][1] = true; 
			}
		}
		//mostrarCoincidencias
		return existe;
	}
	mostrarCoincidencias(frase) {
		for(var i = 0; i < frase.length; i++) {
			if(frase[i][1] == true) {
				//mostramos la letra
				console.info(frase[i][0]);
				
			}
		}
	}
	pedirLetra(p) {
		do {
			var letra = window.prompt("Introduce una letra", "");
			console.info(letra);
		} while (letra == "" && letra.length != 1);
		p.intentos--;
		return letra;
	}
}
$(document).ready(function() {

	$("#iniciar").click(function() {
		//inicializaciones
		var p = new Partida('Hugo', 5, "La Guerra de las Galaxias");
		var f = new Funcionalidades();
		console.log(p);

		var letraActual = '';
		f.mostrarFraseOculta(p);
		do {
			letraActual = f.pedirLetra(p);
			f.comprobarLetra(letraActual, p.frase);
			f.mostrarCoincidencias(p.frase);
		} while (p.intentos > 0);

	});

});