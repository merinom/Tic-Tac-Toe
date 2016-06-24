const Tablero = require('./Tablero.jsx');
const Cabecera = require('./Cabecera.jsx');
const Boton = require("./Boton.jsx");
const JUGADORX = "jugador 1 - las X";
const JUGADOR0 = "jugador 2 - los 0";
var terminadoJuego = false;
var textoYaGanador = "Ya ha ganado el jugador "
var textoGanador = "Gana el jugador ";

var App = React.createClass({
	getInitialState: function(){
		
		return {
			turno: JUGADORX,
				valores: [
					['-', '-', '-'],
					['-', '-', '-'],
					['-', '-', '-']
				]
			};
		},

    reiniciarJuego: function(){
		/*terminadoJuego = false;
		textoYaGanador = "Ya ha ganado el jugador ";
		textoGanador = "Gana el jugador ";
		this.state.valores = [
					['-', '-', '-'],
					['-', '-', '-'],
					['-', '-', '-']
				];
		this.state.turno = JUGADORX;*/
		
		window.location.href=window.location.href;
	},

	appClick: function(numeroFila, numberoColumna){
		let valores = this.state.valores;
		let nuevoValor = this.state.turno === JUGADORX ? 'X':'0';
		valores[numeroFila][numberoColumna] = nuevoValor;
		this.setState({
			turno: this.state.turno === JUGADORX ? JUGADOR0:JUGADORX,
			valores: this.state.valores
		});
	},

    render: function(){
		var texto;
		texto = "Turno del " + this.state.turno;
		return (
			<div><Cabecera texto={texto}/>
			<Tablero id = "tablero" valores={this.state.valores}
			comprobarGanador={this.jugadorGana}
			manejadorTableroClick={this.appClick}/>
			<Boton pulsadorBoton={this.reiniciarJuego}/>
			</div>
			
		)
	},

    jugadorGana: function(){
    	/* Jugador X*/
    	
        if((this.state.valores[0][0] === 'X') && (this.state.valores[1][1] === 'X') && (this.state.valores[2][2]==='X')){
			if(terminadoJuego){
			alert(textoYaGanador);
			}
			else{
			textoGanador = textoGanador + "X";
			textoYaGanador = textoYaGanador + "X";
			terminadoJuego = true;
			alert(textoGanador);}
        }
         else if((this.state.valores[0][0] === 'X') && (this.state.valores[0][1] === 'X') && (this.state.valores[0][2]==='X')){
		if(terminadoJuego){
			alert(textoYaGanador);
			}
			else{
			textoGanador = textoGanador + "X";
			textoYaGanador = textoYaGanador + "X";
			terminadoJuego = true;
			alert(textoGanador);}
        }
         else if((this.state.valores[0][0] === 'X') && (this.state.valores[1][0] === 'X') && (this.state.valores[2][0]==='X')){
			if(terminadoJuego){
			alert(textoYaGanador);
			}
			else{
			textoGanador = textoGanador + "X";
			textoYaGanador = textoYaGanador + "X";
			terminadoJuego = true;
			alert(textoGanador);}
        }

         else if((this.state.valores[0][2] === 'X') && (this.state.valores[1][1] === 'X') && (this.state.valores[2][0]==='X')){
			if(terminadoJuego){
			alert(textoYaGanador);
			}
			else{
			textoGanador = textoGanador + "X";
			textoYaGanador = textoYaGanador + "X";
			terminadoJuego = true;
			alert(textoGanador);}
        }
          else if((this.state.valores[0][1] === 'X') && (this.state.valores[1][1] === 'X') && (this.state.valores[2][1]==='X')){
			if(terminadoJuego){
			alert(textoYaGanador);
			}
			else{
			textoGanador = textoGanador + "X";
			textoYaGanador = textoYaGanador + "X";
			terminadoJuego = true;
			alert(textoGanador);}
        }
         else if((this.state.valores[1][0] === 'X') && (this.state.valores[1][1] === 'X') && (this.state.valores[1][2]==='X')){
		if(terminadoJuego){
			alert(textoYaGanador);
			}
			else{
			textoGanador = textoGanador + "X";
			textoYaGanador = textoYaGanador + "X";
			terminadoJuego = true;
			alert(textoGanador);}
        }
         else if((this.state.valores[2][0] === 'X') && (this.state.valores[2][1] === 'X') && (this.state.valores[2][2]==='X')){
			if(terminadoJuego){
			alert(textoYaGanador);
			}
			else{
			textoGanador = textoGanador + "X";
			textoYaGanador = textoYaGanador + "X";
			terminadoJuego = true;
			alert(textoGanador);}
        }

         else if((this.state.valores[0][2] === 'X') && (this.state.valores[1][2] === 'X') && (this.state.valores[2][2]==='X')){
			if(terminadoJuego){
			alert(textoYaGanador);
			}
			else{
			textoGanador = textoGanador + "X";
			textoYaGanador = textoYaGanador + "X";
			terminadoJuego = true;
			alert(textoGanador);}
        }

        /* Jugador 0*/

        else if((this.state.valores[0][0] === '0') && (this.state.valores[1][1] === '0') && (this.state.valores[2][2]==='0')){
			if(terminadoJuego){
			alert(textoYaGanador);
			}
			else{
			textoGanador = textoGanador + "0";
			textoYaGanador = textoYaGanador + "0";
			terminadoJuego = true;
			alert(textoGanador);}
        }
         else if((this.state.valores[0][0] === '0') && (this.state.valores[0][1] === '0') && (this.state.valores[0][2]==='0')){
			if(terminadoJuego){
			alert(textoYaGanador);
			}
			else{
			textoGanador = textoGanador + "0";
			textoYaGanador = textoYaGanador + "0";
			terminadoJuego = true;
			alert(textoGanador);}
        }
         else if((this.state.valores[0][0] === '0') && (this.state.valores[1][0] === '0') && (this.state.valores[2][0]==='0')){
		if(terminadoJuego){
			alert(textoYaGanador);
			}
			else{
			textoGanador = textoGanador + "0";
			textoYaGanador = textoYaGanador + "0";
			terminadoJuego = true;
			alert(textoGanador);}
        }

         else if((this.state.valores[0][2] === '0') && (this.state.valores[1][1] === '0') && (this.state.valores[2][0]==='0')){
			if(terminadoJuego){
			alert(textoYaGanador);
			}
			else{
			textoGanador = textoGanador + "0";
			textoYaGanador = textoYaGanador + "0";
			terminadoJuego = true;
			alert(textoGanador);}
        }
          else if((this.state.valores[0][1] === '0') && (this.state.valores[1][1] === '0') && (this.state.valores[2][1]==='0')){
			if(terminadoJuego){
			alert(textoYaGanador);
			}
			else{
			textoGanador = textoGanador + "0";
			textoYaGanador = textoYaGanador + "0";
			terminadoJuego = true;
			alert(textoGanador);}
          }
         else if((this.state.valores[1][0] === '0') && (this.state.valores[1][1] === '0') && (this.state.valores[1][2]==='0')){
			if(terminadoJuego){
			alert(textoYaGanador);
			}
			else{
			textoGanador = textoGanador + "0";
			textoYaGanador = textoYaGanador + "0";
			terminadoJuego = true;
			alert(textoGanador);}
         }
         else if((this.state.valores[2][0] === '0') && (this.state.valores[2][1] === '0') && (this.state.valores[2][2]==='0')){
			if(terminadoJuego){
			alert(textoYaGanador);
			}
			else{
			textoGanador = textoGanador + "0";
			textoYaGanador = textoYaGanador + "0";
			terminadoJuego = true;
			alert(textoGanador);}
        }

         else if((this.state.valores[0][2] === '0') && (this.state.valores[1][2] === '0') && (this.state.valores[2][2]==='0')){
			if(terminadoJuego){
			alert(textoYaGanador);
			}
			else{
			textoGanador = textoGanador + "0";
			textoYaGanador = textoYaGanador + "0";
			terminadoJuego = true;
			alert(textoGanador);}
        }
    }

	
});
module.exports = App;