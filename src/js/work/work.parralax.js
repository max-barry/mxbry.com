const STRENGTH = 25;

const calculateBgPosition = function(width, height, winWidth, winHeight, mouseX, mouseY, $el) {
    let pageX = mouseX - winWidth;
    let pageY = mouseY - winHeight;

    $el.css('background-position', `${ width*pageX*-1 -25 }px ${ height*pageY*-1 -50 }px`);
};


export function workParralax() {

    let wWidth = mx._window.width();
    let wHeight = mx._window.height();
    let width = STRENGTH / wWidth;
    let height = STRENGTH / wHeight;

    $('.work__profile.--large').mousemove((e) => {
        // console.log(e);
        calculateBgPosition(width, height, wWidth, wHeight, e.pageX, e.pageY, $(e.currentTarget));
    });
};
