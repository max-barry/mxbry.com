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

        let thisColumnData = columnData[this.props.columnKey];
        thisColumnData.solo = this.props.columnKey === 'active';

        return (
            <SplashLayout wrapClass='splash--header'>
                <SplashColumn data={ thisColumnData } />
            </SplashLayout>
        );
    }
}
