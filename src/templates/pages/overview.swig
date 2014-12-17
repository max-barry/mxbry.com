---
layout: base
hideheader: true
---

<aside class="overview-filter">
    <ul class="overview-filter-interior">
        {% for x in "abcdef" %}
        <li class="clearfix">
            <input id="all-types-{{x}}" type="checkbox">
            <label for="all-types-{{x}}" class="checkbox"></label>
            <label for="all-types-{{x}}" class="header-3">All</label>
        </li>
        {% endfor %}
    </ul>
</aside>

<h1 class="page-wrap tiny header-1">
    {# Max Barry. #}
    <a href="/">My</a> Portfolio.
</h1>
<h2 class="page-wrap xtiny header-4">
    {# I <a href="">build stuff</a> on the internet. I try and use smart numbers, behavioural theory, and all the little details to craft cool things. Check out <a href="">some of my work</a>. Maybe it's okay? Tell me how much you don't like it on <a href="" target="_blank">LinkedIn</a>. #}
    Lorem <a href="">ipsum dolor</a> sit amet, consectetur adipisicing elit. Vitae rem eveniet temporibus cum architecto ullam ex quas aliquam iste, <a href=""> fuga dolores, corrupti</a> perferendis assumenda sit. Totam repellendus, architecto, ea qui <a href="" target="_blank">tempori</a>.
</h2>

<div class="page-wrap overview-lister">
    {% for x in "xxxxxx" %}
    <article>
        <div class="overview-article-content card">
            <h2 class="header-3">Lorem ipsum dolor sit amet, consectetur adipisicing.</h2>
            <p>Yeoman generator for smart static sites.</p>
        </div>
    </article>
    {% endfor %}
</div>

{% include "src/templates/includes/takeover.swig" %}