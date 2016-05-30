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
            reveal: '',
        };
    }

    componentDidMount () {
        getServices().then((activities) => {

            this.setState({
                items: activities
            });

            this.ActivitiesWaypoint = new Waypoint({
                element: ReactDOM.findDOMNode(this),
                handler: () => {
                    this.setState({
                        reveal: 'active'
                    });
                },
                offset: '60%'
            });

        });
    }

    render () {
        return (
                <ul className={`activities__list ${ this.state.reveal }`}>
                    { this.state.items.map(( activity ) => {
                        return <Activity key={ ID() } data={ activity } />;
                    })}
                </ul>
        );
    }

}
