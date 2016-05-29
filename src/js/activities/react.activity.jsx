import React from 'react';
import ReactDOM from 'react-dom';
import { getServices, renderServices } from './index.js';

class Activity extends React.Component {

    render () {

        return (
            <li className="activities__item media">
                <a target="_blank" href={ this.props.data.url } className={`img icon i-${ this.props.data.source } i-size--medium`}></a>
                <div className="bd">
                    <p>
                        <a target="_blank" href={ this.props.data.url }>{ this.props.data.title }</a>
                        { this.props.data.deck }
                    </p>
                </div>
            </li>
        );
    }
}


class Activities extends React.Component {

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
                    return <Activity key={activity.id} data={activity} />;
                })}
            </ul>
        );
    }
}

// TODO : Add pagination to load more items

export function initActivities() {
    // Mount activity component
    ReactDOM.render(<Activities />, mx._activity[0]);
}
