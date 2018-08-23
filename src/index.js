import React from 'react';
import ReactDOM from 'react-dom';
import Loadable from 'react-loadable';
import registerServiceWorker from './registerServiceWorker';
import './index.styles.js';
import { LoadingHome } from './components/Loading';

const App = Loadable({
    loader: () => import('./containers/App'),
    loading: LoadingHome
});

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
