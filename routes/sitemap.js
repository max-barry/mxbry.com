var sm = require("sitemap");

exports.index = function(req, res) {
    var projects = require("../public/data/projects.json").projects,
        urls = [
            { url: "/", changefreq: "weekly", priority: 0.9 },
            { url: "/work/", changefreq: "weekly", priority: 0.7 }
        ];
    
    for (var i = 0; i < projects.length; i++) {
        console.log(u);
        urls.push({
            url: "/work/" + projects[i].slug,
            changefreq: "monthly",
            priority: 0.8
        })
    };

    sitemap = sm.createSitemap({
        hostname: req.protocol + "://" + req.headers.host,
        cacheTime: 600000,
        urls: urls
    });
    
    sitemap.toXML(function(xml){
        res.header("Content-Type", "application/xml");
        res.send(xml);
    })
};