import React from 'react';
import styled from 'react-emotion';
import { shevy, bsint, styles, mq, dimensions } from '../../settings';

const tabWidth = 200;
const decorationHeight = 15;
const mobileLargeDecorationHeight = 30;

const Container = styled('div')(
    `&::before {${styles.fn.dotMatrix()}}`,
    ({ color }) =>
        mq({
            maxWidth: 640,
            margin: '0 auto',
            position: 'relative',
            padding: [0, `0 ${dimensions.mobilePadding}px`],
            paddingLeft: [tabWidth + bsint(2), dimensions.mobilePadding],
            '&::before, &::after': {
                content: ['""', 'none'],
                position: 'absolute',
                top: 'auto',
                left: 0,
                right: 'auto',
                bottom: 0,
                width: tabWidth,
                backgroundColor: color
            },
            '&::before': {
                top: -2 * mobileLargeDecorationHeight,
                height: 'auto',
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

const Lede = ({ color, title, children, ...props }) => (
    <Container color={color} {...props}>
        <Headline color={color}>{title}</Headline>
        <Deck>{children}</Deck>
    </Container>
);

Lede.defaultProps = {};
Lede.propTypes = {};

export default Lede;
