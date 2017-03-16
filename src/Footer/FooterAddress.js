import React, { Component } from 'react';
import './footerAddress.css';

class FooterAddress extends Component {
	render() {
		const style = {
			width: "25%",
			textAlign: "left",
		}
		return (
			<div className="footer-address" style={style}>
				<p>Address:</p>
				<p>737035 Sunset Blvd.</p>
				<p>8th Floor</p>
				<p>San Francisco, CA 94122</p>
			</div>
		)
	}
}

export default FooterAddress;