import React from 'react';
import styled, { css } from 'react-emotion';
import {
    dimensions,
    bs,
    shevy,
    colors,
    fontWeights,
    bsint,
    styles,
    mq
} from '../../settings';

const topSpacing = bsint(4);
const mobileTopSpacing = bsint(2);

const Container = styled('div')({
    maxWidth: dimensions.narrowContainer,
    marginLeft: 'auto',
    marginRight: 'auto'
});

const Headline = styled('div')(
    mq({
        display: 'flex',
        flexDirection: ['row', 'column'],
        justifyContent: 'space-between',
        paddingBottom: [topSpacing, mobileTopSpacing],
        paddingLeft: [0, dimensions.mobilePadding],
        paddingRight: [0, dimensions.mobilePadding]
    })
);

const headlineTitle = color =>
    css(
        shevy.h1,
        mq({
            color,
            marginBottom: [0, bs(0.5)],
            maxWidth: ['50%', 'none'],
            '&:first-child': {
                marginBottom: 0
            },
            '&:last-child': {
                order: [1, -1]
            }
        })
    );

const Lede = styled('div')(styles.fn.dotMatrix(), ({ color }) =>
    mq({
        color: colors.white,
        backgroundColor: color,
        padding: bs(),
        paddingTop: [topSpacing, mobileTopSpacing],
        borderTop: `7px solid ${colors.black}`
    })
);

const LedeContent = styled('div')(
    shevy.h4,
    mq({
        maxWidth: ['70%', 'none'],
        marginBottom: 0,
        fontWeight: fontWeights.regular,
        lineHeight: shevy.baseLineHeight
    })
);

const Main = styled('div')({
    position: 'relative',
    minHeight: topSpacing * 8,
    zIndex: 0,
    width: '100%',
    display: 'flex',
    alignItems: 'flex-end',
    padding: bs()
});

const BgImage = styled('span')(({ img, color }) => ({
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    zIndex: -1,
    '&::after, &::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
    },
    '&::after': {
        backgroundSize: 'cover',
        filter: 'grayscale(100%) contrast(1.2)',
        zIndex: -2
    },
    '&.lazyloaded::after': {
        backgroundImage: `url(${img})`
    },
    '&::before': {
        backgroundColor: color,
        mixBlendMode: 'hard-light',
        zIndex: -1
    }
}));

const FootNumber = styled('h6')(
    mq({
        fontSize: [124, '26vw'],
        fontWeight: fontWeights.heavy,
        marginBottom: 0,
        color: colors.white,
        lineHeight: 1
    })
);

const RepeatHeadline = styled('h5')(shevy.h1, {
    color: colors.white,
    position: 'absolute',
    top: bs(),
    right: bs(),
    writingMode: 'vertical-rl',
    lineHeight: 1
});

const Hero = ({ color, img, title, deck, year, ...props }) => (
    <Container {...props}>
        <Headline>
            <h2 className={headlineTitle(color)}>{title}</h2>
            <h5 className={headlineTitle(color)}>{year}</h5>
        </Headline>
        <Lede color={color}>
            <LedeContent>{deck}</LedeContent>
        </Lede>
        <Main>
            <BgImage color={color} img={img} className="lazyload" />
            <RepeatHeadline>{title}</RepeatHeadline>
            <FootNumber>{year}</FootNumber>
        </Main>
    </Container>
);

Hero.defaultProps = {};
Hero.propTypes = {};

export default Hero;
