import styled from 'react-emotion';
import { tint } from 'polished';
import {
    bs,
    bsint,
    mq,
    dimensions,
    shevy,
    colors,
    styles,
    fontWeights,
    transitionTimes
} from '../../settings';

const initialSpace = bsint(3);

export const Container = styled('div')(
    mq({
        maxWidth: dimensions.narrowContainer,
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingTop: [initialSpace, dimensions.mobilePadding * 2],
        paddingLeft: [0, dimensions.mobilePadding],
        paddingRight: [0, dimensions.mobilePadding]
    })
);

export const Headline = styled('h1')(shevy.h1, {});

export const Deck = styled('h2')(shevy.h3, {
    display: 'block',
    maxWidth: 480
});

export const Nav = styled('ul')({
    marginTop: bs(2)
});

export const NavShared = styled('li')(shevy.h4, {
    position: 'relative',
    cursor: 'pointer',
    margin: 0,
    a: {
        padding: styles.fn.pad(0.5),
        paddingLeft: bs(2.5),
        display: 'block',
        color: colors.black,
        textDecoration: 'none',
        '&:visited': {
            color: tint(0.3, colors.black)
        }
    }
});

export const NavHeading = styled(NavShared)({
    fontWeight: fontWeights.heavy,
    marginBottom: bs(1),
    padding: 0,
    '&:not(:first-child)': {
        marginTop: bs(1.5)
    }
});

export const NavLi = styled(NavShared)(({ color }) => ({
    transition: `background-color ${transitionTimes.weak}ms`,
    '&::before': {
        color,
        content: '"✖"',
        lineHeight: 1,
        position: 'absolute',
        left: bs(0.5),
        top: '50%',
        transform: 'translateY(-50%)',
        transition: `transform ${transitionTimes.minimal}ms ease-out`
    },
    '&:hover': {
        backgroundColor: tint(0.3, color),
        '&::before': {
            transform: 'translateY(-50%) scale(1.3)'
        }
    }
}));
