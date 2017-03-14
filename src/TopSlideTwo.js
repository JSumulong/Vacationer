import React from 'react';

function TopSlideTwo(props) {
	let backgroundStyle = {
		height: 600,
		backgroundImage: "url(https://images.unsplash.com/photo-1483322314125-655a591f2d41?dpr=2&auto=format&fit=crop&w=1199&h=674&q=80&cs=tinysrgb&crop=)",
		backgroundSize: "cover",
		backgroundPosition: "center"
	}

	return <div style={backgroundStyle} className="topSlide"></div>
}

export default TopSlideTwo;