import {
    randomNumber,
    AVAILABLE_GIFS,
    getGifUrl
} from './_utilities.js';
import _remove from 'lodash/remove';
import _sample from 'lodash/sample';
// import StickyFill from 'stickyfill';
// import scrollMonitor from 'scrollMonitor';

/**
Handle clicks on the XOXO splash column
*/
const splashXO = function() {
    mx._body.toggleClass('--lock');
    mx._main.toggleClass('visible__splash_navigation');
    $(this).toggleClass('splash__active');
};

export function initXO() {
    mx._body.on('click', '.splash__third[data-show-menu]', splashXO);
}

// TODO : http://tsuyoshiwada.github.io/sweet-scroll/

/**
Set one of the hero letters off on a GIF flip
*/

export function initGifFlip() {
    if (Modernizr.backgroundcliptext) {

        let thirds = $('.splash__third');
        const AGL = AVAILABLE_GIFS.length;
        const clsGif = '--bg-clip';

        const update = (imgSrc = null) => {
            // if (!mx._html.hasClass('scrolling__preactive')) {
                $(`.splash__third .${clsGif}`)
                    .removeClass(clsGif)
                    .css('background-image', '');

                thirds.eq(randomNumber(0, 3)).find('.splash__letter')
                    .addClass(clsGif)
                    .css('background-image', `url('${ getGifUrl(imgSrc || AVAILABLE_GIFS[randomNumber(0, AGL)]) }`);
            // }
        };

        let firstImage = AVAILABLE_GIFS[randomNumber(0, AGL)];
        var img = new Image(),
            im;

        img.onload = () => {

            update(firstImage);

            setInterval(update, 7000);

            AVAILABLE_GIFS.forEach((gifUrl) => {
                im = new Image();
                im.src = getGifUrl(gifUrl);
            });

        };
        img.src = getGifUrl(firstImage);

    }
}

/**
Handle scrolls for Splash
*/
const revealHeader = function(direction) {
    this.element.classList.add('splash__border');
    this.destroy();
};

export function initScroll() {

    let headers = $('.--header .splash__title');

    headers.each((idx, el) => {
        new Waypoint({
            element: el,
            handler: revealHeader,
            offset: '50%'
        });
    });

};
