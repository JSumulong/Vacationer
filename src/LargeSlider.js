import React, { Component } from 'react';
import './largeSlider.css'

class LargeSlider extends Component {
	render() {
		const style = {
			"height": 600,
			"width": "100%",
			"padding": 0,
			"overflow": "hidden"
		}
		const ulStyle = {
			"listStyle": "none",
			"padding": 0, 
			"margin": 0
		}
		const imgStyle = {
			"maxWidth": "100%",
			"width": "100%"
		}
		const radioStyle = {
			"position": "absolute",
			"bottom": 100,
			"width": 20,
			"height": 20,
			"opacity": 0.5,
			"cursor": "pointer"
		}
		return (
			<div style={style}>
				<input type="radio" style={radioStyle}/>
				<input type="radio" style={radioStyle}/>
				<input type="radio" style={radioStyle}/>
				<ul style={ulStyle}>
					<li id="slide-1">
						<img style={imgStyle} src="https://images.unsplash.com/uploads/1413142095961484763cf/d141726c?dpr=2&auto=format&fit=crop&w=767&h=511&q=80&cs=tinysrgb&crop=" />
					</li>
					<li id="slide-2">asdf</li>
					<li id="slide-3">asdf</li>
				</ul>
			</div>
		)
	}
}

export default LargeSlider;
