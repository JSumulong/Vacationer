import React, { Component } from 'react';

class ListItem extends Component {
	render() {
		const style = {
			"flex": 1,
			"color": "black",
			"height": 50,
			"display": "flex",
			"justifyContent": "center",
			"alignItems": "center",
		}
		return (
			<li style={style}>{this.props.content}</li>
		)
	}
}

export default ListItem;