export const populateOverlayWork = function(data) {
    var ov = mx._overlay.filter('#work-overlay');
    ov.find('.work-overlay__title').text(data.title);
    ov.find('.work-overlay__body').html(data.body);
};


export const toggleOverlay = function(e, f) {

    f = !!f ? f : $(this).closest('.overlay');

    console.log(f);

    mx._body.toggleClass('lock');
    mx._overlay.filter(f).toggleClass('active');

};

export function initOverlay() {
    mx._body
    .on('click', '.overlay__close', toggleOverlay)
    .on('click', '[data-overlay]', function(){
        toggleOverlay(this, $(this).data('overlay'));
    });

    mx._window.on('popstate', (e) => {console.log(e.originalEvent);});
}
