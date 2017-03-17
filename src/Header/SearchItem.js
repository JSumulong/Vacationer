import React, { Component } from 'react';

class SearchItem extends Component {
	displaySearchModal() {
		const modal = document.querySelector('.search-modal');
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
			<li style={style} onClick={this.displaySearchModal}>{this.props.content}</li>
		)
	}
}

export default SearchItem;