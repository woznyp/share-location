import React, { Component } from 'react';
import {
	Card,
	AppBar,
	Typography,
	createMuiTheme,
	MuiThemeProvider,
} from '@material-ui/core';

import './main__component.scss';
import MapComponent from './map__component.jsx';

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
	}
	render() {
		return (
			<MuiThemeProvider theme={theme}>
				<AppBar>
					<Typography color="inherit" variant="headline" className="top__bar__header">Share location</Typography>
				</AppBar>
				<Card>
					<MapComponent></MapComponent>
				</Card>
			</MuiThemeProvider>
		);
	}
}
