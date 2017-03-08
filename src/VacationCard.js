import React, { Component } from 'react';

class VacationCard extends Component {
	render() {
		const style = {
			"background-url": `url(${this.props.image})`
		}
		return (
			<div style={style}>
				<h1>Hi there</h1>
			</div>
		)
	}
}

export default VacationCard;