import React, { Component } from 'react';
import './nonMobileModal.css';

class NonMobileModal extends Component {
	render() {
		const backgroundStyle = {
			position: "fixed",
			top: 0,
			left: 0,
			width: "100%",
			height: "100%",
			backgroundColor: "black",
			color: "white"
		}
		const noticeStyle = {
			fontFamily: "'Gentium Basic', serif",
			margin: "10%"
		}
		return (
			<div className="non-mobile-modal display" style={backgroundStyle}>
				<div style={noticeStyle}>Notice: This website is not mobile ready just yet. Please visit this site on your desktop or laptop in full screen mode. Thanks!</div>
			</div>
		)
	}
}

export default NonMobileModal;
