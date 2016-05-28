// Vendor
import DOMReady from 'detect-dom-ready';

// Application modules
import { initApplication } from './app.jsx';
import { initXO, initScroll, initGifFlip } from './_splash.js';
import { initActivities } from './activities/react.activity.jsx';
import { initWork } from './work/react.work.jsx';

DOMReady(() => {

    initApplication();

    // Splash content
    initXO();
    initScroll();
    initGifFlip();

    // Mount activities
    initActivities();

    // Mount work
    initWork();


});
