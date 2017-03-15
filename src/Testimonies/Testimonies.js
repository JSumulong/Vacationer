import React, { Component } from 'react';
import testimonyData from './testimonyData';
import TestimonyCard from './TestimonyCard';

class Testimonies extends Component {
	render() {
		const containerStyle = {
			width: "100%",
			fontFamily: "'Raleway Dots', cursive",
			borderTop: "solid lightgray 1px"
		}
		const h1Style = {
			marginTop: 100,
			marginBottom: 120
		}
		const flexStyle = {
			width: "100%",
			display: "flex",
			justifyContent: "center"
		}
		return (
			<div style={containerStyle}>
				<h1 style={h1Style}>Hear what people have to say about Vacationer</h1>
				<div style={flexStyle}>
					{testimonyData.testimonies.map((Testimony) => {
						return (
							<TestimonyCard 
								img={Testimony.img} 
								name={Testimony.name} 
								blurb={Testimony.blurb} 
							/>
						)
					})}
				</div>
			</div>	
		)
	}
}

export default Testimonies;