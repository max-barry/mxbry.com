$(function() {
    $("body").on("mousedown", function(){
        console.log("Moused down");
        $("body").addClass("radial-menu-active");
    });
});