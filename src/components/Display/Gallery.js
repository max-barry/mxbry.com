import React from 'react';
import styled, { css } from 'react-emotion';
import PropTypes from 'prop-types';
import { values } from 'ramda';
import { bs, shevy, fontWeights, dimensions, styles } from '../../settings';
import { Img } from './Media';

export const galleryTypes = { deck: 'DECK', media: 'MEDIA' };

export const makeGalleryItems = items =>
    items.map(([src, x = 16, y = 9, extraProps]) => ({
        type: galleryTypes.media,
        component: Img,
        props: { src, x, y, ...extraProps }
    }));

const Container = styled('div')({
    maxWidth: 1440,
    marginTop: bs(3),
    marginBottom: bs(3),
    display: 'grid',
    gridTemplateColumns: 'repeat(6, 1fr)',
    gridGap: styles.fn.pad(2, 1),
    padding: bs(),
    '> *': { alignSelf: 'center', gridColumn: 'span 2' }
});

const Deck = styled('p')(shevy.h3, {
    margin: 0,
    padding: bs(3),
    fontWeight: fontWeights.light,
    lineHeight: shevy.baseLineHeight,
    gridColumn: 'span 3 !important'
});

const leadItem = css({
    gridColumn: 'span 3 !important'
});

const Gallery = ({ items, ...props }) => (
    <Container {...props}>
        {items.map((item, i) => {
            const isDeck = item.type === galleryTypes.deck;
            const key = `gallery_item_${i}`;
            const isLead = i < 2;
            const Comp = isDeck ? Deck : item.component;

            return isDeck ? (
                <Comp
                    key={key}
                    className={isLead ? leadItem : null}
                    {...item.props}
                >
                    {item.deckLede && <strong>{item.deckLede} </strong>}
                    {item.deck}
                </Comp>
            ) : (
                <Comp
                    className={isLead ? leadItem : null}
                    style={{ borderRadius: dimensions.bevel }}
                    key={key}
                    {...item.props}
                >
                    {item.props.caption}
                </Comp>
            );
        })}
    </Container>
);

Gallery.defaultProps = {};
Gallery.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            type: PropTypes.oneOf(values(galleryTypes)).isRequired,
            component: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
            deck: PropTypes.string,
            deckLede: PropTypes.string,
            props: PropTypes.object
        })
    ).isRequired
};

export default Gallery;
