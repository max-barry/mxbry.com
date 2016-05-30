import React from 'react';

export class Main extends React.Component {
    render() {
        return (
            <main>
                { this.props.children }
            </main>
        );
    }
}
