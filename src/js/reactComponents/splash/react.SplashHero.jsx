import React from 'react';

import { columnData } from './_columnData.js';
import { SplashLayout } from './layouts/react.SplashLayout.jsx';
import { SplashColumn } from './parts/react.SplashColumn.jsx';

import { splashMenuReveal, splashLetterGif } from './_actions.js';

export class SplashHero extends React.Component {

    componentDidMount() {
        splashMenuReveal();
        splashLetterGif();
    }

    render() {
        return (
            <SplashLayout wrapClass='splash--hero'>
                <SplashColumn ref='made' data={ columnData.made } />
                <SplashColumn ref='active' data={ columnData.active } />
                <SplashColumn ref='xoxo' data={ columnData.xoxo } />
            </SplashLayout>
        );
    }
}
