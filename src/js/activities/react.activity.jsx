import React from 'react';
import ReactDom from 'react-dom';
import { getServices, renderServices } from './index.js';

class Activity extends React.Component {

    render () {

        return (
            <li className="activities__item media">
                <a target="_blank" href={ this.props.data.url } className={`img icon --i-${ this.props.data.source } --medium`}></a>
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


export class Activities extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            items: [],
            reveal: '',
        };
    }

    componentDidMount () {
        getServices().then((activities) => {

            var _activitiesList = $('.activities__list')[0];

            this.setState({
                items: activities
            });

            this.ActivitiesWaypoint = new Waypoint({
                element: ReactDom.findDOMNode(this),
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
