$(function() {
    var $bottom_sheet = $(".bottom-sheet"),
        bottom_sheet_active_class = "bottom-sheet-active";

    $(".bottom-sheet-trigger").on("click", function(){
        $bottom_sheet.toggleClass(bottom_sheet_active_class);
    });
    $(".bottom-sheet-close-trigger").on("click", function(){
        $bottom_sheet.removeClass(bottom_sheet_active_class);
    });

});