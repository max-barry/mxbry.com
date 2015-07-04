$(function() {

    function id_service_object() {
        mb.misc.service_id_count++;
        return mb.misc.service_id_count;
    }

    mb.services = {};

    /*
    --------------------------
    TWITTER
    --------------------------
    */
    mb.services.twitter = {
        account: "540294786687991808",
        initial: 1,
        content: []
    };

    mb.services.twitter.handle = function(response) {
        var tmp, date,
            source = "twitter", category = "tweets";

        response.reverse();

        for (var i = response.length - 1; i >= 0; i--) {
            tmp = response[i];
            date = moment(new Date(tmp.pub_date));
            mb.services.twitter.content.push({
                source: source,
                category: category,
                url: tmp.url,
                title: "Posted " + date.fromNow() + " by " + tmp.author.username,
                pubDate: date.unix(),
                deck: tmp.body,
                id: id_service_object()
            });
        }
    };

    mb.services.twitter.fetch = function() {
        var def = $.Deferred();

        $.tweetsFromWidget({
            widget: mb.services.twitter.account,
            callback: function(data) {
                mb.services.twitter.handle(data);
                def.resolve();
            }
        });

        return def;
    };


    /*
    --------------------------
    GITHUB
    --------------------------
    */
    mb.services.github = {
        account: "max-barry",
        initial: 2,
        content: []
    };
    
    mb.services.github.handle = function(response){

        response.reverse();

        function _get_event_verb(gitevent, payload) {
            if (gitevent == "PushEvent") {
                return "pushed to";
            } else if (gitevent == "CreateEvent") {
                return "created a " + payload.ref_type + " for";
            } else {
                return "was active on";
            }
        }

        var tmp, title, deck,
            actions = [],
            source = "github", category = "code";

        for (var i = response.length - 1; i >= 0; i--) {
            tmp = response[i];
            title = mb.services.github.account + " " + _get_event_verb(tmp.type, tmp.payload) + " " + tmp.repo.name;
            switch (tmp.type) {
                case "CreateEvent":
                    deck = tmp.payload.description;
                    break;
                case "PushEvent":
                    deck = tmp.payload.commits[0].message;
                    break;
                default:
                    deck = "Dealt with a " + tmp.type;
            }
            actions.push({
                source: source,
                category: category,
                repo: tmp.repo.name,
                title: title,
                id: id_service_object(),
                url: "https://github.com/" + tmp.repo.name,
                deck: deck,
                pubDate: moment(new Date(tmp.created_at)).unix(),
            });
        }

        $.merge(mb.services.github.content, _.uniq(actions, "repo"));
    };

    mb.services.github.fetch = function(){
        var def = $.Deferred();

        $.get("https://api.github.com/users/" + mb.services.github.account + "/events", mb.services.github.handle).always(function() {
            def.resolve();
        });

        return def;
    };


    /*
    --------------------------
    MEDIUM
    --------------------------
    */
    // mb.services.medium = {
    //     account: "@ev",
    //     initial: 1,
    //     content: []
    // };

    // mb.services.medium.handle = function(response){
    //     var results = response.query.results.item.reverse(),
    //         source = "medium",
    //         category = "articles",
    //         tmp, imgless_desc;

    //     for (var i = results.length - 1; i >= 0; i--) {
    //         tmp = results[i];
    //         /**
    //         As soon as the description was become a jQuery object, all the images were loading.
    //         The following line nixes the description string and prevents the images from being loaded.
    //         */
    //         imgless_desc = tmp.description.replace("img src", "img null");
    //         mb.services.medium.content.push({
    //             source: source,
    //             category: category,
    //             url: tmp.link,
    //             title: tmp.title,
    //             pubDate: moment(new Date(tmp.pubDate)).unix(),
    //             deck: $(imgless_desc).find(".medium-feed-snippet").text(),
    //             id: id_service_object()
    //         });
    //     }
    // };

    // mb.services.medium.fetch = function(){
    //     var def = $.Deferred(),
    //         feed = encodeURIComponent("https://medium.com/feed/" + mb.services.medium.account);

    //     $.ajax({
    //         url: "//query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%3D'" + feed + "'&format=json",
    //         dataType: "JSON",
    //         success: mb.services.medium.handle
    //     }).always(function() {
    //         def.resolve();
    //     });

    //     return def;
    // };


    /*
    --------------------------
    MY WORK
    --------------------------
    */
    mb.services.mywork = {
        endpoint: "/static/data/projects.json",
        initial: 1,
        maxnumber: 8,
        content: []
    };

    mb.services.mywork.handle = function(response){
        var source = "mywork",
            category = "articles",
            sample = _.sample(response.projects, mb.services.mywork.maxnumber),
            tmp, url;

        for (var i = 0; i < sample.length; i++) {
            tmp = sample[i];
            mb.services.mywork.content.push({
                title: tmp.title,
                deck: tmp.deck,
                id: id_service_object(),
                category: category,
                source: source,
                // pubDate: ,
                url: tmp.external ? tmp.slug : "/work/" + tmp.slug,
            });
        }
    };

    mb.services.mywork.fetch = function(){
        var def = $.Deferred();

        $.getJSON(mb.services.mywork.endpoint, mb.services.mywork.handle).always(function(){
            def.resolve();
        });

        return def;
    };

});