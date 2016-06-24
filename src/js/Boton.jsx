const botonStyle = {
	height: '50px',
	width: '300px'
};

let Boton = React.createClass({
	botonPush: function(){
		this.props.pulsadorBoton();
	},

	render: function(){
		return (
			<button style={botonStyle} onClick={this.botonPush}>
			Reiniciar juego
			</button>
		)
	}
});

module.exports = Boton;