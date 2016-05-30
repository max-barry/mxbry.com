import React from 'react';

import { columnData } from './_columnData.js';
import { SplashLayout } from './layouts/react.SplashLayout.jsx';
import { SplashColumn } from './parts/react.SplashColumn.jsx';

export class SplashHeader extends React.Component {
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
