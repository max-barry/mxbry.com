import React from 'react';

export class SplashColumn extends React.Component {
    render() {

        let splash = this.props.data;

        let LineA = splash.lineA ? <span data-copy={ splash.lineA } /> : '';
        let LineB = splash.lineB ? <span data-copy={ splash.lineB } /> : '';

        return (
            <section className={`splash__third ${ this.props.solo ? 'splash--center' : '' }`} data-scroll={ splash.columnAction } data-extra={ splash.extraData } >
                <h2 data-after={ splash.after } className="splash__title">
                    { LineA }<br />
                    <span className="splash__letter">{ splash.letter }</span>
                    { LineB }
                </h2>
            </section>
        );
    }
}
