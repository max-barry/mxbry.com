export default function fetch(done) {
    done(null, [{
        source: 'email',
        category: 'contact',
        url: 'mailto:max@mxbry.com',
        title: 'Let\'s work together!',
        pubDate: 0,
        deck: 'I\'m always looking for new projects and puzzles, so email me and let\'s talk!'
    }, {
        source: 'linkedin',
        category: 'contact',
        url: 'https://uk.linkedin.com/in/maxbarry',
        title: 'maxbarry on LinkedIn',
        pubDate: 0,
        deck: 'Connect with me'
    }]);
};
