import React from 'react';
import styled from 'react-emotion';
import { styles, colors, bs, dimensions, mq } from '../../settings';

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

const TextInner = styled('div')(({ backgroundColor }) =>
    mq({
        backgroundColor,
        padding: [bs(3), bs(1)],
        display: 'inline-block',
        borderRadius: dimensions.bevel,
        maxWidth: ['50%', 'none'],
        '> *:last-child': { marginBottom: 0 }
    })
);

const FocusText = ({ color, backgroundColor, children, ...props }) => (
    <Container color={color} {...props}>
        <TextInner backgroundColor={backgroundColor}>{children}</TextInner>
    </Container>
);

FocusText.defaultProps = {
    backgroundColor: colors.white
};
FocusText.propTypes = {};

export default FocusText;
