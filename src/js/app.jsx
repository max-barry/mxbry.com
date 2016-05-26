// Vendor imports
import $ from 'jquery';
import jQuery from 'jquery';
import DOMReady from 'detect-dom-ready';
import React from 'react';
import ReactDOM from 'react-dom';
import 'waypoints/lib/noframework.waypoints.min.js';

window.$ = $;
window.jQuery = jQuery;

// Application variables
window.mx = {};

// Application imports
import initForms from './forms.js';
import { initXO, initScroll, initGifFlip } from './splash.js';
import { getServices, renderServices } from './services/index.js';
import { Activities } from './services/react.activity.jsx';


DOMReady(() => {


    // Push shared elements in to global object
    mx._main = $('main');
    mx._body = $('body');
    mx._html = $('html');
    mx._activity = $('#activity');
    mx._work = $('#work');

    // Initialise Scrollimator
    // window.windowScrollimator = new Scrollimator(window, {});

    // Initialise form logic
    initForms();

    // Initialise Splash logic
    initXO();
    initScroll();
    initGifFlip();

    // Fetch services
    // getServices().then((content) => {
    //     renderServices(content);
    // });

    // Mount activity component
    ReactDOM.render(<Activities />, mx._activity[0]);

});
