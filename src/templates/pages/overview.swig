---
layout: base
---
<div class="page-wrap grid overview-wrap">
    <div class="overview-lister lrg-8 sml-12 sct-break">
        <article class="sct-break card">
            <section class="copy-wrap">
                <h2 class="header-3 mreset"><a href="">Lorem ipsum dolor sit.</a></h2>
                <h3 class="header-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum perferendis odio explicabo molestiae sed harum!</h3>
                <a href=""><div class="round-icon more-dots-wh"></div></a>
                <a href=""><div class="round-icon preview"></div></a>
            </section>
            <section class="language-wrap">
                <span class="cat-python"><span>Python</span></span>
                <span class="cat-javascript"><span>Javascript</span></span>
                <span class="cat-grunt"><span>Grunt</span></span>
            </section>
        </article>
        <article class="sct-break card">
            <section class="copy-wrap">
                <h2 class="header-3 mreset"><a href="">Lorem ipsum dolor sit.</a></h2>
                <h3 class="header-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum perferendis odio explicabo molestiae sed harum!</h3>
                <a href=""><div class="round-icon more-dots-wh"></div></a>
                <a href=""><div class="round-icon preview"></div></a>
            </section>
            <section class="language-wrap">
                <span class="cat-python"><span>Python</span></span>
                <span class="cat-javascript"><span>Javascript</span></span>
                <span class="cat-grunt"><span>Grunt</span></span>
            </section>
        </article>
                <article class="sct-break card">
            <section class="copy-wrap">
                <h2 class="header-3 mreset"><a href="">Lorem ipsum dolor sit.</a></h2>
                <h3 class="header-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum perferendis odio explicabo molestiae sed harum!</h3>
                <a href=""><div class="round-icon more-dots-wh"></div></a>
                <a href=""><div class="round-icon preview"></div></a>
            </section>
            <section class="language-wrap">
                <span class="cat-python"><span>Python</span></span>
                <span class="cat-javascript"><span>Javascript</span></span>
                <span class="cat-grunt"><span>Grunt</span></span>
            </section>
        </article>
                <article class="sct-break card">
            <section class="copy-wrap">
                <h2 class="header-3 mreset"><a href="">Lorem ipsum dolor sit.</a></h2>
                <h3 class="header-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum perferendis odio explicabo molestiae sed harum!</h3>
                <a href=""><div class="round-icon more-dots-wh"></div></a>
                <a href=""><div class="round-icon preview"></div></a>
            </section>
            <section class="language-wrap">
                <span class="cat-python"><span>Python</span></span>
                <span class="cat-javascript"><span>Javascript</span></span>
                <span class="cat-grunt"><span>Grunt</span></span>
            </section>
        </article>

    </div>
    <article class="overview-navigation card lrg-4 sml-12 sct-break">
        <h1 class="header-2 mreset">Work by <a href="">Me</a></h1>
        <h3 class="header-3 heading">Languages</h3>
        <div class="language-grid">
            {% for language in languages %}
                <div class="{{language|lower}}-light btn flat"><span>{{language}}</span></div>
            {% endfor %}
        </div>
    </article>
</div>

<!--
{# <article class="overview-hero page-wrap slim sct-break card">
    <h1 class="header-2 mreset left">Work by <a href="">Me</a></h1>
    <div class="switch right">Switch</div>
</article>

<article class="overview-lister page-wrap sct-break grid">
        <section class="single-flex grid-item"{#  style="background-image:url('http://i.giphy.com/2U5dsUikiNFEk.gif');" #}>
            {# <div class="tint"></div> #}
            {# <div class="copy-wrap"> #}
                <h2 class="header-3 mreset">Lorem ipsum dolor.</h2>
                <h3 class="header-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam voluptatibus, fugit quos!</h3>
            {# </div> #}
            <div class="icon-wrap five-wide">
                <div class="round-icon more-dots-wh"></div>
                <div class="round-icon grunt gr-shrt"><span>Gr</span></div>
                {# <div class="round-icon html"><span>HTML</span></div> #}
                <div class="round-icon scss"><span>Scss</span></div>
                {# <div class="round-icon javascript"><span>Js</span></div> #}
                <div class="round-icon python"><span>Py</span></div>
                <div class="round-icon github"></div>
                {# <div class="round-icon medium"></div> #}
            </div>
        </section>
        <section class="single-flex grid-item"{#  style="background-image:url('http://i.giphy.com/29psbxDByiFlm.gif');" #}>
                    {# <div class="tint"></div> #}
            {# <div class="copy-wrap"> #}
                <h2 class="header-3 mreset">Lorem ipsum dolor.</h2>
                <h3 class="header-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam voluptatibus, fugit quos!</h3>
            {# </div> #}
            </section>
        <section class="double-flex grid-item">Hey</section>
        <section class="single-flex grid-item">Hey</section>
        <section class="single-flex grid-item">Hey</section>
        <section class="double-flex grid-item">Hey</section>
        <section class="single-flex grid-item">Hey</section>
        <section class="double-flex grid-item">Hey</section>
        <section class="single-flex grid-item">Hey</section>
</article>
-->