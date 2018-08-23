import React from 'react';
import styled from 'react-emotion';
import { dimensions, styles, shevy, bs } from '../../settings';

const Container = styled('div')({
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    paddingLeft: dimensions.mobilePadding,
    paddingRight: dimensions.mobilePadding
});

const LoadingElement = styled('span')(styles.loading, {
    display: 'block',
    width: '100%',
    height: shevy.h1.fontSize,
    marginBottom: bs()
});

const Headline = styled(LoadingElement)({
    maxWidth: 580
});

const Tag = styled(LoadingElement)({
    maxWidth: 480
});

const LoadingWrap = props => (
    <Container>
        <Headline />
        <Tag />
    </Container>
);

export default LoadingWrap;
