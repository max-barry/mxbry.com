// import { css } from 'react-emotion';
import Shevy from 'shevyjs';
import facepaint from 'facepaint';
import { position, shade, transparentize } from 'polished';

// ------------------
// STYLES - colors
// ------------------
export const colors = {
    primary: '#ffdd03',
    primaryLight: '#ffff54',
    primaryDark: '#c7ac00',
    secondary: '#0325ff',
    secondaryLight: '#7055ff',
    secondaryDark: '#0000ca',
    valid: '#66bb6a',
    error: '#B00020',
    loading: '#007FFF',
    grey1: '#f5f5f5',
    grey2: '#eeeeee',
    greyDark: '#9e9e9e',
    skeleton: '#E7ECEF',
    black: '#131313',
    white: '#fff'
};

// ------------------
// STYLES - shared
// ------------------
const format = n => (isNaN(n) ? n : bs(n));

export const styles = {
    fn: {
        focus: color => shade(0.85, color),
        active: color => shade(0.75, color),
        pad: (t, r, b, l) => {
            const top = t;
            const right = r || t;
            const bottom = b || t;
            const left = l || r || t;
            const valuesArr =
                top === bottom && right === left
                    ? [top, right]
                    : [top, right, bottom, left];
            return valuesArr.map(format).join(' ');
        },
        dotMatrix: (color = colors.white, size = 5) => {
            const rgb = transparentize(0.8, color);
            const line = `center center, ${rgb}, ${rgb} 1px, transparent 1px, transparent 100%`;
            return `
                background-image: -webkit-repeating-radial-gradient(${line});
                background-image: -moz-repeating-radial-gradient(${line});
                background-image: -ms-repeating-radial-gradient(${line});
                background-image: repeating-radial-gradient(${line});
                background-size: ${size}px ${size}px;`;
        }
    },
    fill: {
        position: 'absolute',
        ...position(0, 0, 0, 0)
    }
};

// ------------------
// STYLES - animation
// ------------------

export const transitionTimes = {
    weak: 65,
    minimal: 110,
    short: 300
};

export const easings = {
    standard: 'cubic-bezier(0.4, 0.0, 0.2, 1)',
    in: 'cubic-bezier(0.0, 0.0, 0.2, 1)',
    out: 'cubic-bezier(0.4, 0.0, 1, 1)'
};

// ------------------
// STYLES - shadows
// ------------------
export const shadows = {
    overlay: '0px 0px 4px rgba(0, 0, 0, 0.1)'
};

// ------------------
// STYLES - typography
// ------------------
export const fontFamily = `"HK Grotesk Pro", Helvetica Neue, sans-serif`;
export const fontWeights = {
    light: 300,
    regular: 400,
    medium: 500,
    heavy: 600
};
const baseFontSize = 17;
export const baseLineHeight = 1.4;
const shevyConf = new Shevy({
    baseLineHeight,
    baseFontSize: `${baseFontSize}px`,
    // AirBnb do a [0.7, 0.85, 1, 1.2, 1.45, 1.75] scale around 20
    // This takes that same scale but from a base of 17
    baseFontScale: [
        2.05882352941176,
        1.70588235294118,
        1.41176470588235,
        1.17647058823529,
        1,
        0.823529411764706
    ],
    addMarginBottom: true,
    proximity: true,
    proximityFactor: 0.85
});

export const shevy = {
    ...shevyConf,
    content: { ...shevyConf.content, fontWeight: fontWeights.regular },
    h6: {
        ...shevyConf.h6,
        fontWeight: fontWeights.medium,
        marginBottom: 0,
        color: colors.greyDark
    },
    overline: {
        // TODO : Add an unselectable to the overline
        ...shevyConf.h6,
        fontSize: 12,
        fontWeight: fontWeights.heavy,
        lineHeight: 1.4,
        color: colors.greyDark,
        textTransform: 'uppercase'
    }
};
export const { lineHeightSpacing: lhs, baseSpacing: bs } = shevy;
export const bsint = (n, fixed) => parseFloat(bs(n).replace('px'));

// ------------------
// STYLES - breakpoints
// ------------------
export const breakpoints = {
    mobile: 480,
    tablet: 980,
    desktop: 1280
};
export const mediaqueries = Object.entries(breakpoints).map(
    ([_, s]) => `@media(max-width: ${s}px)`
);

const pointerqueries = {
    isTouch: '@media (pointer: coarse)',
    isCursor: '@media (pointer: fine)'
};

export const isTouch = pointerqueries.isTouch;
export const isCursor = pointerqueries.isCursor;

export const mq = facepaint(
    Object.entries(breakpoints).map(([n, s]) => `@media(max-width: ${s}px)`)
);

export const bpProps = {
    mobile: { maxWidth: breakpoints.mobile },
    notMobile: { minWidth: breakpoints.mobile + 1 }
};

// ------------------
// STYLES - dimensions
// ------------------
export const dimensions = {
    bevel: 3,
    tap: 48,
    icon: 32,
    button: 36,
    input: 320,
    card: 270,
    container: 1024,
    narrowContainer: 680,
    loneMedia: 480,
    sectionSpaceDesktop: bsint(10),
    mobilePadding: bsint()
};
