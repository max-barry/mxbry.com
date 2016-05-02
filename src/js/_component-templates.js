var activity_source_string = "<li class=\"source-{{=it.state}}\">" + 
            "<a href=\"{{=it.url}}\" {{? it.service != 'mywork'}}target=\"_blank\"{{?}}>" +
                "<div class=\"round-icon {{=it.service}}\"></div>" +
            "</a>" +
            "<div class=\"copy-wrap\">" +
                "<span class=\"heavy\">" +
                    "<a href=\"{{=it.url}}\" target=\"_blank\">{{=it.headline}}</a>" +
                "</span>" +
                "{{? it.deck }}" +
                "<span>{{=it.deck}}</span>" +
                "{{?}}" +
            "</div>" +
        "</li>",
    activity_source = doT.template(activity_source_string);

var porfolio_item_string = "<article class = \"usn\">" +
                                "<section class=\"overview-article-content card center grow-screw-in\" {{? it.listerimg }}style=\"background-image: url('{{=it.listerimg}}')\"{{?}}>" +
                                    "<h2 class=\"header-3 center\"><a href=\"{{ if(!it.external){ }}/work/{{ } }}{{=it.slug}}\">{{=it.title}}</a></h2>" +
                                    "<p class=\"center\">{{=it.deck}}</p>" +
                                    "<a href=\"{{ if(!it.external){ }}/work/{{ } }}{{=it.slug}}\" class=\"btn flat\">More</a>" +
                                    "{{? it.demo }}<a href=\"{{=it.demo}}\" class=\"btn flat\">Demo</a>{{?}}" +
                                "</section>" +
                            "</article>",
    portfolio_item_source = doT.template(porfolio_item_string);
