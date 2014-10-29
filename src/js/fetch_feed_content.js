$(function() {

    function fetch_medium() {
        var result = {},
            feed = encodeURIComponent("https://medium.com/feed/" + mbry.accounts.medium),
            def = $.Deferred();
        
        $.ajax({
            url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%3D'" + feed + "'&format=json",
            dataType: "JSON",
            success: function(response) {
                result = response;
                // result.status = response.responseStatus;
                // if (result.status == 200) {
                //     var data = response.responseData;
                //     result.entries = data.feed.entries;
                //     result.feed = {
                //         title: data.feed.title,
                //         description: data.feed.description,
                //         author: data.feed.author,
                //         link: data.feed.link
                //     };
                // }
            }
        }).done(function(){
            mbry.social.medium = result;
            def.resolve();
        });

        return def;
    }

    fetch_medium().done(function(){
        console.log(mbry.social.medium);
    });

});