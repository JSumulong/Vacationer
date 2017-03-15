import React, { Component } from 'react';
import ListItem from './ListItem';

class Header extends Component {
	render() {
		const outerDivStyle = {
			"backgroundColor": "white",
			"height": 50,
			fontFamily: "'Pacifico', cursive",
			fontSize: 25
		}
		const ulStyle = {
			"listStyle": "none",
			margin: 0,
			"padding": 5,
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
					<ListItem content="Cart"/>
				</ul>
			</div>
		)
	}
}

export default Header;