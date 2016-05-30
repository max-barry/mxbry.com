import moment from 'moment';

const GITHUB_ACCOUNT = 'max-barry';

var _buildDeck = function(type, payload) {
    switch(type) {
        case 'CreateEvent':
            return payload.description;
        case 'PushEvent':
            return payload.commits[0].message;
        default:
            return `Dealt with a ${type}`;
    }
};

var _buildVerb = function(type, payload) {
    switch(type) {
        case 'PushEvent':
            return 'pushed to';
        case 'CreateEvent':
            return `created a ${payload.ref_type} for`;
        default:
            return 'was active on';
    }
};

var _handleResponse = function(response) {

    return response.map((item) => {
        return {
            source: 'github',
            category: 'code',
            repo: item.repo.name,
            title: `${GITHUB_ACCOUNT} ${_buildVerb(item.type, item.payload)} ${item.repo.name}`,
            url: `https://github.com/${item.repo.name}`,
            deck: _buildDeck(item.type, item.payload),
            pubDate: moment(new Date(item.created_at)).unix()
        };
    });

};

export default function fetch(done) {
    $.get(`https://api.github.com/users/${GITHUB_ACCOUNT}/events`, (response) => {
        done(null, _handleResponse(response).slice(0, 4));
    }).fail(() => {
        done(null, []);
    });
};
