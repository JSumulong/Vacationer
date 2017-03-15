import React, { Component } from 'react';
import './slider.css';
import SliderArrow from '../Arrows/SliderArrow';

class Slider extends Component {
	nextSlide() {
		const slidable = document.querySelector('.slidable');
		slidable.style.transform = "translateX(-1112px)";
	}
	prevSlide() {
		const slidable = document.querySelector('.slidable');
		slidable.style.transform = "translateX(0)";
	}
	render() {
		const container = {
			width: "100%",
			display: "flex",
			justifyContent: "center",
			alignItems: "center"
		}
		const sliderDivOuter = {
			"width": 1100,
			"height": 295,
			"marginTop": 50,
			marginBottom: 50,
			marginLeft: 0,
			marginRight: 0,
			"overflow": "hidden",
			position: "relative"
		}
		const sliderDivInner = {
			"display": "flex",
			"justifyContent": "flexStart",
			"height": 290,
			"width": 3000,
			paddingLeft: 12,
			"overflow": "hidden",
			transition: "all 800ms"
		}
		return (
			<div className="sliderContainer" style={container}> 
				<SliderArrow arrow="&#8249;" onClick={this.prevSlide}/>
				<div className="vacationCardSlider" style={sliderDivOuter}>
					<div className="slidable" style={sliderDivInner}>
						{this.props.content}
					</div>
				</div>
				<SliderArrow arrow="&#8250;" onClick={this.nextSlide}/>
			</div>
		)
	}
}

export default Slider;