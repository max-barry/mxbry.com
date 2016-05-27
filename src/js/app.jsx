// Vendor imports
import $ from 'jquery';
import jQuery from 'jquery';
import DOMReady from 'detect-dom-ready';
import React from 'react';
import ReactDOM from 'react-dom';
// import firebase from 'firebase';
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
import { Work } from './work/react.work.jsx';


DOMReady(() => {


    // Initialise Firebase
    firebase.initializeApp({
        apiKey: 'AIzaSyDUjHTVLg3QZBJFbc1ryz57DJBe37eZgZ4',
        authDomain: 'mxbry-2016.firebaseapp.com',
        databaseURL: 'https://mxbry-2016.firebaseio.com',
        storageBucket: 'mxbry-2016.appspot.com',
    });

    // mx.fb = firebase;

    // Push shared elements in to global object
    mx._main = $('main');
    mx._body = $('body');
    mx._html = $('html');
    mx._activity = $('#activity');
    mx._work = $('#work');
    mx._window = $(window);

    // Initialise form logic
    initForms();

    // Initialise Splash logic
    initXO();
    initScroll();
    initGifFlip();

    // Mount activity component
    ReactDOM.render(<Activities />, mx._activity[0]);

    // Initialise work
    ReactDOM.render(<Work />, mx._work[0]);

    $('body').on('click', '.work__profile', function(){

        $(this).toggleClass('--reveal');
        // var $headline = $(this).find('.work__headline');
        // var yPos = $headline.offset().top - $(window).scrollTop();
        //
        // $headline.css({
        //     top: yPos,
        //     position: 'fixed',
        //     zIndex: 100
        // });
        //
        // $('.overlay').addClass('--reveal');
    });

});
