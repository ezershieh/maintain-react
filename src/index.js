import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Projects from './component/project/Projects';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Projects />, document.getElementById('root'));
registerServiceWorker();
