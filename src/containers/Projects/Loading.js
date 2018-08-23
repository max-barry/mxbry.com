import React from 'react';
import Loadable from 'react-loadable';
import LoadableVisibility from 'react-loadable-visibility/react-loadable';
import { LoadingHero } from '../../components/Loading';

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

const loadableComponents = (Loader, extras = {}) => ({
    velmer: Loader({
        loader: () => import('../Projects/Velmer'),
        loading: LoadingHero,
        ...extras
    }),
    opensource: Loader({
        loader: () => import('../Projects/OpenSource'),
        loading: () => LoadingHero,
        ...extras
    }),
    googledrivecms: Loader({
        loader: () => import('../Projects/GoogleDriveCMS'),
        loading: () => LoadingHero,
        ...extras
    }),
    route1: Loader({
        loader: () => import('../Projects/Route1'),
        loading: () => LoadingHero,
        ...extras
    }),
    eatwithme: Loader({
        loader: () => import('../Projects/EatWithMe'),
        loading: () => LoadingHero,
        ...extras
    })
});

export const loadable = loadableComponents(Loadable, { render: wrapProject });
export const loadableVisibility = loadableComponents(LoadableVisibility);
