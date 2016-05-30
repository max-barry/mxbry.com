import React from 'react';

import { columnData } from './_columnData.js';
import { SplashLayout } from './layouts/react.SplashLayout.jsx';
import { SplashColumn } from './parts/react.SplashColumn.jsx';

export class SplashHero extends React.Component {
    render() {
        return (
            <SplashLayout wrapClass='splash--hero'>
                <SplashColumn data={ columnData.made } />
                <SplashColumn data={ columnData.active } />
                <SplashColumn data={ columnData.xoxo } />
            </SplashLayout>
        );
    }
}
