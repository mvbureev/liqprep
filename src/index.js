import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const app = React.createElement(App);
ReactDOM.render(app, document.getElementById('root'));

serviceWorker.register();
