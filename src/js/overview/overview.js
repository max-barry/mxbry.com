// $(function() {
//     $(".view-wrap").on("click", function(){
//         var _this = $(this);
//         $(".view-wrap.active").removeClass("active");
//         _this.addClass("active");
//         $(".overview-lister")
//         .addClass("transition-overview")
//         .removeClass (function (index, css) {
//             return (css.match (/(^|\s)ow-\S+/g) || []).join(' ');
//         }).addClass("ow-" + _this.data("view"));
//     });
// });

// $(function() {
//     $(".overview-controls .control").on("click", function(){
//         $(".overview-filter").toggleClass("overview-filter-open");
//     });
// });

$(function() {
    $(".overview-controls li").on("click", function(){
        $(".overview-controls li.active").removeClass("active");
        $(this).addClass("active");
    });
});