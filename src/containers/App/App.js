import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Loadable from 'react-loadable';
import * as projects from '../Projects/constants';
import { loadable } from '../Projects/Loading';

const Home = Loadable({
    loader: () => import('../Home'),
    loading: () => <p>Loading Home</p>
});

const Meta = Loadable({
    loader: () => import('../../components/Meta'),
    loading: () => null,
    render: (loaded, props) => {
        const { DefaultMeta, GoogleTagManager } = loaded;
        return (
            <Fragment>
                <DefaultMeta />
                <GoogleTagManager gtmId="GTM-PT84K6" />
            </Fragment>
        );
    }
});

// const projectsUrlComponentMap = [
// 'velmer',
// 'opensource',
// 'googledrivecms',
// 'route1',
// 'eatwithme'
// ].map(project => [projects[project].url, loadable[project]]);
const projectsUrlComponentMap = [];

class App extends Component {
    render = () => (
        <Fragment>
            <Meta />
            <BrowserRouter>
                <Fragment>
                    <main>
                        <Route exact path="/" component={Home} />
                        {projectsUrlComponentMap.map(([url, component], i) => (
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
