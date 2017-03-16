import React, { Component } from 'react';

class DisclaimerModal extends Component {
	closeModal() {
		const modal = document.querySelector('.disclaimer-modal');
		modal.style.display = "none";
	}
	render() {
		const backgroundStyle = {
			backgroundColor: "rgba(0, 0, 0, 0.5)",
			display: "none",
			position: "fixed",
			top: 0,
			left: 0,
			height: "100%",
			width: "100%",
		}
		const containerStyle = {
			backgroundColor: "whitesmoke",
			position: "fixed",
			top: 200,
			left: "33%",
			width: "33%",
			fontFamily: "'Josefin Sans', sans-serif",
			fontSize: 20
		}
		const spanStyle = {
			float: "right",
			marginRight: 10,
			marginTop: 5,
			cursor: "pointer"
		}
		const pStyle = {
			margin: 30 
		}
		return (
			<div className="disclaimer-modal" style={backgroundStyle}>
				<div style={containerStyle}>
					<span style={spanStyle} onClick={this.closeModal}>&times;</span>
					<p style={pStyle}>The functionality of this button was not
					relevant to the goals of this project and will not redirect,
					rerender, or affect the browser in any way apart from 
					displaying this notice.</p>
					<p style={pStyle}>Try clicking on the "Search" option in the header or any of the arrows on the image sliders.</p>
				</div>
			</div>
		)
	}
}

export default DisclaimerModal;