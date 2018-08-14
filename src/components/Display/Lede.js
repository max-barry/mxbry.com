import React from 'react';
import styled from 'react-emotion';
import { shevy, bs, bsint, styles } from '../../settings';

const tabWidth = 200;
const decorationHeight = 15;

const Container = styled('div')(
    `&::before {${styles.fn.dotMatrix()}}`,
    ({ color }) => ({
        maxWidth: 640,
        margin: '0 auto',
        position: 'relative',
        paddingLeft: tabWidth + bsint(2),
        '&::before, &::after': {
            content: '""',
            position: 'absolute',
            left: 0,
            bottom: 0,
            width: tabWidth,
            backgroundColor: color
        },
        '&::before': {
            top: 0,
            clipPath: 'polygon(75% 0, 100% 0, 100% 100%, 0 100%, 0 75%)'
        },
        '&::after': {
            height: decorationHeight,
            transform: `translateY(calc(100% + ${decorationHeight}px))`
        }
    })
);

const Headline = styled('h3')(shevy.h3, ({ color }) => ({ color }));

const Deck = styled('p')({ maxWidth: 460, marginBottom: 0 });

const Lede = ({ color, deck, title, ...props }) => (
    <Container color={color}>
        <Headline color={color}>{title}</Headline>
        <Deck>{deck}</Deck>
    </Container>
);

Lede.defaultProps = {};
Lede.propTypes = {};

export default Lede;
