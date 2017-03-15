import React from 'react';

function RightArrow(props) {
	const RightArrowStyle = {
position: "absolute",
		right: 0,
		bottom: "47%",
		width: 40,
		height: 90,
		cursor: "pointer",
		color: "white",
		backgroundColor: "rgba(0, 0, 0, 0.5)",
		fontSize: 50,
		display: "flex",
		justifyContent: "center",
		alignItems: "center"
	}
	const spanStyle = {
		padding: 0,
		marginBottom: 15
	}

	return (
		<div style={RightArrowStyle} onClick={props.nextSlide}>
			<span style={spanStyle}>&#8250;</span>
		</div>
	)
}

export default RightArrow;