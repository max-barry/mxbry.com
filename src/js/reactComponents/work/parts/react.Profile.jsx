import React from 'react';
import ReactDOM from 'react-dom';

import { WorkTechs, WorkFeatures } from './react.SubLists.jsx';
import { showOverlay } from '../../parts/react.Overlay.jsx';


export class WorkProfile extends React.Component {

    _isExternal(profile) {
        return !!profile.slug && /^https?:\/\//.test(profile.slug);
    }

    _shouldShowOverlay(profile) {
        return !!profile.body;
    }

    _revealOverlay() {
        if ( this._shouldShowOverlay(this.props.data) ) {

            $('.overlay .work-overlay__title').text(this.props.data.title);
            $('.overlay .work-overlay__body').html(this.props.data.body);

            showOverlay('#overlay-work');

            // TODO : URL push then on close if current path != router.context.path then reset to router.context.path

        } else if ( this._isExternal(this.props.data) ) {

            window.open(this.props.data.slug, '_blank');

        }
    }

    render() {

        let thisWork = this.props.data;

        // let styles = {};
        // if (thisWork.image) {
        //     styles.backgroundImage = `url('${thisWork.image}')`;
        // }
        //
        // if (thisWork.bgColor) {
        //     styles.backgroundColor = thisWork.bgColor;
        // }
        // if (thisWork.backgroundSize) {
        //     styles.backgroundSize = thisWork.backgroundSize;
        // }


        // TODO : User actual React Props to set the defaults
        // Setting defaults
        // thisWork.size = thisWork.size || 'auto'; // Size of component, options: large, auto, card
        // thisWork.direction = thisWork.direction || 'left'; // Location of title within the profile
        // thisWork.invertClass = thisWork.invert || thisWork.size === 'card' ? 'invertText' : 'noInvertText';

        thisWork.featuresTemplate = thisWork.features ? <WorkFeatures data={thisWork.features} /> : null;
        thisWork.techTemplate = thisWork.tech ? <WorkTechs data={thisWork.tech} /> : null;

        return (
            <section onClick={ () => this._revealOverlay() } data-hide-bg-mobile={!!thisWork.hideBgMobile} className={`work__profile clearfix`}>
                <div className="work__inner">
                    <h3 className="work__headline">{thisWork.title}</h3>
                    <h4 className="work__subline">{thisWork.deck}</h4>
                    { thisWork.featuresTemplate }
                    { thisWork.techTemplate }
                </div>
            </section>
        );
    }
}

// <section onClick={ () => this._revealOverlay() } data-hide-bg-mobile={!!thisWork.hideBgMobile} className={`work__profile work__profile--${thisWork.size} ${thisWork.direction} ${thisWork.invertClass} clearfix`} style={styles}>
//     <div className="work__title">
//         <h2 className="work__headline">{thisWork.title}&nbsp;<i></i></h2>
//         <h3 className="work__subline">{thisWork.deck}</h3>
//         { thisWork.featuresTemplate }
//         { thisWork.techTemplate }
//     </div>
// </section>
