import React, { Component } from 'react';
import ListItem from './ListItem';
import './header.css';

class Header extends Component {
	displayDisclaimerModal() {
		const modal = document.querySelector('.disclaimer-modal');
		modal.style.display = "block";
	}
	stickyHeader() {
		const header = document.querySelector('.header-component');
		const headerPosition = header.offsetTop;
		function attachOrRemoveHeader() {
			if (window.scrollY >= headerPosition) {
				document.body.style.paddingTop = header.offsetHeight + "px";
				document.body.classList.add('fixed-header');
			} else {
				document.body.style.paddingTop = 0;
				document.body.classList.remove('fixed-header');
			}
		}
		window.addEventListener('scroll', attachOrRemoveHeader);
	}
	componentDidMount() {
		this.stickyHeader();
	}
	render() {
		const outerDivStyle = {
			"backgroundColor": "white",
			"height": 75,
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
					<div className="header-logo"><b>Vacationer</b></div>
					<ListItem content="Home" onClick={this.displayDisclaimerModal}/>
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