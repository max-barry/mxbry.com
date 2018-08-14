import React, { Component, Fragment } from 'react';
import styled from 'react-emotion';
import { tint } from 'polished';
import { shevy, dimensions, bs, transitionTimes, styles } from '../../settings';

const Container = styled('div')({
    maxWidth: dimensions.narrowContainer,
    marginLeft: 'auto',
    marginRight: 'auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    minHeight: '100vh'
});

const Headline = styled('h1')(shevy.h1, {});

const Deck = styled('h2')(shevy.h3, {
    display: 'block',
    maxWidth: 480
});

const Nav = styled('ul')({
    marginTop: bs(2)
});

const NavLi = styled('li')(shevy.h4, ({ color }) => ({
    padding: styles.fn.pad(0.5),
    paddingLeft: bs(2.5),
    position: 'relative',
    lineHeight: 1,
    cursor: 'pointer',
    margin: 0,
    transition: `background-color ${transitionTimes.weak}ms`,
    '&::before': {
        color,
        content: '"✖"',
        lineHeight: 1,
        position: 'absolute',
        left: bs(0.5),
        top: '50%',
        transform: 'translateY(-50%)',
        transition: `transform ${transitionTimes.minimal}ms ease-out`
    },
    '&:hover': {
        backgroundColor: tint(0.3, color),
        '&::before': {
            transform: 'translateY(-50%) scale(1.3)'
        }
    }
}));

class Home extends Component {
    render = () => (
        <Container>
            <Headline>Max Barry</Headline>
            <Deck>
                Business founder and creative technologist. Available for work
                in London &amp; remote
            </Deck>
            <Nav>
                <NavLi color={'red'}>
                    <strong>First line</strong> an item
                </NavLi>
                <NavLi color={'blue'}>
                    <strong>First line</strong> an item
                </NavLi>
                <NavLi color={'green'}>
                    <strong>First line</strong> an item
                </NavLi>
                <NavLi color={'yellow'}>
                    <strong>First line</strong> an item
                </NavLi>
            </Nav>
        </Container>
    );
}

export default Home;
