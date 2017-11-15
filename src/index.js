import React from 'react';
import ReactDOM from 'react-dom';
import './theme/index.css';

import Main from './Main';  // 页面入口
import {store} from './redux/create';
import { Provider } from 'react-redux';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Provider store={store}><Main /></Provider>, document.getElementById('root'));

registerServiceWorker();
