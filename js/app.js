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
			final[i][0] = ff[i].toLowerCase();
			if(ff[i] == " ")
				final[i][1] = true;
			else
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
	actualizarFraseOculta(p) {
		var st = p.frase;
		$(".frase").empty();
		for(var i = 0; i < st.length; i++) {
			if(st[i][0] == " ") {
				$(".frase").append("  ");
				continue;
			}
			if(st[i][1] === true) {
				$(".frase").append(st[i][0]);
			} else {
				$(".frase").append(" _ ");
			}
		}
	}
	comprobarLetra(letra, obj) {
		var existe = false;

		for (var i = 0; i < obj.frase.length; i++) {
			if(obj.frase[i][0] == letra) {
				existe = true;
				obj.frase[i][1] = true; 
			}
		}
		//mostrarCoincidencias
		if(!existe)
			obj.intentos--;
		$(".intentos-restantes").html(obj.intentos);
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
			var letra = window.prompt("Introduce una letra", "").toLowerCase();
			console.info(letra);
		} while (letra == "" && letra.length != 1);
		//p.intentos--;
		return letra;
	}
	comprobarResuelto(frase) {
		var fin = true;
		for(var i = 0; i < frase.length; i++) {
			if(frase[i][1] === false) {
				fin = false;
				break;
			}
		}
		return fin;
	}
}
$(document).ready(function() {

	$("#iniciar").click(function() {
		//inicializaciones
		var p = new Partida('Hugo', 5, "La Guerra de las Galaxias");
		var f = new Funcionalidades();
		console.log(p);
		$(".frase").empty();
		$(".mensajes").empty();

		var letraActual = '';
		f.mostrarFraseOculta(p);
		do {
			letraActual = f.pedirLetra(p);
			f.comprobarLetra(letraActual, p);
			//f.mostrarCoincidencias(p.frase);
			f.actualizarFraseOculta(p);
			console.info(p.intentos);
			//comprobar si hay valores a false (frase)
			if(f.comprobarResuelto(p.frase))
				break;
		} while (p.intentos > 0);
		if(p.intentos == 0) {
			//fin, no exito
			$(".mensajes").html("Vaya, no has resuelto el juego...");
		} else {
			//fin, exito
			$(".mensajes").html("Enhorabuena, has resuelto el juego!");
		}

	});

});