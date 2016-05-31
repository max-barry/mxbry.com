import React from 'react';
import _filter from 'lodash/filter';

import { getWork } from './_database.js';
import { WorkBody } from './parts/react.Body.jsx';
import { NotFound } from '../parts/react.404.jsx';

export class WorkDetail extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            detail: <span></span>
        };
    }

    componentDidMount() {

        let slug = this.props.params.slug;

        getWork((snapshot) => {

            let results = snapshot.val();
            let detail = _filter(results, { slug: slug });

            if (!detail.length || detail.length > 1 || !('body' in detail[0])) {
                this.setState({
                    detail: <NotFound />
                });
            } else {
                this.setState({
                    detail: <article id='work-detail'> <WorkBody data={ detail[0] } /> </article>
                });
            }

        });

    }

    render () {
        return <div>{ this.state.detail }</div>;
    }

}
