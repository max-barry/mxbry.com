// $(function() {
    var activity_source_string = multiline(function(){/*@preserve
            <li class="source-{{=it.state}}">
                <div class="round-icon {{=it.service}}"></div>
                <div class="copy-wrap">
                    <span class="heavy">{{=it.headline}}</span>
                    {{? it.deck }}
                    <span>{{=it.deck}}</span>
                    {{?}}
                </div>
            </li>
        */console.log();}),
        activity_source = doT.template(activity_source_string);
// });
