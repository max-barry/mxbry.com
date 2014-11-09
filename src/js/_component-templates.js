var activity_source_string = "<li class=\"source-{{=it.state}}\">" + 
            "<a href=\"{{=it.url}}\" target=\"_blank\">" +
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
        "</li>";
    activity_source = doT.template(activity_source_string);

/*
var activity_source_string = multiline(function(){/*@preserve
        <li class="source-{{=it.state}}">
            <a href="{{=it.url}}" target="_blank">
                <div class="round-icon {{=it.service}}"></div>
            </a>
            <div class="copy-wrap">
                <span class="heavy">
                    <a href="{{=it.url}}" target="_blank">{{=it.headline}}</a>
                </span>
                {{? it.deck }}
                <span>{{=it.deck}}</span>
                {{?}}
            </div>
        </li>
    *///console.log();}),
// activity_source = doT.template(activity_source_string);
