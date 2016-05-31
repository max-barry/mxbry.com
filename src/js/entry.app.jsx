// Vendor imports
import $ from 'jquery';
import jQuery from 'jquery';
import firebase from 'firebase';
import 'waypoints/lib/noframework.waypoints.min.js';
import DOMReady from 'detect-dom-ready';

import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import ReactDOM from 'react-dom';

window.$ = $;
window.jQuery = jQuery;

// Application variables
window.mx = {};

// Application modules
import { detectDevice } from './parts/_utilities.js';

// React modules
import { Navigation } from './reactComponents/layouts/react.Navigation.jsx';
// import { Main } from './reactComponents/layouts/react.Main.jsx';
import { NotFound } from './reactComponents/parts/react.404.jsx';
import { Home } from './reactComponents/home/react.Home.jsx';
import { Work } from './reactComponents/work/react.Work.jsx';
import { WorkDetail } from './reactComponents/work/react.WorkDetail.jsx';
import { Active } from './reactComponents/active/react.Active.jsx';
import { About } from './reactComponents/about/react.About.jsx';

const initApplication = function() {

        // Initialise Firebase
        firebase.initializeApp({
            apiKey: 'AIzaSyDUjHTVLg3QZBJFbc1ryz57DJBe37eZgZ4',
            authDomain: 'mxbry-2016.firebaseapp.com',
            databaseURL: 'https://mxbry-2016.firebaseio.com',
            storageBucket: 'mxbry-2016.appspot.com',
        });

        // Push shared elements in to global object
        mx._root = document.getElementById('applicationRoot');
        mx._window = $(window);
        mx._html = $('html');
        mx._body = $('body');

        // Add a device class to html
        detectDevice();

        // React router
        ReactDOM.render((
            <Router history={ browserHistory }>
                <Route component={ Navigation }>
                    <Route path='/' component={ Home } />
                    <Route path='/work' component={ Work } />
                    <Route path='/work/:slug' component={ WorkDetail }/>
                    <Route path='/where-max-is-active' component={ Active } />
                    <Route path='/about' component={ About } />
                    <Route path="*" component={ NotFound } />
                </Route>
            </Router>
        ), mx._root);
};

DOMReady(() => {
    initApplication();
});
