/*
Fetches and creates objects representing Tweets within a Twitter widget.

@example    $.tweets_from_widget({
                widget_id:"420890443182649345",
                slim:true
            });

@returns Array of Tweet objects. Each object contains (at a minimum) body and pub_date of the Tweet
*/
;(function($) {

    var defaults = {
        widget: null,
        author: true,
        slim: false,
        callback: null
    };

    if (!$.tweets_from_widget) {
        $.tweets_from_widget = {};
    }

    $.tweetsFromWidget = function(options) {
        'use strict';

        var tweets = [],
            settings = $.extend({}, defaults, options); 

        if (!settings.widget || settings.widget === undefined) {
            throw ("No widget ID supplied");
        } else if (typeof settings.widget != "string") {
            throw ("Widget ID must be supplied as string, due to rounding limits of Javascript");
        }

        function _build_tweet_objects(resp) {

            if (resp.headers.status != 200) {
                throw ("Twitter service returned error");
            }

            var tweet_elements = $(resp.body).find(".timeline-TweetList-tweet"),
                tmp_element, tmp_tweet, tmp_scrnname, tmp_id,
                extra_details, author_details;

            for (var i = tweet_elements.length - 1; i >= 0; i--) {
                tmp_element = $(tweet_elements[i]);
                tmp_tweet = {};
                
                tmp_tweet.body = tmp_element.find(".timeline-Tweet-text").text();
                tmp_tweet.pub_date = tmp_element.find("time").attr("datetime");

                tmp_scrnname = tmp_element.find(".TweetAuthor-screenName").text();
                tmp_id = tmp_element.find(".timeline-Tweet").data("tweet-id");

                if (!settings.slim) {
                    extra_details = {
                        id: tmp_id,
                        url: "https://twitter.com/" + tmp_scrnname.replace("@", "").toString() + "/status/" + tmp_id
                    };

                    if (tmp_element.find(".retweet-credit").length) {
                        extra_details.retweet = true;
                    }
                }

                if (!settings.slim && settings.author) {
                    author_details = {
                        author: {
                            username: tmp_scrnname,
                            name: tmp_element.find(".TweetAuthor-name").text(),
                            profile_image: tmp_element.find(".TweetAuthor-avatar img").attr("data-src-1x"),
                            retina_profile_image: tmp_element.find(".TweetAuthor-avatar img").attr("data-src-2x")
                        }
                    };
                }

                $.extend(tmp_tweet, extra_details, author_details);

                tweets.push(tmp_tweet);
            }

        }

        $.ajax({
            url: "https://cdn.syndication.twimg.com/widgets/timelines/" + settings.widget,
            dataType: "JSONP",
            success: _build_tweet_objects
        }).always(function(){
            if (settings.callback) {
                settings.callback(tweets.reverse());
            }
        });

        return tweets.reverse();
    };

})(jQuery);