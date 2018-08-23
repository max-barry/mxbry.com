import React, { Component, Fragment } from 'react';
import { colors } from '../../settings';
import * as constants from '../Projects/constants';
import ContactLinks from './ContactLinks';
import { loadableVisibility } from '../Projects/Loading';
import {
    Container,
    Headline,
    Deck,
    Nav,
    NavLi,
    NavHeading
} from './Home.styles';

const contactHeader = 'contactlinks';

const {
    velmer: Velmer,
    route1: Route1,
    eatwithme: EatWithMe,
    opensource: OpenSource,
    googledrivecms: GoogleDriveCMS
} = loadableVisibility;

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
                    <NavLi color={constants.velmer.color}>
                        <a href={constants.velmer.url}>
                            <strong>Velmer 2018</strong> Founded a business
                            reimagining daily contact lenses
                        </a>
                    </NavLi>
                    <NavLi color={constants.eatwithme.color}>
                        <a href={constants.eatwithme.url}>
                            <strong>Eat With Me 2018-19</strong> An ongoing
                            project all about food
                        </a>
                    </NavLi>
                    <NavLi color={constants.route1.color}>
                        <a href={constants.route1.url}>
                            <strong>Route1 2017</strong> CTO for award winning
                            white-collar recruitment startup
                        </a>
                    </NavLi>
                    <NavLi color={constants.googledrivecms.color}>
                        <a href={constants.googledrivecms.url}>
                            <strong>drivecms.xyz 2015</strong> An open source
                            headless CMS
                        </a>
                    </NavLi>
                    <NavLi color={constants.opensource.color}>
                        <a href={constants.opensource.url}>
                            <strong>Open source work</strong> Creative and
                            performance led mini-projects
                        </a>
                    </NavLi>
                    <NavHeading>Working with me</NavHeading>
                    <NavLi color={colors.greyDark}>
                        <a href={`#${contactHeader}`}>
                            <strong>What I work on</strong> Advising new
                            businesses. Creative and product development. React
                            and other technical work.
                        </a>
                    </NavLi>
                    <NavLi color={colors.greyDark}>
                        <a href={`#${contactHeader}`}>
                            <strong>Where to find me</strong> Links to my work
                            around the internet
                        </a>
                    </NavLi>
                </Nav>
            </Container>
            <ContactLinks id={contactHeader} />
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
