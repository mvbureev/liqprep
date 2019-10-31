import React from 'react';
import ReactDOM from 'react-dom';
import App from './client/App';
import * as serviceWorker from './serviceWorker';

const app = React.createElement(App);
ReactDOM.render(app, document.getElementById('root'));

serviceWorker.register();
