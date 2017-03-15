import React, { Component } from 'react';
import Image from './Image';

class VacationCard extends Component {
	render() {
		const divStyle = {
			"width": 365,
			"height": 290,
			"backgroundColor": "white",
			"marginRight": 0,
			"marginBottom": 50,
			"overflow": "hidden",
			fontFamily: "'Raleway Dots', cursive"
		}
		const h3Style = {
			"margin": 0,
			"paddingTop": 10,
			"textAlign": "left",
			marginLeft: 10
		}
		const pStyle = {
			marginLeft: 10,
			marginTop: 2,
			marginBottom: 0,
			"paddingTop": 2,
			"textAlign": "left",
			"fontWeight": "lighter"
		}
		return (
			<div style={divStyle}>
				<Image url={this.props.data.url} alt={this.props.data.title} />
				<h3 style={h3Style}>{this.props.data.title}</h3>
				<p style={pStyle}>{this.props.data.priceIncludes}</p>
			</div>
		)
	}
}

export default VacationCard;