import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered';
import LoadingHero from './Loading.Hero';

storiesOf('Loading', module).add('Loading.Hero', _ => <LoadingHero />);
