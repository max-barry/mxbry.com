import React from 'react';

import { SplashHero } from '../splash/react.SplashHero.jsx';
import { SplashHeader } from '../splash/react.SplashHeader.jsx';
import { About } from '../about/react.About.jsx';
import { ActivityList } from '../active/parts/react.ActivityList.jsx';
import { WorkList } from '../work/parts/react.WorkList.jsx';

export class Home extends React.Component {
    render() {
        return (
            <div>
                <SplashHero />
                <aside className="about--hero fixed">
                    <About />
                </aside>
                <SplashHeader columnKey='active' />
                <ActivityList />
                <SplashHeader columnKey='made' />
                <WorkList />
            </div>
        );
    }
}
