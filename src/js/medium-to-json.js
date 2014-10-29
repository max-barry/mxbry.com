;(function($) {

    $.mediumToJson = function(username, global_var) {
        'use strict';

        var def = $.Deferred(),
            feed = encodeURIComponent("https://medium.com/feed/" + username),
            ret = {};

        $.ajax({
            url: "https://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=-1&q=" + feed,
            dataType: "JSONP",
            success: function(response) {
                ret.status = response.responseStatus;
                if (ret.status == 200) {
                    var data = response.responseData;
                    ret.entries = data.feed.entries;
                    ret.feed = {
                        title: data.feed.title,
                        description: data.feed.description,
                        author: data.feed.author,
                        link: data.feed.link
                    };
                }
            }
        }).done(function(){
            global_var = ret;
            def.resolve();
        });

        return def;
    };

})(jQuery);
