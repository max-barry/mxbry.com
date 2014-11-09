$(function() {

    function toggle_filter_options() {
        reset_filter_options();
        $(this).parent().toggleClass("reveal-filter-options");
    }

    $(".filter .control").on("click", toggle_filter_options);

    function activate_filter_option() {
        reset_filter_options();
        $(this).addClass("active");
        transition_to();
    }

    function reset_filter_options() {
        $(".reveal-filter-options .round-icon.active").removeClass("active");
    }

    $("body").on("click", ".reveal-filter-options .round-icon:not(.control)", activate_filter_option);

    function transition_to() {
        $(".twitter")
        .addClass("transition-to-medium")
        .wait(400)
        .addClass("medium")
        .removeClass("twitter").removeClass("transition-to-medium");
    }

    $("body").on("click", ".reveal-filter-options .round-icon:not(.control)", transition_to);
});