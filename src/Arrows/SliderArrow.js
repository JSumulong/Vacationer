import React, { Component } from 'react';

class SliderArrow extends Component {
	render() {
		const style = {
			height: 295,
			width: 40,
			display: "flex",
			justifyContent: "center",
			alignItems: "center",
			paddingBottom: 70,
			fontSize: 50,
			cursor: "pointer"
		}
		return (
			<div style={style} onClick={this.props.onClick}>{this.props.arrow}</div>
		)
	}
}

export default SliderArrow;