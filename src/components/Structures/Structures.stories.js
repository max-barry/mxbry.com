import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, text, color } from '@storybook/addon-knobs';
import centered from '@storybook/addon-centered';
// import faker from 'faker';
// import { shuffle } from 'lodash';
import { FlexibleGrid } from './Structures';

storiesOf('Structures', module)
    .addDecorator(centered)
    .add('Structures.FlexibleGrid', _ => (
        <FlexibleGrid
            column1={<p key="dog">Dog</p>}
            column2={<p key="cat">Cat</p>}
            column3={<p key="horse">Horse</p>}
        />
    ));
