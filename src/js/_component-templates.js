// $(function() {
    var activity_source_string = multiline(function(){/*
            <li class="source-{{=it.state}}">
                <div class="round-icon {{=it.service}}"></div>
                <div class="copy-wrap">
                    <span class="heavy">{{=it.headline}}</span>
                    <span>{{=it.deck}}</span>
                </div>
            </li>
        */}),
        activity_source = doT.template(activity_source_string);
// });
