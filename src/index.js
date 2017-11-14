import React from 'react';
import ReactDOM from 'react-dom';
import './theme/index.css';
// import App from './containers/App';
import Routers from './router';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import todoApp from './redux/reducers';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(todoApp);
console.log(store, 'store');
console.log(store.getState(), 'getState');
ReactDOM.render(<Provider store={store}><Routers /></Provider>, document.getElementById('root'));
registerServiceWorker();
