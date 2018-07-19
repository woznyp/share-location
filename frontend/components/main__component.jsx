import React, { Component } from 'react';
import {
	Card,
	AppBar,
	Typography,
	createMuiTheme,
	MuiThemeProvider,
} from '@material-ui/core';
import MapComponent from './map__component.jsx';
import config from './../config.json';
import './main__component.scss';

const theme = createMuiTheme({
	typography: {
		fontFamily: ['"Open Sans"', 'sans-serif'],
	},
	palette: {
		primary: {
			main: '#2196f3',
			contrastText: '#fff',
		},
	},
	overrides: {
		MuiButton: {
			flat: {
				'&:hover': { backgroundColor: '#00a0cc' },
			},
			raised: {
				'&:hover': { backgroundColor: '#00a0cc' },
			},
		},
	},
});

export default class MainComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isMapScriptReady: false,
		};

		let googleMapsScript = document.createElement('script');
		googleMapsScript.src = `https://maps.googleapis.com/maps/api/js?key=${
			config.API_KEY
		}`;
		googleMapsScript.onload = () => {
			this.setState({ isMapScriptReady: true });
		};
		document.head.appendChild(googleMapsScript);
	}
	render() {
		return (
			<MuiThemeProvider theme={theme}>
				<AppBar>
					<Typography
						color="inherit"
						className="top__bar__header"
					>
						Share location
					</Typography>
				</AppBar>
				<Card>
					{this.state.isMapScriptReady ? <MapComponent /> : null}
				</Card>
			</MuiThemeProvider>
		);
	}
}
