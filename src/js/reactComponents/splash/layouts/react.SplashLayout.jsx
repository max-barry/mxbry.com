import React from 'react';

export class SplashLayout extends React.Component {
    render() {
        return (
            <div className={`splash clearfix ${this.props.wrapClass}`}>
                { this.props.children }
            </div>
        );
    }
}


// <article class="splash splash--hero clearfix">
// </article>
