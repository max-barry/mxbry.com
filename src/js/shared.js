$(function() {
    $(".scale-takeover-trigger").on("click", function(){
        $(this).siblings("nav").toggleClass("active");
    });

    if ($("[data-random-project]").length) {
        mb.utils.generate_random_project();
    } else {
        console.log("Not on this page.");
    }
});