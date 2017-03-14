import React from 'react';

function TopSlideOne(props) {
	let backgroundStyle = {
		height: 600,
		backgroundImage: "url(https://images.unsplash.com/uploads/1413142095961484763cf/d141726c?dpr=2&auto=format&fit=crop&w=767&h=511&q=80&cs=tinysrgb&crop=)",
		backgroundSize: "cover",
		// backgroundPosition: "center"
	}

	return <div style={backgroundStyle} className="topSlide"></div>
}

export default TopSlideOne;