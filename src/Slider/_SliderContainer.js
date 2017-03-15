import React, { Component } from 'react';

class SliderContainer extends Component {
	nextSlide() {
		const slidable = document.querySelector('.slidable');
		slidable.style.transform = "translateX(-1112)";
	}
	prevSlide() {
		const slidable = document.querySelector('.slidable');
		slidable.style.transform = "translateX(0)";
	}
	render() {
		const style = {
			height: 295,
			width: "100%"
		}
		return (
			<div style={style}>
				
			</div>
		)
	}
}

export default SliderContainer;