$(function() {
    $(".scale-takeover-trigger").on("click", function(){
        $(this).siblings("nav").toggleClass("active");
    });
});