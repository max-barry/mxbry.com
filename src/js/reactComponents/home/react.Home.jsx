import React from 'react';
import SweetScroll from 'sweet-scroll';

import { SplashHero } from '../splash/react.SplashHero.jsx';
import { SplashHeader } from '../splash/react.SplashHeader.jsx';
import { AboutMe } from '../about/parts/react.AboutMe.jsx';
import { ActivityList } from '../active/parts/react.ActivityList.jsx';
import { WorkList } from '../work/parts/react.WorkList.jsx';

export class Home extends React.Component {

    componentDidMount() {

        if (!mx.sweetScroll) {
            mx.sweetScroll = new SweetScroll({
                offset: -150,
            });
        }

        mx._body.addClass('isHome');

    }

    componentWillUnmount() {
        mx._body.removeClass('isHome');
    }

    render() {
        return (
            <div>
                <SplashHero />
                <aside className="about--hero fixed">
                    <AboutMe />
                </aside>
                <SplashHeader columnKey='active' />
                <ActivityList />
                <SplashHeader columnKey='made' />
                <WorkList />
            </div>
        );
    }
}
