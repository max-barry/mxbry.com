import React from 'react';
import ReactDom from 'react-dom';
import { getServices, renderServices } from './index.js';

class Activity extends React.Component {

    render () {

        return (
            <li className="activities__item media">
                <a target="_blank" href={ this.props.data.url } className="img">
                    <img src={`/img/icons/${ this.props.data.source }.svg`} />
                </a>
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
                    console.log('reveal');
                    this.setState({
                        reveal: 'activities__visible'
                    });
                },
                offset: '60%'
            });

            // windowScrollimator.watch(_activitiesList, 'topProgress', (property, value) => {
            //     if (!this.state.reveal && value > 0.5) {
            //         this.setState({
            //             reveal: 'activities__visible'
            //         });
            //         windowScrollimator.unwatch(_activitiesList);
            //     }
            //
            // });
            // windowScrollimator.update();
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
