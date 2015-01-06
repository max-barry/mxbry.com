$(function(jQuery) {

    // # fetchFeeds
    // Handles the resourcing and appending of activity feed items
    mb.activities = (function() {
        'use strict';

        var tpl_vars;

        // ### APPEND COLLECTED ITEMS TO DOM

        // #### _initial_append
        // Appends the initial set of items to the DOM
        function _initial_append() {
            var $activity_container = $(".activity");
            pub.initial_activities = _calculate_initial_activities();
            _.forEach(pub.initial_activities, function(item) {
                pub.append_activity($activity_container, item);
            });
        }

        // ### ANIMATE ITEMS IN VIEW
        // #### _post_entrance
        // Post animation housekeeping
        function _post_entrance($activities) {
            mb.utils.remove_loader();
            $(".activity .source-initial").attr("class", "");
            $(".filter").addClass("reveal-filter");
            $(".hp-ctas button").addClass("grow-in");
        }

        // #### _reveal_items
        // After appending the items to the DOM, animate the items in view
        function _reveal_items() {
            var i = 0,
                $initial_activities = $(".activity .source-initial");

            var revealInt = setInterval(function(){
                // console.log("Iteration: " + i);
                $($initial_activities.get(i)).addClass("source-enter");
                if (i == $initial_activities.length - 1) {
                    clearInterval(revealInt);
                    setTimeout(_post_entrance, activity_animate_time);
                } else {
                    i++;
                }
            }, 220);
        }

        // ### MANIPULATE COLLECTED SERVICES
        // #### _mash_feeds
        // Mashes the content of each service in to a single array
        function _mash_feeds() {
            var all_items = [].concat.apply([], _.pluck(mb.services, "content"));
            pub.all_activities = _.sortBy(all_items, "pubDate").reverse();
        }

        // #### _calculate_initial_activities
        // Find the items to surface initially
        function _calculate_initial_activities() {
            var initials = [],
                min_display;

            _.forEach(mb.services, function(service){
                min_display = _.first(service.content, service.initial);
                _.forEach(min_display, function(item){
                    _.remove(pub.all_activities, {id: item.id});
                });
                initials.push(min_display);
            });

            return _.shuffle(_.flatten(initials));
        }

        // #### _collate_fetch_promises
        // Return the promises of each 3rd party service call as an array
        function _collate_fetch_promises() {
            var tmp = [];
            _.forEach(mb.services, function(service){
                tmp.push(service.fetch());
            });
            return tmp;
        }

        // ## Public functions
        var pub = {
            all_activities: [],
            initial_activities: [],
            // #### _append_activity
            // Access Dot.js template and append it to the activity container
            append_activity: function($container, item) {
                tpl_vars = {
                    state: "initial",
                    service: item.source,
                    headline: item.title,
                    url: item.url,
                };
                if (item.deck) {
                    tpl_vars.deck = item.deck;
                }
                $container.append(activity_source(tpl_vars));
            },
            // #### fetch_all_feeds
            // Uses deferred promises to asynchronously fetch each 3rd party service
            fetch_all_feeds: function(callback) {
                // mb.utils.add_loader($(".hp-activities"));
                var fetch_promises = _collate_fetch_promises();
                $.when.apply($, fetch_promises).done(function() {
                    if (callback) {
                        callback();
                    }
                });
            }
        };

        if ($(".hp-activities").length) {
            pub.fetch_all_feeds(function() {
                _mash_feeds();
                _initial_append();
                _reveal_items();
            });
        }

        return pub;

    })(jQuery);
});
