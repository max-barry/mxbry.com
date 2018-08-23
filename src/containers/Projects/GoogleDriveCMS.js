import React, { Fragment } from 'react';
import { Hero, List } from '../../components/Display';
import { Section } from '../../components/Structures';
import { dimensions, bs } from '../../settings';
import { googledrivecms } from './constants';

import cover from '../../images/projects/googledrivecms/cover.jpg';

const { name, color, deck } = googledrivecms;

const items = [
    { title: name, link: 'https://www.drivecms.xyz/' },
    {
        title: 'Medium',
        deck: 'The original Medium post outlining the project',
        link:
            'https://words.mxbry.com/how-i-used-google-drive-and-firebase-to-give-my-static-site-a-cms-7226e01a51b5'
    },
    {
        title: 'GitHub',
        deck: 'GitHub for the static website hosting the project',
        link: 'https://github.com/max-barry/google-drive-cms'
    }
];

const GoogleDriveCMS = props => (
    <Fragment>
        <Hero
            color={color}
            title={name}
            img={cover}
            deck={deck}
            year={'2015'}
        />
        <Section
            maxWidth={dimensions.narrowContainer}
            style={{ marginTop: bs(2), marginBottom: bs(2) }}
        >
            <List items={items} color={color} />
        </Section>
    </Fragment>
);

export default GoogleDriveCMS;

// export const WrappedGoogleDriveCMS = withWrap({
//     name: projectName,
//     color: projectColor,
//     deck: projectDeck,
//     url: projectUrl
// })(GoogleDriveCMS);
