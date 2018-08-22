import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import gtmParts from 'react-google-tag-manager';

// @link https://www.npmjs.com/package/react-google-tag-manager

class GoogleTagManager extends React.Component {
    get scriptId() {
        return this.props.scriptId || 'react-google-tag-manager-gtm';
    }

    componentDidMount() {
        const dataLayerName = this.props.dataLayerName || 'dataLayer';

        if (!window[dataLayerName]) {
            const gtmScriptNode = document.getElementById(this.scriptId);
            eval(gtmScriptNode.textContent);
        }
    }

    render() {
        const gtm = gtmParts({
            id: this.props.gtmId,
            dataLayerName: this.props.dataLayerName || 'dataLayer',
            additionalEvents: this.props.additionalEvents || {},
            previewVariables: this.props.previewVariables || false
        });

        return (
            <Fragment>
                {gtm.noScriptAsReact()}
                <span id={this.scriptId}>{gtm.scriptAsReact()}</span>
            </Fragment>
        );
    }
}

GoogleTagManager.propTypes = {
    gtmId: PropTypes.string.isRequired,
    dataLayerName: PropTypes.string,
    additionalEvents: PropTypes.object,
    previewVariables: PropTypes.string,
    scriptId: PropTypes.string
};

export default GoogleTagManager;
