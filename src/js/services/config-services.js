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
        console.log("Handling Twitter");
        var tmp,
            source = "twitter", category = "tweets";

        response.reverse();

        for (var i = response.length - 1; i >= 0; i--) {
            tmp = response[i];
            mb.services.twitter.content.push({
                source: source,
                category: category,
                url: tmp.url,
                title: "Posted " + moment(new Date(tmp.pub_date)).fromNow() + " by " + tmp.author.username,
                pubDate: moment(new Date(tmp.pub_date)).unix(),
                deck: tmp.body,
                id: id_service_object()
            });
        }
    };

    mb.services.twitter.fetch = function() {
        console.log("Fetching Twitter");
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
        console.log("Handling Github");

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
            deck = tmp.type == "CreateEvent" ? tmp.payload.description : tmp.payload.commits[0].message;
            actions.push({
                source: source,
                category: category,
                repo: tmp.repo.name,
                title: title,
                id: id_service_object(),
                url: tmp.repo.url,
                deck: deck,
                pubDate: moment(new Date(tmp.created_at)).unix(),
            });
        }

        $.merge(mb.services.github.content, _.uniq(actions, "repo"));
    };

    mb.services.github.fetch = function(){
        console.log("Fetching Github");
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
    mb.services.medium = {
        account: "@ev",
        initial: 1,
        content: []
    };

    mb.services.medium.handle = function(response){
        console.log("Handling Medium");
        var results = response.query.results.item.reverse(),
            source = "medium",
            category = "articles",
            tmp;

        for (var i = results.length - 1; i >= 0; i--) {
            tmp = results[i];
            mb.services.medium.content.push({
                source: source,
                category: category,
                url: tmp.link,
                title: tmp.title,
                pubDate: moment(new Date(tmp.pubDate)).unix(),
                deck: $(tmp.description).find(".medium-feed-snippet").text(),
                id: id_service_object()
            });
        }
    };

    mb.services.medium.fetch = function(){
        console.log("Fetching Medium");
        var def = $.Deferred(),
            feed = encodeURIComponent("https://medium.com/feed/" + mb.services.medium.account);

        $.ajax({
            url: "//query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%3D'" + feed + "'&format=json",
            dataType: "JSON",
            success: mb.services.medium.handle
        }).always(function() {
            def.resolve();
        });

        return def;
    };

});