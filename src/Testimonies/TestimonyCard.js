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
			flexDirection: "column",
			justifyContent: "center",
			alignItems: "center",
			height: 600,
			borderRight: "solid whitesmoke 1px",
			borderTop: "solid whitesmoke 1px"
		}
		const pStyle = {
			width: "50%"
		}
		return (
			<div className="testimonyCard" style={style}>
				<div>
					<TestimonyImage img={this.props.img}/>
				</div>
				<h1>{this.props.name}</h1>
				<p style={pStyle}>{this.props.blurb}</p>
			</div>
		)
	}
}

export default TestimonyCard;