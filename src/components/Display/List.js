import React, { Component, Fragment } from 'react';
import styled from 'react-emotion';
import PropTypes from 'prop-types';
import { tint, shade } from 'polished';
import { PoseGroup } from 'react-pose';
import {
    colors,
    bs,
    fontWeights,
    dimensions,
    styles,
    mq
} from '../../settings';
import linkSvg from '../../images/icons/link.svg';

const Ul = styled('ul')({});

const liColors = (color, darker, hasLink) => ({
    backgroundColor: color,
    '&:hover': hasLink && {
        backgroundColor: darker
    }
});

const Li = styled('li')(({ color, hasLink }) => {
    const colorOdd = color;
    const colorEven = tint(0.8, color);
    return mq({
        display: 'flex',
        flexDirection: ['row', 'column'],
        color: colors.white,
        fontWeight: fontWeights.light,
        cursor: hasLink ? 'pointer' : 'auto',
        position: 'relative',
        padding: hasLink ? 0 : bs(),
        a: {
            padding: styles.fn.pad(1, 3, 1, 1),
            color: colors.white,
            textDecoration: 'none',
            display: 'block',
            width: '100%'
        },
        em: {
            fontWeight: fontWeights.heavy,
            marginRight: [bs(0.5), 0],
            marginBottom: [0, bs(0.25)],
            display: ['inline-block', 'block']
        },
        'a em': {
            textDecoration: 'underline'
        },
        '&:first-child': {
            borderTopLeftRadius: dimensions.bevel,
            borderTopRightRadius: dimensions.bevel
        },
        '&:last-child': {
            borderBottomLeftRadius: dimensions.bevel,
            borderBottomRightRadius: dimensions.bevel
        },
        '&:nth-child(even)': liColors(colorOdd, shade(0.8, colorOdd), hasLink),
        '&:nth-child(odd)': liColors(colorEven, colorOdd, hasLink),
        '&::before': hasLink && {
            content: '""',
            width: dimensions.icon,
            height: dimensions.icon,
            position: 'absolute',
            right: bs(0.5),
            top: '50%',
            transform: 'translateY(-50%)',
            backgroundImage: `url(${linkSvg})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: '75%',
            backgroundPosition: 'center',
            filter: 'invert(100%)'
        }
    });
});

class List extends Component {
    render = () => {
        const { items, color, ...props } = this.props;

        return (
            <Ul {...props}>
                <PoseGroup>
                    {items.map(({ title, deck, link }, i) => {
                        const key = `List_item_${i}`;
                        const hasLink = !!link;
                        const Interior = (
                            <Fragment>
                                <em>{title}</em>
                                {deck}
                            </Fragment>
                        );
                        return (
                            <Li
                                color={color}
                                hasLink={hasLink}
                                key={key}
                                data-key={key}
                            >
                                {hasLink ? (
                                    <a target="_blank" href={link}>
                                        {Interior}
                                    </a>
                                ) : (
                                    Interior
                                )}
                            </Li>
                        );
                    })}
                </PoseGroup>
            </Ul>
        );
    };
}

List.defaultProps = {
    color: colors.black
};

List.propTypes = {
    color: PropTypes.string,
    items: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
                .isRequired,
            deck: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
            link: PropTypes.string
        })
    )
};

export default List;
