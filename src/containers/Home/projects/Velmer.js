import React, { Fragment } from 'react';
import {
    Hero,
    Lede,
    Gallery,
    galleryTypes,
    Img,
    Video,
    FocusText,
    List
} from '../../../components/Display';
import { dimensions } from '../../../settings';

// Load in the image paths
import cafe from '../../../images/projects/velmer/cafe.jpg';
import pack1 from '../../../images/projects/velmer/packshot-1.jpg';
import pack2 from '../../../images/projects/velmer/packshot-2.jpg';
import pack3 from '../../../images/projects/velmer/packshot-3.jpg';
import sitting from '../../../images/projects/velmer/sitting.jpg';
import yoga from '../../../images/projects/velmer/yoga.jpg';
import website from '../../../images/projects/velmer/velmer.co.uk.jpg';

// Turn the images in to items for the gallery
const projectImages = [
    [cafe, 16, 9],
    [pack1, 1, 1],
    [pack2, 1, 1],
    [pack3, 1, 1],
    [sitting, 16, 9],
    [yoga, 16, 9]
    // ['https://youtu.be/HNrHmIer9GA', 1, 1, Video]
    // [website, 800, 2453]
].map(([src, x, y, component]) => ({
    type: galleryTypes.media,
    component: component || Img,
    props: { src, x, y }
}));

const timeline = [
    { title: 'Apr. 2017', deck: 'Pre-project research' },
    { title: 'May 2017', deck: '1st round of investment' },
    {
        title: 'Summer 2017',
        deck:
            'Online & offline experience design. Supply & logistics negotiation'
    },
    {
        title: 'October 2017',
        deck: 'Launch and 2nd round of investment'
    },
    {
        title: 'Winter / Spring 2018',
        deck:
            'Audience building through content, paid channels, and press outreach'
    }
];

export const projectColor = '#198e67';
const projectName = 'Velmer Daily Contact Lenses';
const projectDeck =
    'I co-founded Velmer to bring a new contact lens to the UK market. In early-2017 we took 2 rounds of seed investment, before building monthly revenue and customers across the UK.';

const { sectionSpaceDesktop: space } = dimensions;
const marginStyling = { marginTop: space, marginBottom: space };
const sectionContainer = {
    maxWidth: dimensions.loneMedia,
    marginLeft: 'auto',
    marginRight: 'auto',
    ...marginStyling
};

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
            title={'Founding & financing a modern startup in physical product'}
            color={projectColor}
            style={marginStyling}
        >
            Velmer delivered a new type of daily contact lenses to UK doors. A
            great chance to work with physical product, having previously been
            focused on online services and SAAS. Velmer was a revenue generating
            business, in a difficult industry, built from the ground up in the
            UK.
        </Lede>
        <Gallery items={projectImages} />
        <div
            style={{
                position: 'relative',
                height: '100vh',
                width: '100vw'
            }}
        >
            <FocusText color={projectColor}>
                I loved having the opportunity to work with physical product,
                having previously being involved in a lot of online services and
                SAAS platforms. Velmer was a revenue generating business built
                from the ground up in the UK, in what proved to be a booming
                industry.
            </FocusText>
        </div>
        <div style={sectionContainer}>
            <Video src="https://youtu.be/FIy1z4DtHrw" x={1} y={1}>
                Longform advert. Run on Facebook &amp; Instagram
            </Video>
        </div>
        <div
            style={{
                ...sectionContainer,
                maxWidth: dimensions.narrowContainer
            }}
        >
            <List items={timeline} color={projectColor} />
        </div>
        <div style={sectionContainer}>
            <Video src="https://youtu.be/HNrHmIer9GA" x={1} y={1}>
                Proof of concept ad targeting runners and gym users. Run on
                Facebook &amp; Instagram
            </Video>
        </div>
    </Fragment>
);

export default Velmer;
