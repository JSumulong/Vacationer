import React, { Component } from 'react';

class TestimonyImage extends Component {
	render() {
		const imgStyle = {
			maxWidth: 400,
		}
		const divStyle = {
			borderRadius: "50%",
			overflow: "hidden",
			maxWidth: 300
		}
		return (
			<div style={divStyle}>
				<img style={imgStyle} src={this.props.img}/>
			</div>
		)
	}
}

export default TestimonyImage;