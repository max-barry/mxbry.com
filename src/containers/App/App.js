import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from '../Home';
import {
    velmerUrl,
    route1Url,
    openSourceUrl,
    googleDriveCMSUrl,
    eatWithMeUrl,
    WrappedEatWithMe,
    WrappedVelmer,
    WrappedRoute1,
    WrappedOpenSource,
    WrappedGoogleDriveCMS
} from '../Projects';
import { DefaultMeta, GoogleTagManager } from '../../components/Meta';

const projects = [
    [velmerUrl, WrappedVelmer],
    [openSourceUrl, WrappedOpenSource],
    [googleDriveCMSUrl, WrappedGoogleDriveCMS],
    [route1Url, WrappedRoute1],
    [eatWithMeUrl, WrappedEatWithMe]
];

// const redirects = [
//     '/work',
//     '/where-max-is-active',
//     '/about',
//     '/work/zebra-horse-twitter',
//     '/work/mxbry',
//     '/work/jumpstart-static'
// ];

const GTM_ID = 'GTM-PT84K6';

class App extends Component {
    render = () => (
        <Fragment>
            <DefaultMeta />
            <GoogleTagManager gtmId={GTM_ID} />
            <BrowserRouter>
                <Fragment>
                    <main>
                        <Route exact path="/" component={Home} />
                        {projects.map(([url, component], i) => (
                            <Route
                                exact
                                key={`route_${i}`}
                                path={url}
                                component={component}
                            />
                        ))}
                    </main>
                </Fragment>
            </BrowserRouter>
        </Fragment>
    );
}

export default App;
