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

const App = require("./App.jsx");
ReactDOM.render(<App />,
document.getElementById('contenedor'));

/*
const Tablero = require("./Tablero.jsx");
ReactDOM.render(<Tablero />, document.getElementById('contenedor'));*/