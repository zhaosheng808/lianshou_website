import React from 'react';
import ReactDOM from 'react-dom';
import './theme/index.css';
// import App from './containers/App';
import Routers from './router';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Routers />, document.getElementById('root'));
registerServiceWorker();
