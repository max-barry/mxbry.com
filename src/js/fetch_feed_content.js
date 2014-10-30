$(function(jQuery) {

    // # fetchFeeds
    // Handles the resourcing and appending of activity feed items
    mbry.activities = (function() {
        'use strict';

        // ## Private functions
        function handle_twitter(tweets) {
            console.log("Handling Twitter");
            var tmp,
                source = "twitter",
                category = "tweets";

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
                callback: function(data) {
                    handle_twitter(data);
                    def.resolve();
                }
            });

            return def;
        }


        function _handle_medium(response) {
            console.log("Handling Medium response");
            var results = response.query.results.item.reverse(),
                source = "medium",
                category = "articles",
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
                feed = encodeURIComponent("https://medium.com/feed/" + mbry.accounts.medium);

            $.ajax({
                url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%3D'" + feed + "'&format=json",
                dataType: "JSON",
                success: _handle_medium
            }).always(function() {
                def.resolve();
            });

            return def;
        }

        function handle_github(response) {
            var items = response.query.results.entry.reverse(),
                tmp, actions = [],
                source = "github", category = "code";

            for (var i = items.length - 1; i >= 0; i--) {
                tmp = items[i];
                actions.push({
                    source: source,
                    category: category,
                    pubDate: moment(new Date(tmp.published)).unix(),
                    repo: $(tmp.content.content).find(".css-truncate-target").attr("href").replace("https://github.com", ""),
                    title: tmp.title.content,
                    deck: $(tmp.content.content).find(".message blockquote").text().trim()
                });
            }

            $.merge(pub.github, _.uniq(actions, "repo"));
        }

        function _fetch_github() {
            console.log("Fetching Github");
            var def = $.Deferred(),
                feed = encodeURIComponent("https://github.com/" + mbry.accounts.github + ".atom");

            $.ajax({
                url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20atom%20where%20url%3D'" + feed + "'&format=json",
                dataType: "JSON",
                success: handle_github
            }).always(function() {
                def.resolve();
            });

            return def;
        }

        // ## Public functions

        var pub = {
            medium: [],
            github: [],
            twitter: [],
            all_activities: [],
            update_for_category: function() {
                console.log("Updating for category");
            },
            initial_append: function() {
                console.log("Appending feeds initially");
            },
            mash_feeds: function() {
                console.log("Mashing feeds");
                var all_items = [].concat.apply([], active_feeds);
                pub.all_activities = _.sortBy(all_items, "pubDate").reverse();
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
