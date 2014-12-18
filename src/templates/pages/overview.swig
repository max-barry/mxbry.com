---
layout: base
hideheader: true
---

<aside class="overview-filter">
    <ul class="overview-filter-interior">
{#         <li class="clearfix">
            <input id="all-types-all" type="checkbox">
            <label for="all-types-all" class="checkbox"></label>
            <label for="all-types-all" class="header-3">All</label>
        </li> #}
        {% for l in languages %}
        <li class="clearfix">
            <input id="all-types-{{l}}" type="checkbox" checked>
            <label for="all-types-{{l}}" class="checkbox"></label>
            <label for="all-types-{{l}}" class="header-3">{{l}}</label>
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
    <article>
        <div class="overview-article-content card">
            <h2 class="header-3">Lorem ipsum dolor sit amet, consectetur adipisicing.</h2>
            <p>Yeoman generator for smart static sites.</p>
            <button class="flat primary">More</button>
            <button class="flat primary">Demo</button>
        </div>
    </article>
    <article>
        <div class="overview-article-content card" style="background-image: url('http://www.vanityfair.com/online/oscars/2013/01/django-unchained-costume-design-oscar-nomination/_jcr_content/par/cn_contentwell/par-main/cn_blogpost/cn_slideshow/item2.rendition.slideshowHorizontal.ss03-foxx-django-costumes.png')">
            <h2 class="header-3">Jumpstart ~ Static.</h2>
            <p>Yeoman generator for smart static sites.</p>
            <button class="flat primary">More</button>
            <button class="flat primary">Demo</button>
        </div>
    </article>
    {% for x in "xxxxxx" %}
    <article>
        <div class="overview-article-content card" style="background-image: url('http://i.giphy.com/2U5dsUikiNFEk.gif')">
            <h2 class="header-3">Lorem ipsum dolor sit amet, consectetur adipisicing.</h2>
            <p>Yeoman generator for smart static sites.</p>
            <button class="flat primary">More</button>
            <button class="flat primary">Demo</button>
        </div>
    </article>
    {% endfor %}
</div>

{% include "src/templates/includes/takeover.swig" %}