import React from 'react';
import ReactDom from 'react-dom';

import _partition from 'lodash/partition';
import _chunk from 'lodash/chunk';
import _zip from 'lodash/zip';
import _flatten from 'lodash/flatten';
import _map from 'lodash/map';
import _compact from 'lodash/compact';

import { testWorks } from './_testworks.js';
import { workParralax } from './work.parralax.js';
import { ID } from '../_utilities.js';


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

class WorkTechs extends React.Component {
    render() {
        return (
            <ul className="work__tech_list clearfix">
                { this.props.data.map((tech) => {
                    return ( <li key={ ID() } className={`work__tech icon --medium --i-${tech}`}></li> );
                })}
            </ul>
        );
    }
}

class WorkFeatures extends React.Component {
    render() {
        return (
            <ul className="work__feature_list">
                { this.props.data.map((feature) => {
                    return (
                        <li key={ ID() } className="media work__feature">
                            <div className="img"></div>
                            <div className="bd">{feature}</div>
                        </li>
                    );
                }) }
            </ul>
        );
    }
}

class WorkProfile extends React.Component {

    componentDidMount() {

        if (this.props.data.size === 'large') {
            let el = $(ReactDom.findDOMNode(this));
            workParralax(el);
        }
    }

    render() {

        let thisWork = this.props.data;


        let styles = {};
        if (thisWork.size === 'large') {
            styles.backgroundImage = `url('${thisWork.image}')`;
        }

        if (thisWork.bgColor) {
            styles.backgroundColor = thisWork.bgColor;
            styles.color = thisWork.color;
        }


        // TODO : User actual React Props to set the defaults
        // Setting defaults
        thisWork.size = thisWork.size || 'auto'; // Size of component, options: large, auto
        thisWork.direction = thisWork.direction || 'left';
        thisWork.invertClass = thisWork.invert ? 'invertText' : 'noInvertText';

        thisWork.featuresTemplate = thisWork.features ? <WorkFeatures data={thisWork.features} /> : null;
        thisWork.techTemplate = thisWork.tech ? <WorkTechs data={thisWork.tech} /> : null;

        return (
            <section className={`work__profile --${thisWork.size} --${thisWork.direction} --${thisWork.invertClass} clearfix`} style={styles} data-expand>
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

// TODO Simplify all of the below

class CardProfiles extends React.Component {
    render() {

        return (
            <div className='work__card-profiles'>
                { this.props.collection.map((profile) => {
                    return <WorkProfile key={ ID() } data={ profile } />;
                }) }
            </div>
        );
    }
}
class FullProfiles extends React.Component {
    render() {

        return (
            <div className='work__full-profiles'>
                { this.props.collection.map((profile) => {
                    return <WorkProfile key={ ID() } data={ profile } />;
                }) }
            </div>
        );
    }
}

export class Work extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            works: []
        };
    }

    componentDidMount() {
        getWork((results) => {
            this.setState({ works:results });
        });
    }

    render() {
        return (
            <div>
                {this.state.works.map((workCollection) => {
                    if (workCollection.type === 'card') {
                        return <CardProfiles key={ ID() } collection={ workCollection.contents } />;
                    } else {
                        return <FullProfiles key={ ID() } collection={ workCollection.contents } />;
                    }
                })}
            </div>
        );
    }

}
