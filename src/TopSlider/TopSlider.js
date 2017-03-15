import React, { Component } from 'react';
import RightArrow from '../Arrows/RightArrow';
import LeftArrow from '../Arrows/LeftArrow';
import TopSlide from './TopSlide';
import './topSlider.css';

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
			<div className="topSlider">
				{ this.state.currentSlide === 1 ? <TopSlide imageUrl="https://images.unsplash.com/photo-1473951574080-01fe45ec8643?dpr=2&auto=format&fit=crop&w=1199&h=770&q=80&cs=tinysrgb&crop="/> : null }
				{ this.state.currentSlide === 2 ? <TopSlide imageUrl="https://images.unsplash.com/photo-1483322314125-655a591f2d41?dpr=2&auto=format&fit=crop&w=1199&h=674&q=80&cs=tinysrgb&crop="/> : null }
				{ this.state.currentSlide === 3 ? <TopSlide imageUrl="https://images.unsplash.com/photo-1487730116645-74489c95b41b?dpr=2&auto=format&fit=crop&w=767&h=511&q=80&cs=tinysrgb&crop="/> : null }
				<RightArrow nextSlide={this.nextSlide} />
				<LeftArrow className="leftArrow" prevSlide={this.prevSlide} />
			</div>
		)
	}
}

export default TopSlider;
