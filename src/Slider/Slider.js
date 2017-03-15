import React, { Component } from 'react';
import RightArrow from '../Arrows/RightArrow';
import LeftArrow from '../Arrows/LeftArrow';
import './slider.css';

class Slider extends Component {
	render() {
		const sliderDivOuter = {
			"width": 1100,
			"height": 400,
			"marginTop": 50,
			marginLeft: "auto",
			marginRight: "auto",
			"overflow": "hidden",
			position: "relative"
		}
		const sliderDivInner = {
			"display": "flex",
			"justifyContent": "flexStart",
			"height": 400,
			"width": 3000,
			"overflow": "hidden"
		}
		return (
			<div className="vacationCardSlider" style={sliderDivOuter}>
				<div style={sliderDivInner}>
					{this.props.content}
				</div>
				<RightArrow />
				<LeftArrow />
			</div>
		)
	}
}

export default Slider;