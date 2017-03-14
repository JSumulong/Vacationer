import React, { Component } from 'react';
import TopSlideOne from './TopSlideOne';
import TopSlideTwo from './TopSlideTwo';
import TopSlideThree from './TopSlideThree';
import RightArrow from './RightArrow';
import LeftArrow from './LeftArrow';

class TopSlider extends Component {
	constructor(props) {
		super(props)

		this.state = {
			currentSlide: 1
		}

		this.nextSlide = this.nextSlide.bind(this);
		this.prevSlide = this.prevSlide.bind(this);
	}
	nextSlide() {
		this.state.currentSlide === 3 ? 
		this.setState({currentSlide: 1}) : 
		this.setState({currentSlide: this.state.currentSlide + 1})
	}
	prevSlide() {
		this.state.currentSlide === 1 ?
		this.setState({currentSlide: 3}) :
		this.setState({currentSlide: this.state.currentSlide - 1})
	}
	render() {
		return (
			<div className="slider">
				{ this.state.currentSlide === 1 ? <TopSlideOne /> : null }
				{ this.state.currentSlide === 2 ? <TopSlideTwo /> : null }
				{ this.state.currentSlide === 3 ? <TopSlideThree /> : null }
				<RightArrow nextSlide={this.nextSlide} />
				<LeftArrow prevSlide={this.prevSlide} />
			</div>
		)
	}
}

export default TopSlider;
