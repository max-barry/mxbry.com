$(function() {
    $(".timeline").on("click", function(){
        $(".overview-lister")
        .addClass("timeline-transition")
        .toggleClass("timeline-view");
    });
});