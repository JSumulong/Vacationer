import React, { Component } from 'react';
import './footerColumn.css';

class FooterColumn extends Component {
	render() {
		const divStyle = {
			width: "33%"
		}
		return (
			<div className="footer-column" style={divStyle}>
				<h2>Vacationer</h2>
				<p>About Us</p>
				<p>Contact</p>
				<p>Policies</p>
				<p>Travel Safety</p>
				<p>Help</p>
			</div>
		)
	}
}

export default FooterColumn;