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
        <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
        />
        <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
        />
        <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/manifest.json" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#f50057" />
        <meta name="msapplication-TileColor" content="#00aba9" />
        <meta name="theme-color" content="#ffffff" />
    </Helmet>
);

export default DefaultMeta;
