import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/app/app';
import $ from 'jquery';
import registerServiceWorker from './registerServiceWorker';
global.jQuery = global.$ = $;
require('bootstrap/dist/css/bootstrap.css');
require('font-awesome/css/font-awesome.css');
require('bootstrap');
//require('./scripts/sb-admin-2.js');


ReactDOM.render(<App />, document.getElementById('wrapper'));
registerServiceWorker();
