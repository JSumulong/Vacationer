import React, { Component } from 'react';
import ListItem from './ListItem';

class Header extends Component {
	stickyHeader() {
		const header = document.querySelector('.header-component');
		const headerPosition = header.offsetTop;
		function attachHeader() {
			if (window.scrollY >= headerPosition) {
				document.body.classList.add('fixed-header');
			} else {
				document.body.classList.remove('fixed-header');
			}
		}
		window.addEventListener('scroll', attachHeader);
	}
	componentDidMount() {
		this.stickyHeader();
	}
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
			<div className="header-component" style={outerDivStyle}>
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