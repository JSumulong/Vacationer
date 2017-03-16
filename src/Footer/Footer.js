import React, { Component } from 'react';
import FooterColumn from './FooterColumn';
import FooterAddress from './FooterAddress';
import FooterDisclaimer from './FooterDisclaimer';

class Footer extends Component {
	render() {
		const style = {
			display: "flex",
			flexDirection: "row",
			fontFamily: "'Raleway Dots', cursive",
			height: 300,
			width: "100%",
			paddingTop: 50,
			borderTop: "solid whitesmoke 1px",
			backgroundColor: "whitesmoke"
		}
		return (
			<div style={style}>
				<FooterColumn />
				<FooterAddress />
				<FooterDisclaimer />
			</div>
		)
	}
}

export default Footer;