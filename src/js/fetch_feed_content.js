$(function(jQuery) {

    // function fetch_medium() {
    //     var result = {},
    //         feed = encodeURIComponent("https://medium.com/feed/" + mbry.accounts.medium),
    //         def = $.Deferred();
        
    //     $.ajax({
    //         url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%3D'" + feed + "'&format=json",
    //         dataType: "JSON",
    //         success: function(response) {
    //             result = response;
    //             // result.status = response.responseStatus;
    //             // if (result.status == 200) {
    //             //     var data = response.responseData;
    //             //     result.entries = data.feed.entries;
    //             //     result.feed = {
    //             //         title: data.feed.title,
    //             //         description: data.feed.description,
    //             //         author: data.feed.author,
    //             //         link: data.feed.link
    //             //     };
    //             // }
    //         }
    //     }).done(function(){
    //         mbry.social.medium = result;
    //         def.resolve();
    //     });

    //     return def;
    // }

    // fetch_medium().done(function(){
    //     console.log(mbry.social.medium);
    // });

// # fetchFeeds
// Handles the resourcing and appending of activity feed items
mbry.activities = (function() {
    'use strict';

    // ## Private functions
    function handle_twitter(tweets) {
        console.log("Handling Twitter");
        var tmp,
            source = "twitter", category = "tweets";

        tweets.reverse();

        for (var i = tweets.length - 1; i >= 0; i--) {
            tmp = tweets[i];
            pub.twitter.push({
                source: source,
                category: category,
                url: tmp.url,
                title: "twitter title TBD",
                pubDate: moment(new Date(tmp.pub_date)).unix(),
                deck: tmp.body
            });
        }
    }

    function _fetch_twitter() {
        console.log("Fetching Twitter");
        var def = $.Deferred();

        $.tweetsFromWidget({
            widget: "420890443182649345",
            callback: function(data){
                handle_twitter(data);
                def.resolve();
            }
        });

        return def;
    }
    

    function _handle_medium(response) {
        console.log("Handling Medium response");
        var results = response.query.results.item.reverse(),
            source = "medium", category = "articles",
            tmp;

        for (var i = results.length - 1; i >= 0; i--) {
            tmp = results[i];
            pub.medium.push({
                source: source,
                category: category,
                url: tmp.link,
                title: tmp.title,
                pubDate: moment(new Date(tmp.pubDate)).unix(),
                deck: $(tmp.description).find(".medium-feed-snippet").text()
            });
        }
    }

    function _fetch_medium() {
        console.log("Fetching Medium");
        var def = $.Deferred(),
            result = {},
            feed = encodeURIComponent("https://medium.com/feed/" + mbry.accounts.medium);
        
        $.ajax({
            url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%3D'" + feed + "'&format=json",
            dataType: "JSON",
            success: _handle_medium
        }).always(function(){
            def.resolve();
        });

        return def;
    }

    function handle_github() {
        console.log("Handling Twitter");
    }

    function _fetch_github() {
        console.log("Fetching Github");
        var def = $.Deferred();

        def.resolve();
        return def;
    }

    // ## Public functions

    var pub = {
        medium: [],
        github: [],
        twitter: [],
        all_activities: [],
        update_for_category: function(){
            console.log("Updating for category");
        },
        initial_append: function(){
            console.log("Appending feeds initially");
        },
        mash_feeds: function() {
            console.log("Mashing feeds");
            var all_items = [].concat.apply([], active_feeds);
            pub.all_activities = _.sortBy(all_items, "pubDate");
        },
        // #### fetch_all_feeds
        fetch_all_feeds: function(callback) {
            $.when(_fetch_medium(), _fetch_github(), _fetch_twitter()).done(function() {
                if (callback) {
                    callback();
                }
            });
        }
    };

    var active_feeds = [pub.medium, pub.github, pub.twitter];

    return pub;

})(jQuery);

    mbry.activities.fetch_all_feeds(function() {
        mbry.activities.mash_feeds();
        mbry.activities.initial_append();
    });

});