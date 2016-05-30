import React from 'react';

export class Overlay extends React.Component {
    render() {
        return (
            <dialog id={this.props.ID} className="overlay">
                { this.props.children }
                <span className="overlay__close">Close</span>
            </dialog>
        );
    }
}
