$(function(jQuery) {

    // # fetchFeeds
    // Handles the resourcing and appending of activity feed items
    mb.activities = (function() {
        'use strict';

        function _calculate_initial_activities() {
            var initials = [],
                min_display;

            _.forEach(mb.services, function(service){
                min_display = _.first(service.content, service.initial);
                console.log(service);
                console.log(service.content);
                console.log(min_display);
                _.forEach(min_display, function(item){
                    _.remove(pub.all_activities, {id: item.id});
                });
                initials.push(min_display);
            });

            return _.shuffle(_.flatten(initials));
        }

        function _collate_fetch_promises() {
            var tmp = [];
            _.forEach(mb.services, function(service){
                tmp.push(service.fetch());
            });
            return tmp;
        }

        function _append_activity(item) {
            var tpl = activity_source({
                state: "initial",
                service: item.source,
                headline: item.title,
            });
            console.log(tpl);
            $(".activity").append(tpl);
        }

        // ## Public functions

        var pub = {
            // medium: [],
            // github: [],
            // twitter: [],
            all_activities: [],
            // initial_activities: [],
            // update_for_category: function() {
            //     console.log("Updating for category");
            // },
            reveal_items: function() {
                $(".activity .source-initial").addClass("source-enter");
            },
            initial_append: function() {
                console.log("Appending feeds initially");
                var initial_activities = _calculate_initial_activities();
                console.log(initial_activities);
                _.forEach(initial_activities, _append_activity);
            },
            mash_feeds: function() {
                console.log("Mashing feeds");
                var all_items = [].concat.apply([], _.pluck(mb.services, "content"));
                pub.all_activities = _.sortBy(all_items, "pubDate").reverse();
            },
            // #### fetch_all_feeds
            fetch_all_feeds: function(callback) {
                console.log("Fetching services");
                var fetch_promises = _collate_fetch_promises();
                $.when.apply($, fetch_promises).done(function() {
                    console.log("Fetched all services");
                    if (callback) {
                        callback();
                    }
                });
            }
        };

        // var active_feeds = [pub.medium, pub.github, pub.twitter];

        return pub;

    })(jQuery);

    mb.activities.fetch_all_feeds(function() {
        mb.activities.mash_feeds();
        mb.activities.initial_append();
        mb.activities.reveal_items();
    });

});
