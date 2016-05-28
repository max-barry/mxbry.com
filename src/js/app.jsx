// Vendor imports
import $ from 'jquery';
import jQuery from 'jquery';
import firebase from 'firebase';
import 'waypoints/lib/noframework.waypoints.min.js';

window.$ = $;
window.jQuery = jQuery;

// Application variables
window.mx = {};

// Application modules
import initForms from './_forms.js';
import { initOverlay } from './_overlay.js';
import { initHistory } from './_history.js';

export const initApplication = function() {

        // Initialise Firebase
        firebase.initializeApp({
            apiKey: 'AIzaSyDUjHTVLg3QZBJFbc1ryz57DJBe37eZgZ4',
            authDomain: 'mxbry-2016.firebaseapp.com',
            databaseURL: 'https://mxbry-2016.firebaseio.com',
            storageBucket: 'mxbry-2016.appspot.com',
        });

        // Push shared elements in to global object
        mx._main = $('main');
        mx._body = $('body');
        mx._html = $('html');
        mx._activity = $('#activity');
        mx._work = $('#work');
        mx._overlay = $('.overlay');
        mx._window = $(window);

        // Initialise form logic
        initForms();

        // History API
        initHistory();

        // Init overlay
        initOverlay();
};
