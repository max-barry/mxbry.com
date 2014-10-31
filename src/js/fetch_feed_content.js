$(function(jQuery) {

    // # fetchFeeds
    // Handles the resourcing and appending of activity feed items
    mb.activities = (function() {
        'use strict';

        var min_tweets = 0,
            min_github = 1,
            min_medium = 1,
            activity_id = 0,
            activs_to_show = 6;

        // ## Private functions
        function _id_object() {
            activity_id++;
            return activity_id;
        }

        function _handle_twitter(tweets) {
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
                    deck: tmp.body,
                    id: _id_object()
                });
            }
        }

        function _fetch_twitter() {
            console.log("Fetching Twitter");
            var def = $.Deferred();

            $.tweetsFromWidget({
                widget: "420890443182649345",
                callback: function(data) {
                    _handle_twitter(data);
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
                    deck: $(tmp.description).find(".medium-feed-snippet").text(),
                    id: _id_object()
                });
            }
        }

        function _fetch_medium() {
            console.log("Fetching Medium");
            var def = $.Deferred(),
                feed = encodeURIComponent("https://medium.com/feed/" + mb.accounts.medium);

            $.ajax({
                url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%3D'" + feed + "'&format=json",
                dataType: "JSON",
                success: _handle_medium
            }).always(function() {
                def.resolve();
            });

            return def;
        }

        function _handle_github(response) {
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
                    deck: $(tmp.content.content).find(".message blockquote").text().trim(),
                    id: _id_object()
                });
            }

            $.merge(pub.github, _.uniq(actions, "repo"));
        }

        function _fetch_github() {
            console.log("Fetching Github");
            var def = $.Deferred(),
                feed = encodeURIComponent("https://github.com/" + mb.accounts.github + ".atom");

            $.ajax({
                url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20atom%20where%20url%3D'" + feed + "'&format=json",
                dataType: "JSON",
                success: _handle_github
            }).always(function() {
                def.resolve();
            });

            return def;
        }

        function _calculate_initial_activities() {
            var latest_medium = _.first(pub.medium);
            _.remove(pub.all_activities, {id: latest_medium.id});
            pub.initial_activities = [].concat.apply(latest_medium, _.first(pub.all_activities, activs_to_show - 1));

            /**
            Make sure activitites are not dominated by one source
            
            threshold (effetively a percentage) is the value above which
            there are "too many" occurences of a single source.
            */
            var source_counts = _.countBy(pub.initial_activities, "source"),
                threshold = 80, no_require_removing;
            _.forEach(source_counts, function(val, key){
                if ((val / activs_to_show) * 100 > threshold) {
                    no_require_removing = Math.ceil(val - ((threshold * activs_to_show) / 100));
                    // _.remove(pub.initial_activities, {id: key});
                    console.log(key);
                    console.log(no_require_removing);
                    // TODO: Remove x number of objs with source y
                    // TODO: Work out number of actives needed - number you now have after reductions = x. Find index of last item added (pre removals) and add next x from that index 
                }
            });
        }

        // ## Public functions

        var pub = {
            medium: [],
            github: [],
            twitter: [],
            all_activities: [],
            initial_activities: [],
            update_for_category: function() {
                console.log("Updating for category");
            },
            initial_append: function() {
                console.log("Appending feeds initially");
                _calculate_initial_activities();
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

    mb.activities.fetch_all_feeds(function() {
        mb.activities.mash_feeds();
        mb.activities.initial_append();
    });

});
