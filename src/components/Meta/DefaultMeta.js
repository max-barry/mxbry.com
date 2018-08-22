import React from 'react';
import { Helmet } from 'react-helmet';
import { colors } from '../../settings';

const metaTitle = 'Max Barry | Creative technology in London and remote';
const metaDescription =
    'Max Barry is a business founder and creative technologist. Available for work in London and remote';
const domain = 'https://mxbry.com';
const twitterAccount = '@mxbrry';
const twitterId = '276204106';
const siteColor = colors.grey2;

const DefaultMeta = props => (
    <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        {/* Twitter meta */}
        <meta name="twitter:title" content={metaTitle} />
        <meta name="twitter:description" content={metaDescription} />
        <meta name="twitter:site" content={twitterAccount} />
        <meta name="twitter:site:id" content={twitterId} />
        <meta name="twitter:creator" content={twitterAccount} />
        <meta name="twitter:creator:id" content={twitterId} />
        <meta name="twitter:domain" content={domain} />
        <meta name="twitter:card" content="summary_large_image" />
        {/* <meta name="twitter:image:src" content="/img/mxbry.jpg" /> TODO */}
        <meta name="twitter:image:width" content="1200" />
        <meta name="twitter:image:height" content="783" />
        {/* Open Graph meta */}
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:url" content={domain} />
        <meta property="og:site_name" content="mxbry.com" />
        {/* <meta property="og:image" content="/img/mxbry.jpg" /> TODO */}
        <meta property="og:type" content="article" />
        {/* Google Plus Meta */}
        <link
            rel="author"
            href="https://plus.google.com/111508537607445323379/"
        />
        <link
            rel="publisher"
            href="https://plus.google.com/111508537607445323379/"
        />
        <meta name="theme-color" content={siteColor} />
        <link
            rel="apple-touch-icon"
            sizes="57x57"
            href="/apple-touch-icon-57x57.png"
        />
        <link
            rel="apple-touch-icon"
            sizes="60x60"
            href="/apple-touch-icon-60x60.png"
        />
        <link
            rel="apple-touch-icon"
            sizes="72x72"
            href="/apple-touch-icon-72x72.png"
        />
        <link
            rel="apple-touch-icon"
            sizes="76x76"
            href="/apple-touch-icon-76x76.png"
        />
        <link
            rel="apple-touch-icon"
            sizes="114x114"
            href="/apple-touch-icon-114x114.png"
        />
        <link
            rel="apple-touch-icon"
            sizes="120x120"
            href="/apple-touch-icon-120x120.png"
        />
        <link
            rel="apple-touch-icon"
            sizes="144x144"
            href="/apple-touch-icon-144x144.png"
        />
        <link
            rel="apple-touch-icon"
            sizes="152x152"
            href="/apple-touch-icon-152x152.png"
        />
        <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon-180x180.png"
        />
        <link
            rel="icon"
            type="image/png"
            href="/favicon-32x32.png"
            sizes="32x32"
        />
        <link
            rel="icon"
            type="image/png"
            href="/favicon-194x194.png"
            sizes="194x194"
        />
        <link
            rel="icon"
            type="image/png"
            href="/favicon-96x96.png"
            sizes="96x96"
        />
        <link
            rel="icon"
            type="image/png"
            href="/android-chrome-192x192.png"
            sizes="192x192"
        />
        <link
            rel="icon"
            type="image/png"
            href="/favicon-16x16.png"
            sizes="16x16"
        />
        <link rel="manifest" href="/manifest.json" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color={siteColor} />
        <meta name="msapplication-TileColor" content={siteColor} />
        <meta name="msapplication-TileImage" content="/mstile-144x144.png" />
    </Helmet>
);

export default DefaultMeta;
