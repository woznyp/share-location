import React, { Component } from 'react';
import './map__component.scss';

export default class MapComponent extends Component {
	constructor(props) {
		super(props);
		this.state = { map: null };
		this.showUserLocation = this.showUserLocation.bind(this);
	}

	componentDidMount() {
		this.setState({
			map: new google.maps.Map(document.getElementById('map'), {
				zoom: 13,
				center: { lat: 52.4119254, lng: 16.9169527 },
			}),
		});

		window.navigator.geolocation.getCurrentPosition(this.showUserLocation);
	}

	showUserLocation({ coords }) {
		let image =
				'http://0.gravatar.com/avatar/479f9707441ad442fc8de2753d9091ae',
			marker = new google.maps.Marker({
				map: this.state.map,
				title: 'Paweł Woźny',
				position: { lat: coords.latitude, lng: coords.longitude },
				icon: image,
			});
		marker.setMap(this.state.map);
	}

	render() {
		return <div id="map" />;
	}
}
