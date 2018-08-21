import React, { Fragment } from 'react';
import { Hero, FocusText, Img, List } from '../../../components/Display';
import { Section, FlexibleGrid, Center } from '../../../components/Structures';
import { dimensions, bs } from '../../../settings';

import cover from '../../../images/projects/googledrivecms/cover.jpg';

const projectName = 'Open source work';
const projectDeck =
    "A collection of open source projects I've worked on over the years. Often the product of creative or performance driven research.";
export const projectColor = '#D81E5B';
export const projectHeader = 'opensource';

const items = [
    {
        title: 'CSS VHS',
        deck:
            'Secret tapes recovered from an 80s nightclub where things went wrong.',
        link: 'http://vhs.demo.mxbry.com/'
    },
    {
        title: 'Diction, My Boy game',
        deck: 'Using the HTML5 speech recognition API with Firebase [Chrome]',
        link: 'https://mxbry-diction.surge.sh/'
    },
    {
        title: 'CSS text shadow experiments',
        deck:
            'Messing around with different text-shadow animations on a hypothetical mxbry.com logo [Chrome, Firefox]',
        link:
            'http://textshadow.demo.mxbry.com/?utm_source=portfolioproject&utm_medium=portfolio&utm_campaign=Text%20Shadow%20Experiments'
    },
    {
        title: 'On Page Search',
        deck: 'Prototype UX for a realtime on-page search component.',
        link: 'http://search.demo.mxbry.com/'
    },
    {
        title: 'Jumpstart Static',
        deck: 'Yeoman project for static site generation.',
        link: 'https://www.npmjs.com/package/generator-jumpstart-static'
    },
    {
        title: 'Lazy image loading workflow',
        deck:
            'Article on adding lazy images to a project and the workflow around it',
        link:
            'https://words.mxbry.com/a-workflow-for-lazy-loading-images-with-nice-blurry-placeholders-8592894d13fa'
    }
];

const OpenSource = props => (
    <Fragment>
        <Section id={projectHeader} maxWidth="none" style={{ marginBottom: 0 }}>
            <Hero
                color={projectColor}
                title={projectName}
                img={cover}
                deck={projectDeck}
                year={'2014 - present'}
            />
        </Section>
        <Section
            maxWidth={dimensions.narrowContainer}
            style={{ marginTop: bs(2), marginBottom: bs(2) }}
        >
            <List items={items} color={projectColor} />
        </Section>
    </Fragment>
);

export default OpenSource;
