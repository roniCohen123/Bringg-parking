import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import ReactGA from "react-ga";

function initializeReactGA() {
    ReactGA.initialize('UA-137196628-1');
    ReactGA.pageview('/homepage');
    console.log('GA initialized');
}

ReactDOM.render(<App />, document.getElementById('root'));
initializeReactGA();

serviceWorker.unregister();
