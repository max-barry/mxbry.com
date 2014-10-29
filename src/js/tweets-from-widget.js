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

            var tweet_elements = $(resp.body).find(".tweet"),
                tmp_element, tmp_tweet,
                extra_details, author_details;

            for (var i = tweet_elements.length - 1; i >= 0; i--) {
                tmp_element = $(tweet_elements[i]);
                tmp_tweet = {};
                
                tmp_tweet.body = tmp_element.find(".e-entry-title").text();
                tmp_tweet.pub_date = tmp_element.find("a.permalink").data("datetime");

                if (!settings.slim) {
                    extra_details = {
                        id: toString(tmp_element.data("tweet-id")),
                        url: "https://twitter.com/markposh/status/" + tmp_element.data("tweet-id")
                    };

                    if (tmp_element.find(".retweet-credit").length) {
                        extra_details.retweet = true;
                    }
                }

                if (!settings.slim && settings.author) {
                    author_details = {
                        author: {
                            username: tmp_element.find(".p-author .p-nickname").text(),
                            name: tmp_element.find(".p-author .p-name").text(),
                            profile_image: tmp_element.find(".u-photo.avatar").attr("src"),
                            retina_profile_image: tmp_element.find(".u-photo.avatar").attr("data-src-2x")
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
