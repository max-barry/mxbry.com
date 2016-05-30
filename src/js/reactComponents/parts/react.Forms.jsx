import React from 'react';
import  { getQueryStringValue } from '../../parts/_utilities.js';


export class SignUpForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            hasValue: false
        };
    }

    componentDidMount() {
        // Populate UTM values in form
        ['utm_source', 'utm_medium', 'utm_campaign'].map((utm) => {
            $(`form input[data-utm="${utm}"]`).val(getQueryStringValue(utm));
        });
    }

    validateEmail() {
        if (this.state.hasValue != !!this.refs.emailInput.value) {
            this.setState({
                hasValue: !!this.refs.emailInput.value
            });
        }
    }

    render() {
        // TODO Convert a lot of this to a loop or sub components
        return (
            <div id="mc_embed_signup">
                <form action="//mxbry.us6.list-manage.com/subscribe/post?u=1d2b23c8bb5f34f9fdc9b70f9&amp;id=7ac63c10c9" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" novalidate>
                    <div id="mc_embed_signup_scroll">

                        <div className="mc-field-group form__field">
                            <input required type="email" defaultValue="" name="EMAIL" ref="emailInput" className={`required email ${this.state.hasValue ? 'hasValue' : ''}`} id="mce-EMAIL" onChange={() => this.validateEmail()} />
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
