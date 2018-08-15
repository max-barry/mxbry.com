import React, { Component } from 'react';
import ScrollPercentage from 'react-scroll-percentage';
import PropTypes from 'prop-types';
import styled from 'react-emotion';

const ScrollWindowContainer = styled('div')(({ maxHeight }) => ({
    maxHeight,
    maxWidth: 300,
    overflow: 'hidden'
}));

const ScrollWindowInterior = styled('div')(({ y }) => ({}));

class ScrollWindow extends Component {
    onScroll = () => {};

    render = () => {
        const { maxHeight, children, ...props } = this.props;
        return (
            <ScrollPercentage>
                {({ percentage }) => {
                    console.log(percentage);
                    // console.log(percentage * 100);
                    return (
                        <ScrollWindowContainer maxHeight={maxHeight} {...props}>
                            <ScrollWindowInterior
                                style={{
                                    transform: `translateY(${percentage *
                                        -100}%)`
                                }}
                            >
                                {children}
                            </ScrollWindowInterior>
                        </ScrollWindowContainer>
                    );
                }}
            </ScrollPercentage>
        );
    };
}

ScrollWindow.defaultProps = {
    maxHeight: 300
};
ScrollWindow.propTypes = {
    maxHeight: PropTypes.number
};

export { ScrollWindow };
