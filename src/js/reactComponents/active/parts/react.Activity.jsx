import React from 'react';

export class Activity extends React.Component {
    render () {
        let activity = this.props.data;

        return (
            <li className="activities__item media">
                <a target="_blank" href={ activity.url } className={`img icon i-${ activity.source } i-size--medium`}></a>
                <div className="bd">
                    <p>
                        <a target="_blank" href={ activity.url }>{ activity.title }</a>
                        { activity.deck }
                    </p>
                </div>
            </li>
        );
    }
}
