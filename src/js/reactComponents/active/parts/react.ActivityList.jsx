import React from 'react';
import ReactDOM from 'react-dom';

import { Activity } from './react.Activity.jsx';
import { getServices } from '../services/index.js';
import { ID } from '../../../parts/_utilities.js';

export class ActivityList extends React.Component {

    constructor (props) {
        super(props);

        this.state = {
            items: [],
        };
    }

    componentDidMount () {
        getServices().then((activities) => {

            var el = ReactDOM.findDOMNode(this);

            this.setState({
                items: activities
            });

            this.ActivitiesWaypoint = new Waypoint({
                element: el,
                handler: () => {
                    el.classList.add('active');
                },
                offset: '60%'
            });

        });
    }

    render () {
        return (
                <ul id='activity' className='activities__list'>
                    { this.state.items.map(( activity ) => {
                        return <Activity key={ ID() } data={ activity } />;
                    })}
                </ul>
        );
    }

}
