import React, { Component } from 'react';
import Image from './Image';

class VacationCard extends Component {
	render() {
		const divStyle = {
			"width": 450,
			"height": 400,
			"backgroundColor": "white",
			"marginRight": 25,
			"marginBottom": 50,
			"overflow": "hidden",
		}
		const h3Style = {
			"margin": 0,
			"paddingTop": 10,
			"textAlign": "left"
		}
		const pStyle = {
			"margin": 0,
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