import React, { Fragment } from 'react';
import { Hero, FocusText, Img } from '../../components/Display';
import { Section, FlexibleGrid } from '../../components/Structures';
import { dimensions, bs } from '../../settings';
import { eatwithme } from './constants';

import cover from '../../images/projects/eatwithme/cover.jpg';
import buttons from '../../images/projects/eatwithme/buttons.jpg';
import card from '../../images/projects/eatwithme/card.jpg';
import nationals from '../../images/projects/eatwithme/nationals.jpg';

const { name, color, deck, url } = eatwithme;

const imgStyles = {
    maxWidth: dimensions.loneMedia,
    marginLeft: 'auto',
    marginRight: 'auto'
};

const EatWithMe = props => (
    <Fragment>
        <Hero
            color={color}
            title={name}
            img={cover}
            deck={deck}
            year={'2018 / 2019'}
        />
        <Section maxWidth="none">
            <FocusText color={color}>
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
        <Section>
            <FlexibleGrid
                gap={bs(2)}
                column1={
                    <Img
                        x={1}
                        y={1}
                        src={card}
                        alt="Eat with Me card UI element"
                        style={imgStyles}
                    />
                }
                column2={
                    <Img
                        x={1}
                        y={1}
                        src={nationals}
                        alt="Eat with Me cuisines UI element"
                        style={imgStyles}
                    />
                }
                column3={
                    <Img
                        x={1}
                        y={1}
                        src={buttons}
                        alt="Eat with Me buttons UI element"
                        style={imgStyles}
                    />
                }
            />
        </Section>
    </Fragment>
);

EatWithMe.details = {
    name,
    color,
    deck,
    url
};

export default EatWithMe;
