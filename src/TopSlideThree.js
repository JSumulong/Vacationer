import React from 'react';

function TopSlideThree(props) {
	let backgroundStyle = {
		height: 600,
		backgroundImage: "url(https://images.unsplash.com/photo-1473951574080-01fe45ec8643?dpr=2&auto=format&fit=crop&w=1199&h=770&q=80&cs=tinysrgb&crop=)",
		backgroundSize: "cover",
		backgroundPosition: "center"
	}

	return <div style={backgroundStyle} className="topSlide"></div>
}

export default TopSlideThree;