import React, { Component } from 'react';

class Image extends Component {
	render() {
		const imgStyle = {
			maxWidth: 350
		}
		const divStyle = {
			maxWidth: 325,
			"height": 225,
			"marginLeft": 10,
			border: "solid black 1px",
			overflow: "hidden"
		}
		return (
			<div style={divStyle}>
				<img src={this.props.url} alt={this.props.title} style={imgStyle} />
			</div>
		)
	}
}

export default Image;