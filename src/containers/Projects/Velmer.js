import React, { Fragment } from 'react';
import {
    Hero,
    Lede,
    Gallery,
    makeGalleryItems,
    Img,
    Video,
    FocusText,
    List
} from '../../components/Display';
import { FlexibleGrid, Section } from '../../components/Structures';
import { dimensions } from '../../settings';
import withWrap from './Wrap';

// Load in the image paths
import cafe from '../../images/projects/velmer/cafe.jpg';
import pack1 from '../../images/projects/velmer/packshot-1.jpg';
import pack2 from '../../images/projects/velmer/packshot-2.jpg';
import pack3 from '../../images/projects/velmer/packshot-3.jpg';
import sitting from '../../images/projects/velmer/sitting.jpg';
import yoga from '../../images/projects/velmer/yoga.jpg';
import website from '../../images/projects/velmer/velmer.co.uk.jpg';
import cover from '../../images/projects/velmer/cover.jpg';

// Turn the images in to items for the gallery
const projectImages = makeGalleryItems([
    [cafe, 16, 9, { alt: 'Velmer Facebook advert of a lady in a cafe' }],
    [pack1, 1, 1, { alt: 'Packshot of a green Velmer lenses box I' }],
    [pack2, 1, 1, { alt: 'Packshot of a green Velmer lenses box II' }],
    [pack3, 1, 1, { alt: 'Packshot of a blue Velmer lenses box' }],
    [
        sitting,
        16,
        9,
        { alt: 'Velmer Facebook advert of a lady sitting on a bench' }
    ],
    [yoga, 16, 9, { alt: 'Velmer Facebook advert of a lady doing yoga' }]
]);

const timeline = [
    { title: 'Apr. 2017', deck: 'Pre-project research' },
    { title: 'May 2017', deck: '1st round of investment' },
    {
        title: 'Summer 2017',
        deck:
            'Online & offline experience design. Supply & logistics negotiation'
    },
    {
        title: 'Oct. 2017',
        deck: 'Launch and 2nd round of investment'
    },
    {
        title: 'Winter 2018',
        deck:
            'Audience building through content, paid channels, and press outreach'
    }
];

const projectName = 'Velmer Daily Contact Lenses';
const projectDeck =
    'I co-founded Velmer to bring a new contact lens to the UK market. In early-2017 we took 2 rounds of seed investment, before building monthly revenue and customers across the UK.';
export const projectColor = '#198e67';
export const projectHeader = 'velmer';
export const projectUrl = '/velmer';

const Velmer = props => (
    <Fragment>
        <Hero
            id={projectHeader}
            color={projectColor}
            title={projectName}
            img={cover}
            deck={projectDeck}
            year={2018}
        />
        <Section>
            <Lede
                title={
                    'Founding & financing a modern startup in physical product'
                }
                color={projectColor}
            >
                Velmer delivered a new type of daily contact lenses to UK doors.
                A great chance to work with physical product, having previously
                been focused on online services and SAAS. Velmer was a revenue
                generating business, in a difficult industry, built from the
                ground up in the UK.
            </Lede>
        </Section>
        <Gallery items={projectImages} />
        <FocusText color={projectColor}>
            I co-founded Velmer and took it from idea to market. I deeply
            enjoyed building out early-business infrastructure, negotiating
            logistics &amp; product supply, securing capital investment, and
            company tax structuring. It was a hugely ambitious project that was
            a major milestone for me.
            <br />
            <br />
            Tangible production included packaging design, digital architecture
            and production, and marketing operations (content, affiliate,
            partner, paid).
        </FocusText>
        <Section maxWidth="none">
            <FlexibleGrid
                alignItems="stretch"
                columnStyles={{ display: 'flex', justifyContent: 'center' }}
                column1={
                    <div
                        style={{
                            maxWidth: dimensions.loneMedia,
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-evenly'
                        }}
                    >
                        <Video
                            alt="Longform Velmer advert about how to spend money"
                            src="https://youtu.be/FIy1z4DtHrw"
                            x={1}
                            y={1}
                        >
                            Longform advert. Run on Facebook &amp; Instagram
                        </Video>
                        <Video
                            alt="Longform Velmer advert targeting gym users"
                            src="https://youtu.be/HNrHmIer9GA"
                            x={1}
                            y={1}
                        >
                            Proof of concept ad targeting runners and gym users.
                            Run on Facebook &amp; Instagram
                        </Video>
                    </div>
                }
                column2={
                    <div
                        style={{
                            maxWidth: dimensions.loneMedia,
                            width: '100%'
                        }}
                    >
                        <Img
                            key="velmer_website_image"
                            src={website}
                            alt="velmer.co.uk web design"
                            x={800}
                            y={2453}
                        />
                    </div>
                }
            />
        </Section>
        <Section maxWidth={dimensions.narrowContainer}>
            <List items={timeline} color={projectColor} />
        </Section>
    </Fragment>
);

export default Velmer;

export const WrappedVelmer = withWrap({
    name: projectName,
    color: projectColor,
    deck: projectDeck,
    url: projectUrl
})(Velmer);
