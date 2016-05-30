import React from 'react';

import { Main } from './react.Main.jsx';

export class Navigation extends React.Component {
    render() {
        return (
            <div>
                <header>HEADER</header>
                <Main>
                    { this.props.children }
                </Main>
            </div>
        );
    }
}
