// $(function() {

//     // Load Medium
//     $.ajax({
//         url: "https://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=100&q=" + encodeURIComponent(mb.medium_feed),
//         dataType: "JSONP",
//         success: function(resp) {
//             mb.medium_entries = resp.responseData.feed.entries;
//         }
//     });

// });


// function tweets_from_widget(widget_id) {
//     var tweets;

//     $.ajax({
//         url: "https://cdn.syndication.twimg.com/widgets/timelines/" + widget_id,
//         dataType: "JSONP",
//         success: build_tweet_objects
//     });

// }

;(function( $ ){

if (!$.tweets_from_widget) {
    $.tweets_from_widget = {};
}

// https://cdn.syndication.twimg.com/widgets/timelines/420890443182649345

$.tweets_from_widget = (function(widget_id) {
    'use strict';

    var tweets = [];

    if (!widget_id || widget_id === undefined) {
        throw("No widget ID supplied");
    }

    function _build_tweet_objects(resp) {
        console.log("Building tweets");
        console.log(resp);
    }
    
    function _fetch_tweets() {
        console.log("Fetching tweets");
        $.ajax({
            url: "https://cdn.syndication.twimg.com/widgets/timelines/" + widget_id,
            dataType: "JSONP",
            success: _build_tweet_objects
        });
    }

    _fetch_tweets();

    return tweets;
});

//   $.tweets_from_widget = function(widget_id) {


//   };
})( jQuery );

