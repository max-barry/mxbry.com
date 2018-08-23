import React from 'react';
import PropTypes from 'prop-types';
import lazySizes from 'lazysizes';
import styled, { css } from 'react-emotion';
import { transitionTimes, shevy, bs, mq, styles } from '../../settings';
import { withStateHandlers } from 'recompose';

if (!window.lazySizesConfig && !window.lazySizesConfig.init) {
    lazySizes.cfg = { ...lazySizes.cfg, ...{} };
    lazySizes.init();
}

const mediaPropTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    x: PropTypes.number,
    y: PropTypes.number,
    transparent: PropTypes.bool,
    shadow: PropTypes.bool,
    captionWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};

const mediaDefaultProps = {
    x: 16,
    y: 9,
    captionWidth: '80%',
    transparent: false,
    shadow: true
};

const responsiveMediaContainer = (x, y, transparent, shadow, loaded) =>
    css(
        loaded ? null : styles.loading,
        mq({
            position: 'relative',
            height: 0,
            width: '100%',
            paddingBottom: `${(y / x) * 100}%`,
            backgroundColor: transparent ? 'transparent' : null,
            '&::before': {
                display: transparent ? 'none' : 'block'
            },
            boxShadow: [
                shadow ? '0px 0px 12px rgba(208, 208, 208, 0.3)' : 'none',
                'none'
            ],
            'img, iframe, video': {
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                display: 'block'
            }
        })
    );

const responsiveMediaElement = css({
    transition: `opacity ${transitionTimes.minimal}ms`,
    '&:not(.lazyloaded)': {
        opacity: 0
    }
});

const Caption = styled('span')(shevy.overline, ({ captionWidth }) =>
    mq({
        display: 'block',
        marginBottom: 0,
        paddingTop: bs(0.5),
        paddingBottom: bs(0.5),
        paddingLeft: [0, bs(0.5)],
        paddingRight: [0, bs(0.5)],
        maxWidth: [captionWidth, 'none']
    })
);

const enhance = withStateHandlers(({ loaded = false }) => ({ loaded }), {
    setLoaded: state => _ => ({
        loaded: true
    })
});

const Img = enhance(
    ({
        src,
        alt,
        x,
        y,
        captionWidth,
        transparent,
        shadow,
        children,
        loaded,
        setLoaded,
        ...props
    }) => (
        <div {...props}>
            <figure
                role="presentation"
                className={responsiveMediaContainer(
                    x,
                    y,
                    transparent,
                    shadow,
                    loaded
                )}
            >
                <img
                    alt={alt}
                    data-src={src}
                    className={`lazyload ${responsiveMediaElement}`}
                    onLoad={setLoaded}
                />
            </figure>
            {children && (
                <Caption captionWidth={captionWidth}>{children}</Caption>
            )}
        </div>
    )
);

Img.defaultProps = mediaDefaultProps;
Img.propTypes = mediaPropTypes;
export { Img };

const processSrc = url => {
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    var match = url.match(regExp);
    const videoId = match && match[7].length === 11 ? match[7] : null;
    return `https://www.youtube.com/embed/${videoId}?modestbranding&rel=0&showinfo=0&controls=0`;
};

const Video = enhance(
    ({
        src,
        alt,
        x,
        y,
        captionWidth,
        transparent,
        shadow,
        children,
        setLoaded,
        loaded,
        ...props
    }) => (
        <div {...props}>
            <div
                role="presentation"
                className={responsiveMediaContainer(
                    x,
                    y,
                    transparent,
                    shadow,
                    loaded
                )}
            >
                <iframe
                    data-src={processSrc(src)}
                    title={alt}
                    className={`lazyload ${responsiveMediaElement}`}
                    onLoad={setLoaded}
                />
            </div>
            {children && (
                <Caption captionWidth={captionWidth}>{children}</Caption>
            )}
        </div>
    )
);

Video.defaultProps = mediaDefaultProps;
Video.propTypes = mediaPropTypes;
export { Video };
