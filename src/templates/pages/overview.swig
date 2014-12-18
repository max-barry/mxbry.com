---
layout: base
hideheader: true
---

<aside class="overview-filter bottom-sheet">
    <ul class="page-wrap slim">
        {% for l in languages %}
        <li class="{{l|lower}}-color heavy">{{l}}</li>
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

<div class="page-wrap xtiny sct-break overview-controls">
    <div class="round-icon control center raise bottom-sheet-trigger"></div>
    <ul>
        {% for l in languages %}
        <li class="{{l|lower}}-color heavy">
            {{l}}
        </li>
        {% endfor %}
    </ul>
</div>

<div class="page-wrap overview-lister">
    <article>
        <section class="overview-article-content card center">
            <h2 class="header-3 center">Lorem ipsum dolor sit amet, consectetur adipisicing.</h2>
            <p class="center">Yeoman generator for smart static sites.</p>
            <button class="flat">More</button>
            <button class="flat">Demo</button>
        </section>
    </article>
    <article>
        <section class="overview-article-content card center" style="background-image: url('http://www.vanityfair.com/online/oscars/2013/01/django-unchained-costume-design-oscar-nomination/_jcr_content/par/cn_contentwell/par-main/cn_blogpost/cn_slideshow/item2.rendition.slideshowHorizontal.ss03-foxx-django-costumes.png')">
            <h2 class="header-3 center">Jumpstart ~ Static.</h2>
            <p class="center">Yeoman generator for smart static sites.</p>
            <button class="flat">More</button>
            <button class="flat">Demo</button>
        </section>
    </article>
    {% for x in "xxxxxx" %}
    <article>
        <section class="overview-article-content card center" style="background-image: url('http://i.giphy.com/2U5dsUikiNFEk.gif')">
            <h2 class="header-3 center">Lorem ipsum dolor sit amet, consectetur adipisicing.</h2>
            <p class="center">Yeoman generator for smart static sites.</p>
            <button class="flat">More</button>
            <button class="flat">Demo</button>
        </section>
    </article>
    {% endfor %}
</div>

{% include "src/templates/includes/takeover.swig" %}