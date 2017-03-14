import React, { Component } from 'react';
import RightArrow from './RightArrow';
import LeftArrow from './LeftArrow';
import TopSlide from './TopSlide';

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
				{ this.state.currentSlide === 1 ? <TopSlide imageUrl="https://images.unsplash.com/uploads/1413142095961484763cf/d141726c?dpr=2&auto=format&fit=crop&w=767&h=511&q=80&cs=tinysrgb&crop="/> : null }
				{ this.state.currentSlide === 2 ? <TopSlide imageUrl="https://images.unsplash.com/photo-1483322314125-655a591f2d41?dpr=2&auto=format&fit=crop&w=1199&h=674&q=80&cs=tinysrgb&crop="/> : null }
				{ this.state.currentSlide === 3 ? <TopSlide imageUrl="https://images.unsplash.com/photo-1473951574080-01fe45ec8643?dpr=2&auto=format&fit=crop&w=1199&h=770&q=80&cs=tinysrgb&crop="/> : null }
				<RightArrow nextSlide={this.nextSlide} />
				<LeftArrow prevSlide={this.prevSlide} />
			</div>
		)
	}
}

export default TopSlider;
