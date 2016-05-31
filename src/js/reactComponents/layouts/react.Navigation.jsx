import React from 'react';
import { Link } from 'react-router';

import { Main } from './react.Main.jsx';

export class Navigation extends React.Component {

    render() {
        return (
            <div>
                <header className='navigation'>
                    <nav className='navigation__nav'>
                        <Link activeClassName='active' to='/'>mxbry.com</Link>
                        <Link activeClassName='active' to='/work'>Portfolio</Link>
                        <Link activeClassName='active' to='/where-max-is-active'>Where I'm active</Link>
                        <Link activeClassName='active' to='/about'>Work with me</Link>
                    </nav>
                </header>
                <Main>
                    { this.props.children }
                </Main>
            </div>
        );
    }
}


// <footer className='footer'>
//     <div className='footer__main'>
//         <p>Discover <Link activeClassName='active' to='/work'>work I've done</Link> for clients and open source projects, as well as some of the <Link activeClassName='active' to='/where-max-is-active'>places around the internet</Link> that I am active.</p>
//         <p>Contact me on <a target='blank' href='https://twitter.com/mxbrry'>Twitter</a>, <a target='blank' href='https://github.com/max-barry'>Github</a>, <a target='blank' href='mailto:max@mxbry.com'>Email</a>, <a target='blank' href='https://words.mxbry.com/'>Medium</a> or <a target='blank' href='https://uk.linkedin.com/in/maxbarry'>LinkedIn</a></p>
//     </div>
//     <div className='footer__foot'>
//         <h5>mxbry.com</h5>
//     </div>
// </footer>
