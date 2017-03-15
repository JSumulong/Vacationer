import React, { Component } from 'react';
import TestimonyImage from './TestimonyImage';

class TestimonyCard extends Component {
	render() {
		const style = {
			width: "40%",
			margin: 0,
			padding: 0,
			flex: 1,
			display: "flex",
			justifyContent: "center"
		}
		return (
			<div className="testimonyCard" style={style}>
				<TestimonyImage img={this.props.img} alt="testimony image"/>
			</div>
		)
	}
}

export default TestimonyCard;