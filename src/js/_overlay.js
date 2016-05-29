export const populateOverlayWork = function(data) {
    var ov = mx._overlay.filter('#work-overlay');
    ov.find('.work-overlay__title').text(data.title);
    ov.find('.work-overlay__body').html(data.body);
};

export const populateAboutOverlay = function(data) {
    // TODO : Add about as a component on the overlay
    // mx._overlay.find('.work-overlay__title').text(data.title);
    // mx._overlay.find('.work-overlay__body').html(data.body);
    var ov = mx._overlay.filter('#about-overlay');

    if (!ov.find('.about__content').length) {
        // TODO : Prepend with a React component
        ov.prepend('ABOUT GOES HERE');
    }
};


export const toggleOverlay = function() {

    mx._body.toggleClass('--lock');
    mx._overlay.toggleClass('--active');

};

export function initOverlay() {
    mx._body
    .on('click', '.overlay__close', toggleOverlay)
    .on('click', '[data-overlay]', function(){
        switch ($(this).data('overlay')) {
            case 'about':
                populateAboutOverlay();
                toggleOverlay();
                break;
            default:
        }
    });

    mx._window.on('popstate', (e) => {console.log(e.originalEvent);});
}
