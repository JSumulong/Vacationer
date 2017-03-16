import React, { Component } from 'react';

class ListItem extends Component {
	displayDisclaimerModal() {
		const modal = document.querySelector('.disclaimer-modal');
		modal.style.display = "block";
	}
	render() {
		const style = {
			"flex": 1,
			"color": "black",
			"height": 50,
			"display": "flex",
			"justifyContent": "center",
			"alignItems": "center",
			cursor: "pointer"
		}
		return (
			<li style={style} onClick={this.displayDisclaimerModal}>{this.props.content}</li>
		)
	}
}

export default ListItem;