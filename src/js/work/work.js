// link http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
$(function() {
    // $(".work-article").addClass("fade-in");
function isElementInViewport (el, buffer) {

    //special bonus for those using jQuery
    if (typeof jQuery === "function" && el instanceof jQuery) {
        el = el[0];
    }

    var rect = el.getBoundingClientRect();

    var top_val = buffer ? rect.top + buffer: rect.top;

    return (
        top_val <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.bottom >= 0
    );
}



$(window).on('DOMContentLoaded load resize scroll', function(){
    // console.log(isElementInViewport($(".dog"))); 
});

});