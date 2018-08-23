import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered';
import LoadingHero from './Loading.Hero';
import LoadingHome from './Loading.Home';

storiesOf('Loading', module)
    .add('Loading.Hero', _ => <LoadingHero />)
    .add('Loading.Home', _ => <LoadingHome />);
