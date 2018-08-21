import React from 'react';
import styled from 'react-emotion';
import PropTypes from 'prop-types';
import {
    filter,
    pipe,
    toPairs,
    apply,
    fromPairs,
    contains,
    keys,
    values,
    omit,
    curry
} from 'ramda';
import { uniqueId } from 'lodash';
import { bs, dimensions } from '../../settings';

const filterWithKeys = curry((pred, obj) =>
    pipe(
        toPairs,
        filter(apply(pred)),
        fromPairs
    )(obj)
);

const fetchColumnProps = filterWithKeys(contains('column'));

const FlexibleGridContainer = styled('div')(
    ({ count, gap, alignItems, justifyContent }) => ({
        alignItems,
        justifyContent,
        display: 'grid',
        gridTemplateColumns: '1fr '.repeat(count),
        gridGap: gap
    })
);

const FlexibleGrid = ({
    gap,
    columnStyles,
    alignItems,
    // justifyContent,
    ...props
}) => {
    const columnProps = fetchColumnProps(props);
    const elements = values(columnProps);
    const count = elements.length;
    const remainingProps = omit(keys(columnProps), props);
    const flexGridId = uniqueId('flexible_grid_');
    return (
        <FlexibleGridContainer
            count={count}
            gap={gap}
            alignItems={alignItems}
            // justifyContent={justifyContent}
            {...remainingProps}
        >
            {elements.map((element, key) => (
                <div key={`${flexGridId}_${key}`} style={columnStyles}>
                    {element}
                </div>
            ))}
        </FlexibleGridContainer>
    );
};

FlexibleGrid.defaultProps = {
    alignItems: 'center',
    // justifyContent: 'center',
    gap: bs(0.5),
    columnStyles: {}
};
FlexibleGrid.propTypes = {
    gap: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    columnStyles: PropTypes.object,
    alignItems: PropTypes.string
    // justifyContent: PropTypes.string
};

export { FlexibleGrid };

const Center = styled('div')(({ maxWidth }) => ({
    maxWidth,
    marginLeft: 'auto',
    marginRight: 'auto',
    display: 'block'
}));

Center.defaultProps = { maxWidth: dimensions.container };
Center.propTypes = {
    maxWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export { Center };

const Section = styled(Center)({
    marginTop: dimensions.sectionSpaceDesktop,
    marginBottom: dimensions.sectionSpaceDesktop
});

export { Section };
