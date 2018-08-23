import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { checkA11y } from '@storybook/addon-a11y';

// if (process.env.NODE_ENV !== 'production') {
//     const { whyDidYouUpdate } = require('why-did-you-update');
//     whyDidYouUpdate(React);
// }

const reqComponents = require.context('../components', true, /\.stories\.js$/);
const reqContainers = require.context('../containers', true, /\.stories\.js$/);

const loadStories = () => {
    reqComponents.keys().forEach(filename => reqComponents(filename));
    reqContainers.keys().forEach(filename => reqContainers(filename));
};

addDecorator(checkA11y);
addDecorator(withKnobs);

configure(loadStories, module);
