import React from 'react';
import { Link } from 'react-router';

import { Main } from './react.Main.jsx';

export class Navigation extends React.Component {
    render() {
        return (
            <div>
                <header className='navigation'>
                    <nav className='navigation__nav'>
                        <Link to='/'>mxbry.com</Link>
                        <Link to='/work'>Portfolio</Link>
                        <Link to='/where-max-is-active'>Where I'm active</Link>
                        <Link to='/about'>Work with me</Link>
                    </nav>
                </header>
                <Main>
                    { this.props.children }
                </Main>
            </div>
        );
    }
}
