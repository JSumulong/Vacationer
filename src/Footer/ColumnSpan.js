import React, { Component } from 'react';

class ColumnSpan extends Component {
	displayDisclaimerModal() {
		const modal = document.querySelector('.disclaimer-modal');
		modal.style.display = "block";
	}
	render() {
		const style = {
			fontSize: 16,
			margin: 15,
			padding: 0,
			cursor: "pointer"
		}
		return (
			<p style={style} onClick={this.displayDisclaimerModal}>{this.props.content}</p>
		)
	}
}

export default ColumnSpan;