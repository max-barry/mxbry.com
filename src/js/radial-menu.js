
$(function() {
    // var DESKTOP_DBEUG = true,
        // event_start = DESKTOP_DBEUG ? "mousedown": "touchstart",
        // event_end = DESKTOP_DBEUG ? "mouseup":  "touchend";

    var $window = $(window),
        $body = $("body"),
        loading_time = 1500,
        radial_loader = "<div class = \"radial-loader\"></div>";

    function _calculate_touch_x_y(evt) {
        console.log(evt.originalEvent);
        var event_type_is_mouse = evt.originalEvent.type.lastIndexOf("mouse", 0) === 0,
            xval = event_type_is_mouse ? evt.pageX: evt.originalEvent.touches[0].pageX,
            yval = event_type_is_mouse ? evt.pageY: evt.originalEvent.touches[0].pageY;
        return {
            x: xval,
            y: yval,
        };
    }

    function hide_menu() {
        console.log("Hiding menu");
        $body.removeClass("radial-menu-active");
    }

    function show_menu(evt) {
        // alert("Showing menu");
        var xy = _calculate_touch_x_y(evt),
            leftval =  xy.x - ($(".radial-mobile-menu li").width() / 2);
        clear_loader();
        $(".radial-mobile-menu").css({
            position:"absolute",
            top: xy.y,
            left: leftval
        });
        $body.addClass("radial-menu-active");
    }

    function load_menu(evt) {
        console.log("Loading menu");
        var $new_loader = $(radial_loader),
            xy = _calculate_touch_x_y(evt);
        $new_loader.css({
            position: "absolute",
            top: xy.y,
            left: xy.x
        });
        $body.append($new_loader);
    }

    function clear_loader() {
        console.log("Clearing loader");
        if ($(".radial-loader").length) {
            $(".radial-loader").remove();
        }
    }


    // @link http://stackoverflow.com/a/10409126

    $window.on("touchstart mousedown", function(e) {
        var target = $(e.target),
            clicking_menu = target.is(".radial-mobile-menu") || target.is(".radial-mobile-menu *") ? true : false,
            menu_active = $body.hasClass("radial-menu-active");
        if (menu_active && !clicking_menu) {
            hide_menu();
        } else if (!menu_active) {
            clearTimeout(this.downTimer);
            load_menu(e);
            this.downTimer = setTimeout(function(){
                show_menu(e);   
            }, loading_time);
        }
    }).on("touchend mouseup", function(e) {
        clear_loader();
        clearTimeout(this.downTimer);
    });

});

// $(function() {
//     $(window).on("touchstart", function(){
//         alert("touchstart");
//     });
// });