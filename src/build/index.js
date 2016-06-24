(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var Tablero = require('./Tablero.jsx');
var Cabecera = require('./Cabecera.jsx');
var Boton = require("./Boton.jsx");
var JUGADORX = "jugador 1 - las X";
var JUGADOR0 = "jugador 2 - los 0";
var terminadoJuego = false;
var textoYaGanador = "Ya ha ganado el jugador ";
var textoGanador = "Gana el jugador ";

var App = React.createClass({
	displayName: 'App',

	getInitialState: function getInitialState() {

		return {
			turno: JUGADORX,
			valores: [['-', '-', '-'], ['-', '-', '-'], ['-', '-', '-']]
		};
	},

	reiniciarJuego: function reiniciarJuego() {
		/*terminadoJuego = false;
  textoYaGanador = "Ya ha ganado el jugador ";
  textoGanador = "Gana el jugador ";
  this.state.valores = [
  			['-', '-', '-'],
  			['-', '-', '-'],
  			['-', '-', '-']
  		];
  this.state.turno = JUGADORX;*/
		window.location.href = window.location.href;
	},

	appClick: function appClick(numeroFila, numberoColumna) {
		var valores = this.state.valores;
		var nuevoValor = this.state.turno === JUGADORX ? 'X' : '0';
		valores[numeroFila][numberoColumna] = nuevoValor;
		this.setState({
			turno: this.state.turno === JUGADORX ? JUGADOR0 : JUGADORX,
			valores: this.state.valores
		});
	},

	render: function render() {
		var texto;
		texto = "Turno del " + this.state.turno;
		return React.createElement(
			'div',
			null,
			React.createElement(Cabecera, { texto: texto }),
			React.createElement(Tablero, { id: 'tablero', valores: this.state.valores,
				comprobarGanador: this.jugadorGana,
				manejadorTableroClick: this.appClick }),
			React.createElement(Boton, { pulsadorBoton: this.reiniciarJuego })
		);
	},

	jugadorGana: function jugadorGana() {
		/* Jugador X*/

		if (this.state.valores[0][0] === 'X' && this.state.valores[1][1] === 'X' && this.state.valores[2][2] === 'X') {
			if (terminadoJuego) {
				alert(textoYaGanador);
			} else {
				textoGanador = textoGanador + "X";
				textoYaGanador = textoYaGanador + "X";
				terminadoJuego = true;
				alert(textoGanador);
			}
		} else if (this.state.valores[0][0] === 'X' && this.state.valores[0][1] === 'X' && this.state.valores[0][2] === 'X') {
			if (terminadoJuego) {
				alert(textoYaGanador);
			} else {
				textoGanador = textoGanador + "X";
				textoYaGanador = textoYaGanador + "X";
				terminadoJuego = true;
				alert(textoGanador);
			}
		} else if (this.state.valores[0][0] === 'X' && this.state.valores[1][0] === 'X' && this.state.valores[2][0] === 'X') {
			if (terminadoJuego) {
				alert(textoYaGanador);
			} else {
				textoGanador = textoGanador + "X";
				textoYaGanador = textoYaGanador + "X";
				terminadoJuego = true;
				alert(textoGanador);
			}
		} else if (this.state.valores[0][2] === 'X' && this.state.valores[1][1] === 'X' && this.state.valores[2][0] === 'X') {
			if (terminadoJuego) {
				alert(textoYaGanador);
			} else {
				textoGanador = textoGanador + "X";
				textoYaGanador = textoYaGanador + "X";
				terminadoJuego = true;
				alert(textoGanador);
			}
		} else if (this.state.valores[0][1] === 'X' && this.state.valores[1][1] === 'X' && this.state.valores[2][1] === 'X') {
			if (terminadoJuego) {
				alert(textoYaGanador);
			} else {
				textoGanador = textoGanador + "X";
				textoYaGanador = textoYaGanador + "X";
				terminadoJuego = true;
				alert(textoGanador);
			}
		} else if (this.state.valores[1][0] === 'X' && this.state.valores[1][1] === 'X' && this.state.valores[1][2] === 'X') {
			if (terminadoJuego) {
				alert(textoYaGanador);
			} else {
				textoGanador = textoGanador + "X";
				textoYaGanador = textoYaGanador + "X";
				terminadoJuego = true;
				alert(textoGanador);
			}
		} else if (this.state.valores[2][0] === 'X' && this.state.valores[2][1] === 'X' && this.state.valores[2][2] === 'X') {
			if (terminadoJuego) {
				alert(textoYaGanador);
			} else {
				textoGanador = textoGanador + "X";
				textoYaGanador = textoYaGanador + "X";
				terminadoJuego = true;
				alert(textoGanador);
			}
		} else if (this.state.valores[0][2] === 'X' && this.state.valores[1][2] === 'X' && this.state.valores[2][2] === 'X') {
			if (terminadoJuego) {
				alert(textoYaGanador);
			} else {
				textoGanador = textoGanador + "X";
				textoYaGanador = textoYaGanador + "X";
				terminadoJuego = true;
				alert(textoGanador);
			}
		}

		/* Jugador 0*/

		else if (this.state.valores[0][0] === '0' && this.state.valores[1][1] === '0' && this.state.valores[2][2] === '0') {
				if (terminadoJuego) {
					alert(textoYaGanador);
				} else {
					textoGanador = textoGanador + "0";
					textoYaGanador = textoYaGanador + "0";
					terminadoJuego = true;
					alert(textoGanador);
				}
			} else if (this.state.valores[0][0] === '0' && this.state.valores[0][1] === '0' && this.state.valores[0][2] === '0') {
				if (terminadoJuego) {
					alert(textoYaGanador);
				} else {
					textoGanador = textoGanador + "0";
					textoYaGanador = textoYaGanador + "0";
					terminadoJuego = true;
					alert(textoGanador);
				}
			} else if (this.state.valores[0][0] === '0' && this.state.valores[1][0] === '0' && this.state.valores[2][0] === '0') {
				if (terminadoJuego) {
					alert(textoYaGanador);
				} else {
					textoGanador = textoGanador + "0";
					textoYaGanador = textoYaGanador + "0";
					terminadoJuego = true;
					alert(textoGanador);
				}
			} else if (this.state.valores[0][2] === '0' && this.state.valores[1][1] === '0' && this.state.valores[2][0] === '0') {
				if (terminadoJuego) {
					alert(textoYaGanador);
				} else {
					textoGanador = textoGanador + "0";
					textoYaGanador = textoYaGanador + "0";
					terminadoJuego = true;
					alert(textoGanador);
				}
			} else if (this.state.valores[0][1] === '0' && this.state.valores[1][1] === '0' && this.state.valores[2][1] === '0') {
				if (terminadoJuego) {
					alert(textoYaGanador);
				} else {
					textoGanador = textoGanador + "0";
					textoYaGanador = textoYaGanador + "0";
					terminadoJuego = true;
					alert(textoGanador);
				}
			} else if (this.state.valores[1][0] === '0' && this.state.valores[1][1] === '0' && this.state.valores[1][2] === '0') {
				if (terminadoJuego) {
					alert(textoYaGanador);
				} else {
					textoGanador = textoGanador + "0";
					textoYaGanador = textoYaGanador + "0";
					terminadoJuego = true;
					alert(textoGanador);
				}
			} else if (this.state.valores[2][0] === '0' && this.state.valores[2][1] === '0' && this.state.valores[2][2] === '0') {
				if (terminadoJuego) {
					alert(textoYaGanador);
				} else {
					textoGanador = textoGanador + "0";
					textoYaGanador = textoYaGanador + "0";
					terminadoJuego = true;
					alert(textoGanador);
				}
			} else if (this.state.valores[0][2] === '0' && this.state.valores[1][2] === '0' && this.state.valores[2][2] === '0') {
				if (terminadoJuego) {
					alert(textoYaGanador);
				} else {
					textoGanador = textoGanador + "0";
					textoYaGanador = textoYaGanador + "0";
					terminadoJuego = true;
					alert(textoGanador);
				}
			}
	}

});
module.exports = App;

},{"./Boton.jsx":2,"./Cabecera.jsx":3,"./Tablero.jsx":5}],2:[function(require,module,exports){
'use strict';

var botonStyle = {
	height: '50px',
	width: '300px'
};

var Boton = React.createClass({
	displayName: 'Boton',

	botonPush: function botonPush() {
		this.props.pulsadorBoton();
	},

	render: function render() {
		return React.createElement(
			'button',
			{ style: botonStyle, onClick: this.botonPush },
			'Reiniciar juego'
		);
	}
});

module.exports = Boton;

},{}],3:[function(require,module,exports){
"use strict";

var Cabecera = React.createClass({
	displayName: "Cabecera",

	render: function render() {
		return React.createElement(
			"header",
			{ className: "cabecera" },
			this.props.texto
		);
	}
});

module.exports = Cabecera;

},{}],4:[function(require,module,exports){
'use strict';

var casillaStyle = {
	height: '100px',
	width: '100px'
};

var Casilla = React.createClass({
	displayName: 'Casilla',

	casillaClick: function casillaClick() {
		this.props.manejadorClick(this.props.indiceFila, this.props.indiceColumna);
	},

	render: function render() {
		return React.createElement(
			'button',
			{ style: casillaStyle, className: this.props.valor === "-" ? "clickable" : "no_clickable", onClick: this.casillaClick },
			this.props.valor
		);
	}
});

module.exports = Casilla;

},{}],5:[function(require,module,exports){
"use strict";

var Casilla = require("./Casilla.jsx");

var Tablero = React.createClass({
	displayName: "Tablero",

	tableroClick: function tableroClick(numeroFila, numeroColumna) {
		this.props.manejadorTableroClick(numeroFila, numeroColumna);
		this.props.comprobarGanador();
	},

	render: function render() {
		var casillas = this.props.valores.map((function (valoresFila, indiceFila) {
			var fila = valoresFila.map((function (valor, indiceColumna) {
				var mykey = "" + indiceFila + indiceColumna;
				return React.createElement(Casilla, { valor: valor, indiceFila: indiceFila,
					indiceColumna: indiceColumna, key: mykey, manejadorClick: this.tableroClick });
			}).bind(this));
			return React.createElement(
				"div",
				{ key: "fila" + indiceFila },
				" ",
				fila
			);
		}).bind(this));
		return React.createElement(
			"div",
			null,
			casillas
		);
	}
});

module.exports = Tablero;

},{"./Casilla.jsx":4}],6:[function(require,module,exports){
/*Paso 4
var Casilla = React.createClass({
	render: function() {
		return (
			<div> {this.props.valor} </div>
				);
	}
});

ReactDOM.render(<Casilla valor="X" />,
	document.getElementById('contenedor'));*/
/*paso 6
const Casilla = require("./Casilla.jsx");

ReactDOM.render(<Casilla />,
	document.getElementById('contenedor'));*/

"use strict";

var App = require("./App.jsx");
ReactDOM.render(React.createElement(App, null), document.getElementById('contenedor'));

/*
const Tablero = require("./Tablero.jsx");
ReactDOM.render(<Tablero />, document.getElementById('contenedor'));*/

},{"./App.jsx":1}]},{},[6]);
