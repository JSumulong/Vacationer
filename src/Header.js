import React, { Component } from 'react';
import ListItem from './ListItem';

class Header extends Component {
	render() {
		const outerDivStyle = {
			"backgroundColor": "white",
			"height": 50
		}
		const ulStyle = {
			"listStyle": "none",
			"padding": 0,
			"display": "flex",
			"justifyContent": "center",
			"alignItems": "center"
		}
		return (
			<div style={outerDivStyle}>
				<ul style={ulStyle}>
					<ListItem content="Home"/>
					<ListItem content="About Us"/>
					<ListItem content="Search"/>
					<ListItem content="Help"/>
					<ListItem content="Shopping Cart"/>
				</ul>
			</div>
		)
	}
}

export default Header;