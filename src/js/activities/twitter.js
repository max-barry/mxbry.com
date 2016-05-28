import moment from 'moment';
import { ID, killImages } from '../_utilities.js';

const TWITTER_ACCOUNT = 'mxbrry';
const TWITTER_WIDGET_ID = '540294786687991808';

var _handleResponse = function(response) {

    var $tweets = $(killImages(response.body)).find(".timeline-TweetList-tweet");

    let $tweet;
    let date;
    let tweets = [];

    $tweets.each((idx, tweet) => {
        $tweet = $(tweet);
        date = moment(new Date($tweet.find('time').attr('datetime')));

        tweets.push({
            source: 'twitter',
            category: 'tweets',
            url: `https://twitter.com/${TWITTER_ACCOUNT}/status/${$tweet.find(".timeline-Tweet").data("tweet-id")}`,
            title: `Posted ${date.fromNow()} by ${TWITTER_ACCOUNT}`,
            pubDate: date.unix(),
            deck: $tweet.find(".timeline-Tweet-text").text(),
            id: ID()
        });
    });

    return tweets;
};

export default function fetch(done) {
    $.get({
        url: `https://cdn.syndication.twimg.com/widgets/timelines/${TWITTER_WIDGET_ID}`,
        dataType: 'JSONP',
        success: (response) => {
            done(null, _handleResponse(response).slice(0, 4));
        }
    }).fail(() => {
        done(null, []);
    });
}
