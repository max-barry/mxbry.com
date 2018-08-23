import React from 'react';
import styled from 'react-emotion';
import { Center } from './components/Structures';
import { colors } from './settings';

const Container = styled(Center)({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    minHeight: '100vh',
    a: {
        // textDecoration: 'none',
        color: colors.greyDark,
        '&:visited': {
            color: colors.greyDark
        }
    }
});

const MissingPage = props => (
    <Container>
        <h1>mxbry.com | I couldn't find a page for that</h1>
        <h3>
            <a href="/">Try the homepage</a> for a list of all projects I've
            been working on
        </h3>
    </Container>
);

export default MissingPage;
