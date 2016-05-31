import React from 'react';

import { columnData } from './_columnData.js';
import { SplashLayout } from './layouts/react.SplashLayout.jsx';
import { SplashColumn } from './parts/react.SplashColumn.jsx';

import { revealHeaderOnScroll } from './_actions.js';


export class SplashHeader extends React.Component {

    componentDidMount() {
        revealHeaderOnScroll();
    }

    render() {

        return (
            <SplashLayout wrapClass='splash--header'>
                <SplashColumn solo={ this.props.columnKey === 'active' } data={ columnData[this.props.columnKey] } />
            </SplashLayout>
        );
    }
}
