import React from 'react';

function TopSlide(props) {
	let backgroundStyle = {
		height: 600,
		backgroundImage: `url(${props.imageUrl})`,
		backgroundSize: "cover",
		backgroundPosition: "center"
	}
	let spanStyle = {
		width: "100%",
		textAlign: "center",
		paddingTop: 10,
		paddingBottom: 10,
		fontSize: 40,
		fontFamily: "'Gentium Basic', serif",
		backgroundColor: "white"
	}
	return (
		<div style={backgroundStyle} className="topSlide">
			<div style={spanStyle}><span>Find Your Dream Getaway on Vacationer</span></div>
		</div>
	)
}

export default TopSlide;