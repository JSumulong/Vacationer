import React from 'react';

function LeftArrow(props) {
	const LeftArrowStyle = {
		position: "absolute",
		left: 0,
		bottom: "50%",
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
		marginBottom: 5
	}
	return (
		<div style={LeftArrowStyle} onClick={props.prevSlide}>
			<span style={spanStyle}>&#8249;</span>
		</div>
	)
}

export default LeftArrow;