export const populateOverlayWork = function(data) {
    mx._overlay.filter('#work-overlay').find('.work-overlay__title').text(data.title);
    mx._overlay.filter('#work-overlay').find('.work-overlay__body').html(data.body);
};

export const populateAboutOverlay = function(data) {
    // TODO : Add about as a component on the overlay
    // mx._overlay.find('.work-overlay__title').text(data.title);
    // mx._overlay.find('.work-overlay__body').html(data.body);
};


export const toggleOverlay = function() {

    mx._body.toggleClass('--lock');
    mx._overlay.toggleClass('--active');

};

export function initOverlay() {
    mx._body.on('click', '.overlay__close', toggleOverlay);
}
