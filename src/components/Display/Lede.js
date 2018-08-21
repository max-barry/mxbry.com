import React from 'react';
import styled from 'react-emotion';
import { shevy, bsint, styles, mq } from '../../settings';

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
            paddingLeft: [tabWidth + bsint(2), 0],
            '&::before, &::after': {
                content: '""',
                position: 'absolute',
                top: ['auto', -1 * mobileLargeDecorationHeight],
                left: 0,
                bottom: [0, 'auto'],
                width: [tabWidth, '100%'],
                backgroundColor: color
            },
            '&::before': {
                top: -1 * mobileLargeDecorationHeight,
                height: ['auto', mobileLargeDecorationHeight],
                clipPath: [
                    'polygon(75% 0, 100% 0, 100% 100%, 0 100%, 0 75%)',
                    'none'
                ],
                transform: [`none`, `translateY(-100%)`]
            },
            '&::after': {
                height: decorationHeight,
                transform: [
                    `translateY(calc(100% + ${decorationHeight}px))`,
                    `translateY(calc(-100% + ${decorationHeight}px + ${(mobileLargeDecorationHeight *
                        1) /
                        3}px))`
                ]
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
