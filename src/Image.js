import React, { Component } from 'react';

class Image extends Component {
	render() {
		const imgStyle = {
			"height": 320,
			"width": 500
		}
		const divStyle = {
			"width": 495,
			"height": 315,
			"marginLeft": "auto",
			"marginRight": "auto"
		}
		return (
			<div style={divStyle}>
				<img src={this.props.url} alt={this.props.title} style={imgStyle} />
			</div>
		)
	}
}

export default Image;