$(function() {
    $(".hp-takeover-trigger i").on("click", function(){
        $(this).parent().siblings("aside").toggleClass("active");
    });
});