var sm = require("sitemap");
var projectFetcher = require("./get_projects.js");

exports.index = function(req, res) {


    projectFetcher.retrieve(function(err, projects){

        var urls = [
            { url: "/", changefreq: "weekly", priority: 0.9 },
            { url: "/work/", changefreq: "weekly", priority: 0.7 }
        ];
        
        for (var i = 0; i < projects.length; i++) {
            if (!projects[i].external) {
                urls.push({
                    url: "/work/" + projects[i].slug,
                    changefreq: "monthly",
                    priority: 0.8
                })
            }
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

    });

};