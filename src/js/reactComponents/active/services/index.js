// Import libraries
import async from 'async';
import _ from 'lodash';
import promise from 'es6-promise';
var Promise = promise.Promise;

// Import services
import github from './github.js';
import medium from './medium.js';
import twitter from './twitter.js';
import npm from './npm.js';
import contact from './contact.js';

export function getServices() {
    return new Promise((resolve, reject) => {

        if (!('activities' in mx)) {
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

                mx.activities = _.shuffle([].concat.apply([], results));
            });
        }

        resolve(mx.activities);
    });
};
