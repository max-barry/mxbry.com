import React from 'react';
import styled from 'react-emotion';
import { dimensions, shevy, bs, styles } from '../../settings';

const headlineHeight = shevy.h1.fontSize;

const Container = styled('div')({
    maxWidth: dimensions.narrowContainer,
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '100%',
    height: 1000,
    position: 'relative'
});

const InteriorElement = styled('span')(styles.loading, {
    display: 'block',
    position: 'absolute',
    left: 0,
    right: 0
});

const Headline = styled(InteriorElement)({
    top: 0,
    height: headlineHeight,
    maxWidth: '60%'
});

const Tag = styled(Headline)({
    marginTop: bs(0.5),
    top: headlineHeight,
    maxWidth: '40%'
});

const Interior = styled(InteriorElement)({
    top: '15%',
    bottom: 0
});

const LoadingHero = props => (
    <Container>
        <Headline />
        <Tag />
        <Interior />
    </Container>
);

export default LoadingHero;
