import React, { Component } from 'react';
import './footerColumn.css';

class FooterColumn extends Component {
	render() {
		const divStyle = {

		}
		return (
			<div className="footer-column" style={divStyle}>
				<p>About Us</p>
				<p>Contact</p>
				<p>Policies</p>
				<p>Travel Safety</p>
				<p>Instagram</p>
				<p>Facebook</p>
				<p>Help</p>
			</div>
		)
	}
}

export default FooterColumn;