import React from 'react';
import styled from 'react-emotion';
import { styles, colors, bs, dimensions } from '../../settings';

const Container = styled('div')(({ color }) => styles.fn.dotMatrix(color, 3), {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
});

const TextInner = styled('div')(({ backgroundColor }) => ({
    backgroundColor,
    padding: bs(3),
    display: 'inline-block',
    borderRadius: dimensions.bevel,
    maxWidth: '50%'
}));

const FocustText = ({ color, backgroundColor, children, ...props }) => (
    <Container color={color} {...props}>
        <TextInner backgroundColor={backgroundColor}>{children}</TextInner>
    </Container>
);

FocustText.defaultProps = {
    backgroundColor: colors.white
};
FocustText.propTypes = {};

export default FocustText;
