import React from 'react';

import { SplashHeader } from '../splash/react.SplashHeader.jsx';
import { WorkList } from './parts/react.WorkList.jsx';

export class Work extends React.Component {

    render () {
        return (
            <article>
                <SplashHeader columnKey='made' />
                <WorkList />
            </article>
        );
    }

}
