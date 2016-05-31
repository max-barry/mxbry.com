export const getWork = function(cb) {
    firebase.database().ref('/projects/').once('value').then(cb);
};
