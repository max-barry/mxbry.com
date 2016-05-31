import React from 'react';
import _filter from 'lodash/filter';

import { getWork } from './_database.js';
import { WorkBody } from './parts/react.Body.jsx';

export class WorkDetail extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            detail: {}
        };
    }

    componentDidMount() {

        let slug = this.props.params.slug;
        // TODO : Redirect to 404

        getWork((snapshot) => {

            let results = snapshot.val();

            console.log(results);
            console.log(_filter(results, { slug: slug }));

            // TODO : Handle multiple results for same slug
            this.setState({
                detail: _filter(results, { slug: slug })[0]
            });

        });

    }

    render () {
        return (
            <article id='work-detail'>
                <WorkBody data={ this.state.detail } />
            </article>
        );
    }

}
