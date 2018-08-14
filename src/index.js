import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import './index.styles.js';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
