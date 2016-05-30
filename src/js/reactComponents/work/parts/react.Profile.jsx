import React from 'react';
import ReactDOM from 'react-dom';

import { WorkTechs, WorkFeatures } from './react.SubLists.jsx';


export class WorkProfile extends React.Component {

    componentDidMount() {
        if (this.props.data.size === 'large') {
            let el = $(ReactDOM.findDOMNode(this));
            // TODO Add parralax
            // workParralax(el);
        }
    }

    _isExternal(profile) {
        // return domain(location.href) !== domain(profile.slug);
        return false;
    }

    _revealOverlay() {
        if ( this._isExternal(this.props.data) ) {
            window.location = this.props.data.slug;
        } else if ( this.props.data.body ) {
            populateOverlayWork(this.props.data);
            toggleOverlay(this, '#work-overlay');
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
        if (thisWork.backgroundSize) {
            styles.backgroundSize = thisWork.backgroundSize;
        }


        // TODO : User actual React Props to set the defaults
        // Setting defaults
        thisWork.size = thisWork.size || 'auto'; // Size of component, options: large, auto, card
        thisWork.direction = thisWork.direction || 'left'; // Location of title within the profile
        thisWork.invertClass = thisWork.invert || thisWork.size === 'card' ? 'invertText' : 'noInvertText';

        thisWork.featuresTemplate = thisWork.features ? <WorkFeatures data={thisWork.features} /> : null;
        thisWork.techTemplate = thisWork.tech ? <WorkTechs data={thisWork.tech} /> : null;

        return (
            <section onClick={ () => this._revealOverlay() } data-hide-bg-mobile={!!thisWork.hideBgMobile} className={`work__profile work__profile--${thisWork.size} ${thisWork.direction} ${thisWork.invertClass} clearfix`} style={styles}>
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
