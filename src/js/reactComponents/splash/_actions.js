import { randomNumber, AVAILABLE_GIFS, getGifUrl } from '../../parts/_utilities.js';

/**
Handle clicks on the XOXO splash column
*/
const revealMenu = function() {
    mx._body.toggleClass('lock').toggleClass('visible__splash_about');
    $(this).toggleClass('splash__active');
};

export function splashMenuDettach() {
    mx._body.off('click', revealMenu);
}

export function splashMenuAttach() {
    mx._body.on('click', '.splash__third[data-extra="show-menu"]', revealMenu);
}


/**
Set one of the hero letters off on a GIF flip
*/
export function splashLetterGif() {

    clearInterval(mx.GIFInterval);

    if (mx.device.isDesktop && Modernizr.backgroundcliptext) {

        let thirds = $('.splash__third');
        const AGL = AVAILABLE_GIFS.length;
        const clsGif = 'bg-clip';

        const update = (imgSrc = null) => {
            $(`.splash__third .${clsGif}`)
                .removeClass(clsGif)
                .css('background-image', '');

            thirds.eq(randomNumber(0, 3)).find('.splash__letter')
                .addClass(clsGif)
                .css('background-image', `url('${ getGifUrl(imgSrc || AVAILABLE_GIFS[randomNumber(0, AGL)]) }`);
        };

        let firstImage = AVAILABLE_GIFS[randomNumber(0, AGL)];
        var img = new Image(),
            im;

        img.onload = () => {

            update(firstImage);

            mx.GIFInterval = setInterval(update, 7000);

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
    this.element.classList.add('active');
    this.destroy();
};

export function revealHeaderOnScroll() {

    let headers = $('.splash--header .splash__title');

    headers.each((idx, el) => {
        new Waypoint({
            element: el,
            handler: revealHeader,
            offset: '50%'
        });
    });

};
