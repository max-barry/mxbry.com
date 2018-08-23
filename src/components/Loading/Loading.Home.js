import React from 'react';
import styled from 'react-emotion';
import { styles, dimensions, bs, mq, shevy } from '../../settings';

const Container = styled('div')(
    mq({
        maxWidth: dimensions.narrowContainer,
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingTop: [bs(3), dimensions.mobilePadding * 2],
        paddingLeft: [0, dimensions.mobilePadding],
        paddingRight: [0, dimensions.mobilePadding]
    })
);

const loadingElement = styled('span')(styles.loading, {
    display: 'block',
    width: '100%'
});

const Headline = styled(loadingElement)({
    maxWidth: 160,
    height: shevy.h1.fontSize,
    marginBottom: bs(0.5)
});

const Tag = styled(loadingElement)({
    maxWidth: 480,
    height: 70,
    marginBottom: bs(3)
});

const ListItem = styled(loadingElement)({
    height: shevy.h3.fontSize,
    maxWidth: 590,
    marginBottom: bs(1)
});

const ListHeader = styled(ListItem)({
    maxWidth: 160,
    marginBottom: bs(2)
});

const LoadingHome = props => (
    <Container>
        <Headline />
        <Tag />
        <ListHeader />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
    </Container>
);

export default LoadingHome;
