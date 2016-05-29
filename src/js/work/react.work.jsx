import React from 'react';
import ReactDOM from 'react-dom';

import _partition from 'lodash/partition';
import _chunk from 'lodash/chunk';
import _zip from 'lodash/zip';
import _flatten from 'lodash/flatten';
import _map from 'lodash/map';
import _compact from 'lodash/compact';

import { workParralax } from './work.parralax.js';
import { WorkTechs, WorkFeatures } from './react.work.parts.jsx';
import { ID } from '../_utilities.js';
import { populateOverlayWork, toggleOverlay } from '../_overlay.js';


const buildCollection = function(arr, type) {
    return {
        type: type,
        contents: arr
    };
};


const getWork = function(cb) {

    firebase.database().ref('/projects/').once('value').then(function(snapshot) {
        let source = snapshot.val();

        // Split smalls from non-smalls
        let partitions = _partition(source, { size: 'card' });

        // Chunk the smalls in groups of 3, and then put them in an object identifying the chunk as small
        let smallsChunk = _map(_chunk(partitions[0], 8), (arr) => {
            return buildCollection(arr, 'card');
        });

        // As above with nonSmalls
        let nonSmallsChunk = _map(_chunk(partitions[1], 3), (arr) => {
            return buildCollection(arr, 'full');
        });

        // Recombine smalls and nonSmalls with a zip...
        // Flatten the multidimensional array you  have...
        // Remove all undefined objects (caused if there are more nonsmalls than smalls)
        let combined = _compact(_flatten(_zip(nonSmallsChunk, smallsChunk)));

        cb(combined);

    });
};



class WorkProfile extends React.Component {

    constructor(props) {
        super(props);

        // Bind the overlay reveal
        this.revealOverlay = () => this._revealOverlay();
    }

    componentDidMount() {
        if (this.props.data.size === 'large') {
            let el = $(ReactDOM.findDOMNode(this));
            workParralax(el);
        }
    }

    _isExternal() {
        // TODO : Handle external links
        return false;
    }

    _revealOverlay() {
        if ( this._isExternal(this.props.data.slug) ) {
            window.location = this.props.data.slug;
        } else {
            populateOverlayWork(this.props.data);
            toggleOverlay();
        }
    }

    render() {

        let thisWork = this.props.data;

        let styles = {};
        if (thisWork.image) {
            styles.backgroundImage = `url('${thisWork.image}')`;
        }

        if (thisWork.bgColor) {
            styles.backgroundColor = thisWork.bgColor;
        }
        if (thisWork.size) {
            styles.backgroundSize = thisWork.backgroundSize;
        }


        // TODO : User actual React Props to set the defaults
        // Setting defaults
        thisWork.size = thisWork.size || 'auto'; // Size of component, options: large, auto
        thisWork.direction = thisWork.direction || 'left';
        thisWork.invertClass = thisWork.invert || thisWork.size === 'card' ? 'invertText' : 'noInvertText';

        thisWork.featuresTemplate = thisWork.features ? <WorkFeatures data={thisWork.features} /> : null;
        thisWork.techTemplate = thisWork.tech ? <WorkTechs data={thisWork.tech} /> : null;

        return (
            <section onClick={this.revealOverlay} data-hide-bg-mobile={!!thisWork.hideBgMobile} className={`work__profile work__profile--${thisWork.size} ${thisWork.direction} ${thisWork.invertClass} clearfix`} style={styles}>
                <div className="work__title">
                    <h2 className="work__headline">{thisWork.title}&nbsp;<i></i></h2>
                    <h3 className="work__subline">{thisWork.deck}</h3>
                    { thisWork.featuresTemplate }
                    { thisWork.techTemplate }
                </div>
            </section>
        );
    }
}

class Work extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            works: []
        };
    }

    componentDidMount() {
        getWork((results) => {
            this.setState({
                works:results
            });
        });
    }

    render() {
        return (
            <div>
                {this.state.works.map((workCollection) => {
                    return (
                        <div key={ ID() } className={ workCollection.type === 'card' ? 'work__card-profiles' : 'work__full-profiles' }>
                            { workCollection.contents.map((profile) => {
                                return <WorkProfile key={ ID() } data={ profile } />;
                            }) }
                        </div>
                    );
                })}
            </div>
        );
    }
}

export function initWork() {
    // Mount work component
    ReactDOM.render(<Work />, mx._work[0]);
}
