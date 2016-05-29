// Vendor
import DOMReady from 'detect-dom-ready';

// Application modules
import { initApplication } from './app.jsx';
import { initScroll } from './_splash.js';
import { initWork } from './work/react.work.jsx';
import { initAbout } from './about/react.about.jsx';

DOMReady(() => {

    initApplication();

    // Splash content
    initScroll();

    // Mount work
    initWork();

    // Mount about
    initAbout(document.getElementById('aboutOverlayMount'));
});
