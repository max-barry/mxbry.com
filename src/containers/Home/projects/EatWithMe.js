import React, { Fragment } from 'react';
import { Hero, FocusText, Img, List } from '../../../components/Display';
import { Section, FlexibleGrid, Center } from '../../../components/Structures';
import { dimensions, bs } from '../../../settings';

import cover from '../../../images/projects/eatwithme/cover.jpg';

const projectName = 'Eat With Me';
const projectDeck =
    'Ongoing project looking to build a new way to recommend the best places to eat and drink in an area. Inspired by amazingly modern media sites like The Ringer, Vox and Genius.';
export const projectColor = '#0325ff';
export const projectHeader = 'eatwithme';

const EatWithMe = props => (
    <Fragment>
        <Hero
            id={projectHeader}
            color={projectColor}
            title={projectName}
            img={cover}
            deck={projectDeck}
            year={'2018 / 2019'}
        />
        <Section maxWidth="none">
            <FocusText color={projectColor}>
                I want to make something to answer "where is good to eat around
                here?" Community driven recommendation, in the lightest,
                lightest way possible. Nobody needs more websites in their life,
                so it can't be another listings site. Eat With Me is pre-launch
                and deeply inspired by multi-channel sites like The Ringer, Vox
                and Genius.
                <br />
                <br />
                It's a background project that I work on passively. Targeting a
                launch in 2019.
            </FocusText>
        </Section>
    </Fragment>
);

export default EatWithMe;
