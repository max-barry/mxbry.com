import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, text, color } from '@storybook/addon-knobs';
import centered from '@storybook/addon-centered';
import faker from 'faker';
import { shuffle } from 'lodash';
import { Img, Video } from './Media';
import Hero from './Hero';
import Lede from './Lede';
import List from './List';
import Gallery, { galleryTypes } from './Gallery';
import { dimensions } from '../../settings';
import FocustText from './FocusText';

const defaultTitle = faker.lorem.words(4);
const defaultDeck = faker.lorem.lines(4);
const defaultBodyCopy = faker.lorem.lines(10);
const defaultYear = faker.random.number({ min: 2011, max: 2018 });

const dummyListItems = Array(5)
    .fill()
    .map(_ => ({
        title: faker.lorem.words(1),
        deck: faker.lorem.words(5),
        link: Math.random() >= 0.5 ? 'https://google.com' : null
    }));

const makeGalleryItem = _ => {
    const x = faker.random.number({ min: 450, max: 1200 });
    const y = faker.random.number({ min: 450, max: 1200 });
    return {
        component: Img,
        type: galleryTypes.media,
        props: {
            x,
            y,
            alt: faker.lorem.words(3),
            src: `https://source.unsplash.com/random/${x}x${y}`,
            style: { borderRadius: dimensions.bevel }
        }
    };
};

const makeDeckItem = _ => ({
    type: galleryTypes.deck,
    deck: faker.lorem.lines(3),
    deckLede: faker.lorem.words(3)
});

storiesOf('Display', module)
    .addDecorator(centered)
    .add('Display.Video', _ => (
        <div style={{ width: 400 }}>
            <Video
                alt="Example video"
                src="https://www.youtube.com/watch?v=O5TaYFi4UVA"
            />
        </div>
    ))
    .add('Display.Img', _ => (
        <div style={{ width: 400 }}>
            <Img
                alt="Example image"
                src="https://source.unsplash.com/random/800x600"
                caption="This is my demo caption that I'm adding"
            />
        </div>
    ))
    .add('Display.List', _ => {
        const c = color('Color', '#198e67');
        return <List color={c} items={dummyListItems} />;
    })
    .add('Display.FocusText', _ => {
        const c = color('Color', '#198e67');
        const text = color('Text', defaultBodyCopy);
        return <FocustText color={c}>{text}</FocustText>;
    })
    .add('Display.Hero', _ => {
        const c = color('Color', '#198e67');
        const title = text('Title', defaultTitle);
        const deck = text('Deck', defaultDeck);
        const year = text('Year', defaultYear);
        return (
            <div style={{ width: '100vw' }}>
                <Hero
                    title={title}
                    deck={deck}
                    color={c}
                    year={year}
                    img="https://source.unsplash.com/random/720x1280"
                />
            </div>
        );
    })
    .add('Display.Lede', _ => {
        const c = color('Color', '#198e67');
        const title = text('Title', defaultTitle);
        const deck = text('Deck', defaultDeck);
        return (
            <div style={{ width: '100vw' }}>
                <Lede color={c} title={title} deck={deck} />
            </div>
        );
    })
    .add('Display.Gallery', _ => {
        const media = Array(faker.random.number({ min: 3, max: 9 }))
            .fill()
            .map(makeGalleryItem);

        const requiredDecks = Math.max(Math.floor(media.length / 5), 1);
        const extraDecks = Array(requiredDecks)
            .fill()
            .map(makeDeckItem);
        const extras = shuffle([...media, ...extraDecks]);

        return (
            <div style={{ width: '100vw' }}>
                <Gallery items={[makeDeckItem(), ...extras]} />
            </div>
        );
    });
// .add('Display.Lede', _ => (
//     <div style={{ width: '100vw' }}>
//         <Lede title="Velmer Daily Contact Lenses" />
//     </div>
// ));
