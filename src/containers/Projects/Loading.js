import React from 'react';
import Loadable from 'react-loadable';
import LoadableVisibility from 'react-loadable-visibility/react-loadable';
import { LoadingHero, LoadingWrap } from '../../components/Loading';

const Wrap = Loadable({
    loader: () => import('./Wrap'),
    loading: () => null
});

const wrapProject = (loaded, props) => {
    const Loaded = loaded.default;
    const loadedDetails = Loaded.details;
    return (
        <Wrap {...loadedDetails}>
            <Loaded {...props} />
        </Wrap>
    );
};

const loadableComponents = (wrapped = false, extras = {}) => {
    const Loader = wrapped ? Loadable : LoadableVisibility;
    const LoadingElement = wrapped ? LoadingWrap : LoadingHero;
    return {
        velmer: Loader({
            loader: () => import('../Projects/Velmer'),
            loading: LoadingElement,
            ...extras
        }),
        opensource: Loader({
            loader: () => import('../Projects/OpenSource'),
            loading: LoadingElement,
            ...extras
        }),
        googledrivecms: Loader({
            loader: () => import('../Projects/GoogleDriveCMS'),
            loading: LoadingElement,
            ...extras
        }),
        route1: Loader({
            loader: () => import('../Projects/Route1'),
            loading: LoadingElement,
            ...extras
        }),
        eatwithme: Loader({
            loader: () => import('../Projects/EatWithMe'),
            loading: LoadingElement,
            ...extras
        })
    };
};

export const loadable = loadableComponents(true, { render: wrapProject });
export const loadableVisibility = loadableComponents();
