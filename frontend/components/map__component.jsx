import React, { Component } from 'react';
import './map__component.scss';
import communication__service from '../services/communication__service';
import { Button } from '@material-ui/core';

export default class MapComponent extends Component {
	constructor(props) {
		super(props);
		this.state = { map: null };
		this.showUserLocation = this.showUserLocation.bind(this);
		this.communicationService = communication__service.registerObserver(
			this
		);
		this.prevMarker = null;
	}

	componentDidMount() {
		this.setState({
			map: new google.maps.Map(document.getElementById('map'), {
				zoom: 13,
				center: { lat: 52.4119254, lng: 16.9169527 },
			}),
		});
	}

	handleNewUserLocation() {
		window.navigator.geolocation.getCurrentPosition(({ coords }) => {
			this.communication__service.send({
				title: 'Paweł Woźny',
				latitude: coords.latitude,
				longitude: coords.longitude,
			});
		});
	}

	notify(data) {
		this.showUserLocation({
			coords: { latitude: data.latitude, longitude: data.longitude },
			title: data.title,
		});
	}

	showUserLocation({ coords, title }) {
		if (this.prevMarker) {
			this.prevMarker.setMap(null);
		}

		let image =
			'http://0.gravatar.com/avatar/479f9707441ad442fc8de2753d9091ae';
		this.prevMarker = new google.maps.Marker({
			map: this.state.map,
			title: title,
			position: { lat: coords.latitude, lng: coords.longitude },
			icon: {
				url: image,
				scaledSize:
					window.orientation !== undefined
						? new google.maps.Size(70, 70)
						: new google.maps.Size(50, 50),
			},
		});

		this.prevMarker.setMap(this.state.map);
	}

	render() {
		return (
			<React.Fragment>
				<Button variant="contained" color="primary" id="share__button" onClick={this.handleNewUserLocation.bind(this)}>Send location</Button>
				<div id="map" />
			</React.Fragment>
		);
	}
}
