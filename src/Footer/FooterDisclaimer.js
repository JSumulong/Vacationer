import React, { Component } from 'react';
import './footerDisclaimer.css';

class FooterDisclaimer extends Component {
	render() {
		const style = {
			width: "33%",
			textAlign: "left",
		}
		return (
			<div className="footer-disclaimer" style={style}>
				<p>*Please note that this address is fake</p>
				<p>and the links will not reroute you to another</p>
				<p>site or to another page. The purpose of this</p>
				<p>vacationer website is to explore and express</p>
				<p>my interest and competency in react.js</p>
			</div>
		)
	}
}

export default FooterDisclaimer;
