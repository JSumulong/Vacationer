import React, { Component } from 'react';
import ColumnSpan from './ColumnSpan';

class FooterColumn extends Component {
	displayDisclaimerModal() {
		const modal = document.querySelector('.disclaimer-modal');
		modal.style.display = "block";
	}
	render() {
		const divStyle = {
			width: "33%"
		}
		return (
			<div className="footer-column" style={divStyle}>
				<h2>Vacationer</h2>
				<ColumnSpan content="About Us" /> 
				<ColumnSpan content="Contact" /> 
				<ColumnSpan content="Policies" /> 
				<ColumnSpan content="Travel Safety" /> 
				<ColumnSpan content="Help" />
			</div>
		)
	}
}

export default FooterColumn;