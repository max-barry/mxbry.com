import moment from 'moment';
import { killImages } from '../../../parts/_utilities.js';

const MEDIUM_ACCOUNT = '@maxbarry';
const MEDIUM_URL = encodeURIComponent(`https://medium.com/feed/${MEDIUM_ACCOUNT}`);
const FEED = `//query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%3D'${MEDIUM_URL}'&format=json`;

var _handleResponse = function(response) {
    var r = new RegExp('"', 'g');
    return response.query.results.item.map((item) => {
        return {
            source: 'medium',
            category: 'articles',
            url: item.link,
            title: item.title.split(" in")[0].replace(r, ''),
            pubDate: moment(new Date(item.pubDate)).unix(),
            deck: $(killImages(item.description)).find(".medium-feed-snippet").text()
        };
    });
};

export default function fetch(done) {
    $.get(FEED, (response) => {
        done(null, _handleResponse(response).slice(0, 4));
    }).fail(() => {
        done(null, []);
    });;
}
