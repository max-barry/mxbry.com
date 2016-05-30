import React from 'react';
import { SignUpForm } from '../parts/react.Forms.jsx';

export class About extends React.Component {
    render() {
        // Make CV year dynamic
        return (
            <div>
                <div className="about__content">
                    <p>
                        <strong>I'm Max.</strong> I'm a content marketer, web developer and thinker about things on the internet from London.
                        <br />My interests include statistics that help us understand the web, using motion in my UI design, and implementing search and SEO best practices.
                    </p>
                    <br />
                    <ul>
                        <li>
                            <p>Connect with me on <a target="_blank" href="https://twitter.com/mxbrry">Twitter</a>, <a target="_blank" href="https://uk.linkedin.com/in/maxbarry">LinkedIn</a> or <a href="mailto:max@mxbry.com">email me</a> directly, because <strong>I'd really like to talk</strong></p>
                        </li>
                        <li>
                            <p>This is my <strong>2016 CV</strong>, which I'm happy to <a href="mailto:max@mxbry.com">talk you through!</a> </p>
                        </li>
                        <li>
                            <p>I've been <strong>writing</strong> about the web quasi-regularly for 2 years now at <a href="http://words.mxbry.com">words.mxbry.com</a></p>
                            <br/>
                        </li>
                        <li>
                            <p>I'm always looking for contract work, remote or otherwise. What's a problem you've been struggling with recently?</p>
                            <SignUpForm/>
                        </li>
                    </ul>
                </div>
                <img src="/img/me.jpeg" alt="" className="about__content"/>
            </div>
        );
    }
}
