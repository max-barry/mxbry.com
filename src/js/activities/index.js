// Import libraries
import async from 'async';
import _ from 'lodash';

// Import services
import github from './github.js';
import medium from './medium.js';
import twitter from './twitter.js';
import npm from './npm.js';
import contact from './contact.js';

export function getServices() {
    return new Promise((resolve, reject) => {
        async.parallel([
            github,
            medium,
            twitter,
            npm,
            contact,
        ], (err, results) => {
            // TODO : Can you do this without lodash?
            results = results.map((sevice) => {
                return sevice.slice(0,2);
            });
            resolve(_.shuffle([].concat.apply([], results)));
        });
    });
};

// TODO : Add a promise polyfill
