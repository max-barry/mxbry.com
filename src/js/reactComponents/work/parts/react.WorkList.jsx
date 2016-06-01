import React from 'react';
import ReactDOM from 'react-dom';

import _partition from 'lodash/partition';
import _chunk from 'lodash/chunk';
import _zip from 'lodash/zip';
import _flatten from 'lodash/flatten';
import _map from 'lodash/map';
import _compact from 'lodash/compact';

import { WorkProfile } from './react.Profile.jsx';
import { WorkBody } from './react.Body.jsx';
import { getWork } from '../_database.js';
import { Overlay } from '../../parts/react.Overlay.jsx';
import { ID } from '../../../parts/_utilities.js';


// const getWork = function(cb) {
//
//     firebase.database().ref('/projects/').once('value').then(function(snapshot) {
//         let source = snapshot.val();
//
//         // Split smalls from non-smalls
//         let partitions = _partition(source, { size: 'card' });
//
//         // Chunk the smalls in groups of 3, and then put them in an object identifying the chunk as small
//         let smallsChunk = _map(_chunk(partitions[0], 8), (arr) => {
//             return { type: 'card', contents: arr };
//         });
//
//         // As above with nonSmalls
//         let nonSmallsChunk = _map(_chunk(partitions[1], 3), (arr) => {
//             return { type: 'full', contents: arr };
//         });
//
//         // Recombine smalls and nonSmalls with a zip...
//         // Flatten the multidimensional array you  have...
//         // Remove all undefined objects (caused if there are more nonsmalls than smalls)
//         let combined = _compact(_flatten(_zip(nonSmallsChunk, smallsChunk)));
//
//         cb(combined);
//
//     });
// };


export class WorkList extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            works: []
        };
    }

    componentDidMount() {
        getWork((snapshot) => {

            let source = snapshot.val();

            // // Split smalls from non-smalls
            // let partitions = _partition(source, { size: 'card' });
            //
            // // Chunk the smalls in groups of 3, and then put them in an object identifying the chunk as small
            // let smallsChunk = _map(_chunk(partitions[0], 8), (arr) => {
            //     return { type: 'card', contents: arr };
            // });
            //
            // // As above with nonSmalls
            // let nonSmallsChunk = _map(_chunk(partitions[1], 3), (arr) => {
            //     return { type: 'full', contents: arr };
            // });
            //
            // // Recombine smalls and nonSmalls with a zip...
            // // Flatten the multidimensional array you  have...
            // // Remove all undefined objects (caused if there are more nonsmalls than smalls)
            // let combined = _compact(_flatten(_zip(nonSmallsChunk, smallsChunk)));

            this.setState({
                works: source
            });

        });
    }

    render() {
        return (
            <div>
                <div id='work'>
                    {this.state.works.map((profile) => {
                        return <WorkProfile key={ ID() } data={ profile } />;
                    })}
                </div>
                <Overlay ID='overlay-work'>
                    <WorkBody data={ {title: '', body: ''} } />
                </Overlay>
            </div>
        );
    }
}

// <div id='work'>
//     {this.state.works.map((workCollection) => {
//         return (
//             <div key={ ID() } className={ workCollection.type === 'card' ? 'work__card-profiles' : 'work__full-profiles' }>
//                 { workCollection.contents.map((profile, i) => {
//                     return <WorkProfile key={ ID() } data={ profile } />;
//                 }) }
//             </div>
//         );
//     })}
// </div>
