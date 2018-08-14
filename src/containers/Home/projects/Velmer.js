import React, { Fragment } from 'react';
import { Hero, Lede } from '../../../components/Display';
import { dimensions } from '../../../settings';

export const projectColor = '#198e67';
const projectName = 'Velmer Daily Contact Lenses';
const projectDeck =
    'I co-founded Velmer to bring a new contact lens to the UK market. In early-2017 we took 2 rounds of seed investment, before building monthly revenue and customers across the UK.';

const { sectionSpaceDesktop: space } = dimensions;

const Velmer = props => (
    <Fragment>
        <Hero
            color={projectColor}
            title={projectName}
            img={'https://source.unsplash.com/random/720x1280'}
            deck={projectDeck}
            year={2018}
        />
        <Lede
            title={'Founding & financing a modern startup'}
            deck={'Lots goes in the deck'}
            color={projectColor}
            style={{ marginTop: space, marginBottom: space }}
        />
    </Fragment>
);

export default Velmer;
