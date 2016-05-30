import React from 'react';
import { AboutMe } from './parts/react.AboutMe.jsx';

export class About extends React.Component {
    render() {
        return (
            <div id='about-page'>
                <AboutMe />
            </div>
        );
    }
}
