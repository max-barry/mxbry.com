import { ID } from '../_utilities.js';

export default function fetch(done) {
    done(null, [{
        source: 'npm',
        category: 'code',
        url: 'https://www.npmjs.com/~maxbarry',
        title: '@maxbarry on NPM',
        pubDate: 0,
        deck: 'Recent work for the Node Package Manager',
        id: ID()
    }]);
};
