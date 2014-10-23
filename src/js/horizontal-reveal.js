$(function() {

    function toggle_filter_options() {
        $(this).parent().toggleClass("reveal-filter-options");
    }

    $(".filter .control").on("click", toggle_filter_options);
});