import React, { Fragment } from 'react';
import { Hero, List } from '../../components/Display';
import { Section } from '../../components/Structures';
import { dimensions, bs } from '../../settings';
import withWrap from './Wrap';

import cover from '../../images/projects/googledrivecms/cover.jpg';

const projectName = 'drivecms.xyz';
const projectDeck =
    'An old open source project born from working in advertising firms that constantly tried to teach new tools to clients. I wanted a CMS that worked in a language people already knew: a Google Doc.';
export const projectColor = '#009688';
export const projectHeader = 'googledrivecms';
export const projectUrl = '/google-drive-cms';

const items = [
    { title: 'drivecms.xyz', link: 'https://www.drivecms.xyz/' },
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
            id={projectHeader}
            color={projectColor}
            title={projectName}
            img={cover}
            deck={projectDeck}
            year={'2015'}
        />
        <Section
            maxWidth={dimensions.narrowContainer}
            style={{ marginTop: bs(2), marginBottom: bs(2) }}
        >
            <List items={items} color={projectColor} />
        </Section>
    </Fragment>
);

export default GoogleDriveCMS;

export const WrappedGoogleDriveCMS = withWrap({
    name: projectName,
    color: projectColor,
    deck: projectDeck,
    url: projectUrl
})(GoogleDriveCMS);
