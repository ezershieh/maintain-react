import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import IndexMenu from './component/IndexMenu';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<IndexMenu />, document.getElementById('root'));
registerServiceWorker();
