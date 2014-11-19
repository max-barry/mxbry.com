$(function() {
    $(".view-wrap").on("click", function(){
        var _this = $(this);
        $(".view-wrap.active").removeClass("active");
        _this.addClass("active");
        $(".overview-lister")
        .addClass("transition-overview")
        .removeClass (function (index, css) {
            return (css.match (/(^|\s)ow-\S+/g) || []).join(' ');
        }).addClass("ow-" + _this.data("view"));
    });
});
