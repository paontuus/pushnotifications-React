import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {InitNotification} from './utils/initNotification.js'

InitNotification();
ReactDOM.render(<App />, document.getElementById('root'));
