import React, { Component } from 'react';
import data from '../data';
import VacationCard from '../VacationCard/VacationCard';

class SearchModal extends Component {
	constructor(props) {
		super(props);

		this.state = {
			value: ''
		}
		this.handleChange = this.handleChange.bind(this);
	}
	handleChange(event) {
		this.setState({value: event.target.value});
	}
	closeSearchModal() {
		const modal = document.querySelector('.search-modal');
		modal.style.display = "none";
	}
	render() {
		const backgroundStyle = {
			display: "none",
			position: "fixed",
			top: 0,
			left: 0,
			backgroundColor: "rgba(0, 0, 0, 0.5)",
			height: "100%",
			width: "100%",
			fontFamily: "'Gentium Basic', serif",
			zIndex: 2
		}
		const containerStyle = {
			position: "fixed",
			left: "3%",
			top: 0,
			backgroundColor: "white",
			width: "95%",
			height: "100%",
			paddingTop: "1%",
			display: "flex",
			flexDirection: "column"
		}
		const closeModalStyle = {
			position: "absolute",
			marginTop: 0,
			top: "1%",
			right: "2%",
			fontSize: 30,
			cursor: "pointer"
		}
		const headerStyle = {
			width: "100%",
			display: "flex",
			flexDirection: "row"
		}
		const h1Style = {
			display: "inline",
			flex: 3,
			margin: 0,
			marginLeft: "10%",
			padding: 0
		}
		const inputStyle = {
			fontSize: 16,
			padding: 0,
			paddingLeft: "1%",
			marginTop: 0,
			marginBottom: 0,
			marginRight: "20%",
			marginLeft: 0,
			height: 30,
			flex: 1
		}
		const displayVacationStyle = {
			marginTop: 20,
			width: "100%",
			height: "100%",
			overflow: "hidden",
			display: "flex",
			flexDirection: "row",
			flexWrap: "wrap",
		}
		return (
			<div className="search-modal" style={backgroundStyle}>
				<div style={containerStyle}>
					<p onClick={this.closeSearchModal} style={closeModalStyle}>&times;</p>
					<div style={headerStyle}>
						<h1 style={h1Style}>Search for your dream vacation now!</h1>
						<input style={inputStyle} type="text" placeholder="Search" onChange={this.handleChange}/>
					</div>
					<div style={displayVacationStyle}>
						{data.vacations
							.map(vacation => {
							return <VacationCard data={vacation} />
						})}
					</div>
				</div>
			</div>
		)
	}
}

export default SearchModal;