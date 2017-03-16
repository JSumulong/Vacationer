import React, { Component } from 'react';

class TestimonyImage extends Component {
	render() {
		const divStyle = {
			borderRadius: "50%",
			overflow: "hidden",
			width: 200,
			height: 200,
			position: "relative"
		}
		const imgStyle = {
			maxWidth: 400,
			position: "absolute",
			right: -65 
		}
		return (
			<div className="image-container" style={divStyle}>
				<img style={imgStyle} src={this.props.img} alt="testimony"/>
			</div>
		)
	}
}

export default TestimonyImage;