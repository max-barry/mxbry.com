import React from 'react';
import ReactDOM from 'react-dom';

export function showOverlay(f) {
    mx._body.addClass('lock');
    $('.overlay').filter(f).addClass('active');
}

export class Overlay extends React.Component {

    _closeOverlay() {
        mx._body.removeClass('lock');
        $(ReactDOM.findDOMNode(this)).removeClass('active');
    }

    render() {
        return (
            <dialog open id={this.props.ID} className='overlay'>
                { this.props.children }
                <span onClick={ () => this._closeOverlay() } className='overlay__close'>Close</span>
            </dialog>
        );
    }
}
