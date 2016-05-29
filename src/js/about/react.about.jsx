import React from 'react';
import ReactDOM from 'react-dom';
import { initForms } from '../_forms.js';

export class SignUpForm extends React.Component {

    componentDidMount() {
        initForms();
    }

    render() {
        return (
            <div id="mc_embed_signup">
                <form action="//mxbry.us6.list-manage.com/subscribe/post?u=1d2b23c8bb5f34f9fdc9b70f9&amp;id=7ac63c10c9" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" novalidate>
                    <div id="mc_embed_signup_scroll">

                        <div className="mc-field-group form__field">
                            <input required type="email" defaultValue="" name="EMAIL" className="required email" id="mce-EMAIL"/>
                            <label data-validation="Needs to be a valid email" for="mce-EMAIL">What's your email?</label>
                        </div>
                        <div id="mce-responses" className="clear">
                            <div className="response" id="mce-error-response" style={{ display: 'none'}}></div>
                            <div className="response" id="mce-success-response" style={{ display: 'none'}}></div>
                        </div>
                        <div style={{position: 'absolute', left: '-5000px'}} aria-hidden="true">
                            <input type="text" name="b_1d2b23c8bb5f34f9fdc9b70f9_7ac63c10c9" tabindex="-1" defaultValue=""/>
                            <input type="hidden" name="MERGE2" id="PROJECT" defaultValue="mxbry.com"/>
                            <input type="hidden" name="SUBTO" id="SUBTO" defaultValue="All projects from mxbry.com"/>
                            <input type="hidden" name="MERGE4" id="UTM_SOURCE" data-utm="utm_source" defaultValue=""/>
                            <input type="hidden" name="MERGE5" id="UTM_MEDIUM" data-utm="utm_medium" defaultValue=""/>
                            <input type="hidden" name="MERGE6" id="UTM_CAMP" data-utm="utm_campaign" defaultValue=""/>
                        </div>
                        <div className="clear form__field">
                            <input type="submit" defaultValue="That's my email" name="subscribe" id="mc-embedded-subscribe"/>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

class About extends React.Component {
    render() {
        // TODO: Make the CV year js enabled
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

export function initAbout(mountPoint) {
    // Mount about component
    ReactDOM.render(
        <About/>, mountPoint);
}
