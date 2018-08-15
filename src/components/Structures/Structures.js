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
import { bs, dimensions } from '../../settings';

const filterWithKeys = curry((pred, obj) =>
    pipe(
        toPairs,
        filter(apply(pred)),
        fromPairs
    )(obj)
);

const fetchColumnProps = filterWithKeys(contains('column'));

const FlexibleGridContainer = styled('div')(({ count, gap }) => ({
    display: 'grid',
    gridTemplateColumns: '1fr '.repeat(count),
    gridGap: gap
}));

const FlexibleGrid = ({ gap, ...props }) => {
    const columnProps = fetchColumnProps(props);
    const elements = values(columnProps);
    const count = elements.length;
    const remainingProps = omit(keys(columnProps), props);
    return (
        <FlexibleGridContainer count={count} gap={gap} {...remainingProps}>
            {elements}
        </FlexibleGridContainer>
    );
};

FlexibleGrid.defaultProps = { gap: bs(0.5) };
FlexibleGrid.propTypes = {
    gap: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
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
