import React from 'react';

function TopSlide(props) {
	let backgroundStyle = {
		height: 600,
		backgroundImage: `url(${props.imageUrl})`,
		backgroundSize: "cover",
		backgroundPosition: "center"
	}

	return <div style={backgroundStyle} className="topSlide"></div>
}

export default TopSlide;