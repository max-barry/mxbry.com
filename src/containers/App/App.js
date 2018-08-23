import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';
import * as projects from '../Projects/constants';
import { loadable } from '../Projects/Loading';
import { LoadingHome } from '../../components/Loading';
import MissingPage from '../../404';

const Home = Loadable({
    loader: () => import('../Home'),
    loading: LoadingHome
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

const projectsUrlComponentMap = [
    'velmer',
    'opensource',
    'googledrivecms',
    'route1',
    'eatwithme'
].map(project => [projects[project].url, loadable[project]]);

class App extends Component {
    render = () => (
        <Fragment>
            <Meta />
            <BrowserRouter>
                <Fragment>
                    <main>
                        <Switch>
                            <Route exact path="/" component={Home} />
                            {projectsUrlComponentMap.map(
                                ([url, component], i) => (
                                    <Route
                                        exact
                                        key={`route_${i}`}
                                        path={url}
                                        component={component}
                                    />
                                )
                            )}
                            <Route component={MissingPage} />
                        </Switch>
                    </main>
                </Fragment>
            </BrowserRouter>
        </Fragment>
    );
}

export default App;
