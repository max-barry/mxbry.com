import { configure } from '@storybook/react';
import '@storybook/addon-console';

import '../src/index.styles.js';

function loadStories() {
    require('../src/stories');
}

configure(loadStories, module);
