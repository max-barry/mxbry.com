import React from 'react';
import { ID } from '../../../parts/_utilities.js';

export class WorkTechs extends React.Component {
    render() {
        return (
            <ul className="work__tech_list clearfix">
                { this.props.data.map((tech) => {
                    return ( <li key={ ID() } className={`work__tech icon i-size--medium i-${tech}`}></li> );
                })}
            </ul>
        );
    }
}

export class WorkFeatures extends React.Component {
    render() {
        return (
            <ul className="work__feature_list">
                { this.props.data.map((feature) => {
                    return (
                        <li key={ ID() } className="media work__feature">
                            <div className="img"></div>
                            <div className="bd">{feature}</div>
                        </li>
                    );
                }) }
            </ul>
        );
    }
}
