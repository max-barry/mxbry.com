import React from 'react';

export class WorkBody extends React.Component {
    render() {
        return (
            <div>
                <h2 ref='overlayTitle' className='work-overlay__title'>{ this.props.data.title }</h2>
                <section ref='overlayBody' className='work-overlay__body'>{ this.props.data.body }</section>
            </div>
        );
    }
}
