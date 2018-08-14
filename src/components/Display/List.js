import React, { Component } from 'react';
import styled from 'react-emotion';
import { readableColor, tint, shade } from 'polished';
import posed, { PoseGroup } from 'react-pose';
import { tween } from 'popmotion';
import { colors, bs, fontWeights, dimensions } from '../../settings';

const Ul = styled('ul')({});

const Li = styled('li')(({ color }) => {
    const colorEven = tint(0.8, color);
    const colorOdd = color;
    return {
        display: 'flex',
        color: colors.white,
        padding: bs(),
        fontWeight: fontWeights.light,
        // cursor: 'pointer',
        em: {
            fontWeight: fontWeights.heavy,
            marginRight: bs(0.5)
        },
        '&:first-child': {
            borderTopLeftRadius: dimensions.bevel,
            borderTopRightRadius: dimensions.bevel
        },
        '&:last-child': {
            borderBottomLeftRadius: dimensions.bevel,
            borderBottomRightRadius: dimensions.bevel
        },
        '&:nth-child(even)': {
            backgroundColor: colorOdd
            // '&:hover': {
            //     backgroundColor: shade(0.8, colorOdd)
            // }
        },
        '&:nth-child(odd)': {
            backgroundColor: colorEven
            // '&:hover': {
            //     backgroundColor: shade(0.8, colorEven)
            // }
        }
    };
});

class List extends Component {
    render = () => {
        const { items, color } = this.props;

        return (
            <Ul>
                <PoseGroup>
                    {items.map(({ title, deck }, i) => {
                        const key = `List_item_${i}`;
                        return (
                            <Li color={color} key={key} data-key={key}>
                                <em>{title}</em>
                                {deck}
                            </Li>
                        );
                    })}
                </PoseGroup>
            </Ul>
        );
    };
}

export default List;
