$(function() {

    function toggle_filter_options() {
        reset_filter_options();
        $(this).parent().toggleClass("reveal-filter-options");
    }

    $(".filter .control").on("click", toggle_filter_options);

    function activate_filter_option() {
        reset_filter_options();
        $(this).addClass("active");
    }

    function reset_filter_options() {
        $(".reveal-filter-options .round-icon.active").removeClass("active");
    }

    $("body").on("click", ".reveal-filter-options .round-icon:not(.control)", activate_filter_option);
});