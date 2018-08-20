// PACKAGE DEPENDENCIES
import React from 'react';
import ReactDOM from 'react-dom';

// COMPONENTS

import App from './components/App';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
injectTapEventPlugin();
// STYLES

import 'normalize.css';
import './styles/app.scss';
import 'react-circular-progressbar/dist/styles.css';
ReactDOM.render(<MuiThemeProvider><App /></MuiThemeProvider>, document.getElementById('app'));