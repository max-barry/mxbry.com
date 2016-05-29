// Vendor
import DOMReady from 'detect-dom-ready';

// Application modules
import { initApplication } from './app.jsx';
import { initXO, initScroll, initGifFlip, initSplashJump } from './_splash.js';
import { initActivities } from './activities/react.activity.jsx';
import { initWork } from './work/react.work.jsx';
import { initAbout } from './about/react.about.jsx';

DOMReady(() => {

    initApplication();

    // Splash content
    initXO();
    initScroll();
    initGifFlip();
    initSplashJump();

    // Mount about
    initAbout($('.about--hero')[0]);

    // Mount activities
    initActivities();

    // Mount work
    initWork();


});
