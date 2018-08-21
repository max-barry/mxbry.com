import React, { Component, Fragment } from 'react';
import styled from 'react-emotion';
import { tint } from 'polished';
import {
    shevy,
    dimensions,
    bs,
    transitionTimes,
    styles,
    fontWeights,
    colors,
    bsint
} from '../../settings';
import {
    Velmer,
    velmerColor,
    Route1,
    route1Color,
    EatWithMe,
    eatWithMeColor,
    GoogleDriveCMS,
    googleDriveCMSColor,
    OpenSource,
    openSourceColor
} from './projects';
import ContactLinks from './ContactLinks';

const initialSpace = bsint(3);

const Container = styled('div')({
    maxWidth: dimensions.narrowContainer,
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingTop: initialSpace
});

const Headline = styled('h1')(shevy.h1, {});

const Deck = styled('h2')(shevy.h3, {
    display: 'block',
    maxWidth: 480
});

const Nav = styled('ul')({
    marginTop: bs(2)
});

const NavShared = styled('li')(shevy.h4, {
    padding: styles.fn.pad(0.5),
    paddingLeft: bs(2.5),
    position: 'relative',
    cursor: 'pointer',
    margin: 0
});

const NavHeading = styled(NavShared)({
    fontWeight: fontWeights.heavy,
    marginBottom: bs(1),
    padding: 0,
    '&:not(:first-child)': {
        marginTop: bs(1.5)
    }
});

const NavLi = styled(NavShared)(({ color }) => ({
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
        <Fragment>
            <Container>
                <Headline>Max Barry</Headline>
                <Deck>
                    Business founder and creative technologist. Available for
                    work in London &amp; remote
                </Deck>
                <Nav>
                    <NavHeading>Recent work</NavHeading>
                    <NavLi color={velmerColor}>
                        <strong>Velmer 2018</strong> Founded a business
                        reimagining daily contact lenses
                    </NavLi>
                    <NavLi color={eatWithMeColor}>
                        <strong>Eat With Me 2018-19</strong> An ongoing project
                        all about food
                    </NavLi>
                    <NavLi color={route1Color}>
                        <strong>Route1 2017</strong> CTO for award winning
                        white-collar recruitment startup
                    </NavLi>
                    <NavLi color={googleDriveCMSColor}>
                        <strong>drivecms.xyz 2015</strong> An open source
                        headless CMS
                    </NavLi>
                    <NavLi color={openSourceColor}>
                        <strong>Open source work</strong> Creative and
                        performance led mini-projects
                    </NavLi>
                    <NavHeading>Working with me</NavHeading>
                    <NavLi color={colors.greyDark}>
                        <strong>What I work on</strong> Advising new businesses.
                        Creative and product development. React and other
                        technical work.
                    </NavLi>
                    <NavLi color={colors.greyDark}>
                        <strong>Where to find me</strong> Links to my work
                        around the internet
                    </NavLi>
                </Nav>
            </Container>
            <ContactLinks />
            <Velmer />
            <EatWithMe />
            <Route1 />
            <GoogleDriveCMS />
            <OpenSource />
            <ContactLinks style={{ marginBottom: 0 }} />
        </Fragment>
    );
}

export default Home;
