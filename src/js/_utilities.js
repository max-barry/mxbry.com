$(function() {
    mb.utils = (function() {
        'use strict';

        var pub = {
            remove_loader: function() {
                $(".loader").remove();
            },
            reached_floor: function(distance) {
                distance = distance || 350;
                return ($(document).height() - ($(window).height() + $(window).scrollTop())) < distance;
            }
        };

        return pub;
    })();
});