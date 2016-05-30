import React from 'react';

import { ActivityList } from './parts/react.ActivityList.jsx';
import { SplashHeader } from '../splash/react.SplashHeader.jsx';

export class Active extends React.Component {

    render () {
        return (
            <article>
                <SplashHeader columnKey='active' />
                <ActivityList />
            </article>
        );
    }

}
