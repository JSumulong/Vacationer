import React, { Component } from 'react';

class Slider extends Component {
	render() {
		const sliderDivOuter = {
			"width": "100%",
			"height": 400,
			"marginTop": 50,
			"overflow": "hidden"
		}
		const sliderDivInner = {
			"display": "flex",
			"justifyContent": "flexStart",
			"height": 400,
			"width": 3000,
			"overflow": "hidden"
		}
		return (
			<div style={sliderDivOuter}>
				<div style={sliderDivInner}>
					{this.props.content}
				</div>
			</div>
		)
	}
}

export default Slider;