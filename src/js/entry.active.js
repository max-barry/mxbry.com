// Vendor
import DOMReady from 'detect-dom-ready';

// Application modules
import { initApplication } from './app.jsx';
import { initScroll } from './_splash.js';
import { initActivities } from './activities/react.activity.jsx';
import { initAbout } from './about/react.about.jsx';

DOMReady(() => {

    initApplication();

    // Splash content
    initScroll();

    // Mount activities
    initActivities();

    // Mount about
    initAbout(document.getElementById('aboutOverlayMount'));

});
