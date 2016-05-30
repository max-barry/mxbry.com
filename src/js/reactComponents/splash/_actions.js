export function splashMenuReveal() {
    mx._body.on('click', '.splash__third[data-extra="show-menu"]', function() {
        mx._body.toggleClass('lock').toggleClass('visible__splash_about');
        $(this).toggleClass('splash__active');
    });
}
