import React from 'react';
import styled from 'react-emotion';
import { tint } from 'polished';
import {
    styles,
    colors,
    bs,
    dimensions,
    mq,
    fontWeights
} from '../../settings';

const Container = styled('div')(
    ({ color }) => styles.fn.dotMatrix(color, 3),
    mq({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: [bs(6), bs(3)],
        paddingBottom: [bs(6), bs(3)],
        minHeight: '100vh'
    })
);

const TextInner = styled('div')(({ backgroundColor, color }) =>
    mq({
        backgroundColor,
        padding: [bs(3), bs(1)],
        display: 'inline-block',
        borderRadius: dimensions.bevel,
        maxWidth: ['50%', 'none'],
        '> *:last-child': { marginBottom: 0 },
        '> a': {
            color,
            fontWeight: fontWeights.medium,
            '&:visited': {
                color: tint(0.5, color)
            }
        }
    })
);

const FocusText = ({ color, backgroundColor, children, ...props }) => (
    <Container color={color} {...props}>
        <TextInner backgroundColor={backgroundColor} color={color}>
            {children}
        </TextInner>
    </Container>
);

FocusText.defaultProps = {
    backgroundColor: colors.white
};
FocusText.propTypes = {};

export default FocusText;
