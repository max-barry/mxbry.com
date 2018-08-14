import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import lazySizes from 'lazysizes';
import styled, { css, cx } from 'react-emotion';
import posed from 'react-pose';
import { colors, transitionTimes, shevy, styles, bs } from '../../settings';

if (!window.lazySizesConfig && !window.lazySizesConfig.init) {
    lazySizes.cfg = { ...lazySizes.cfg, ...{} };
    lazySizes.init();
}

const mediaPropTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    x: PropTypes.number,
    y: PropTypes.number
};

const mediaDefaultProps = {
    x: 16,
    y: 9
};

const responsiveMediaContainer = (x, y) =>
    css({
        position: 'relative',
        height: 0,
        width: '100%',
        paddingBottom: `${(y / x) * 100}%`,
        backgroundColor: colors.grey1,
        'img, iframe, video': {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            display: 'block'
        }
    });

const responsiveMediaElement = css({
    transition: `opacity ${transitionTimes.minimal}ms`,
    '&:not(.lazyloaded)': {
        opacity: 0
    }
});

const Caption = styled('span')(shevy.overline, {
    display: 'block',
    marginBottom: 0,
    paddingTop: bs(0.5),
    paddingBottom: bs(0.5)
});

const Img = ({ src, alt, x, y, className, caption, ...props }) => (
    <Fragment>
        <figure
            role="presentation"
            className={cx(responsiveMediaContainer(x, y), className)}
            {...props}
        >
            <img
                alt={alt}
                data-src={src}
                className={`lazyload ${responsiveMediaElement}`}
                {...props}
            />
        </figure>
        {caption && <Caption>{caption}</Caption>}
    </Fragment>
);

Img.defaultProps = mediaDefaultProps;
Img.propTypes = mediaPropTypes;
export { Img };

const processSrc = url => {
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
    var match = url.match(regExp);
    const videoId = match && match[7].length === 11 ? match[7] : null;
    return `https://www.youtube.com/embed/${videoId}`;
};

const Video = ({ src, alt, x, y, ...props }) => (
    <div
        role="presentation"
        className={responsiveMediaContainer(x, y)}
        {...props}
    >
        <iframe
            data-src={processSrc(src)}
            title={alt}
            className={`lazyload ${responsiveMediaElement}`}
        />
    </div>
);

Video.defaultProps = mediaDefaultProps;
Video.propTypes = mediaPropTypes;
export { Video };
