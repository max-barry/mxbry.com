import React, { Fragment } from 'react';
import styled from 'react-emotion';
import ContactLinks from '../Home/ContactLinks';
import { colors, fontWeights, mq, bs, dimensions } from '../../settings';
import { Center } from '../../components/Structures';

const Lede = styled('div')(({ color }) =>
    mq({
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        paddingLeft: [0, dimensions.mobilePadding],
        paddingRight: [0, dimensions.mobilePadding],
        em: {
            borderBottom: [`5px solid ${color}`, 0],
            color: ['currentColor', color]
        }
    })
);

const Tag = styled('h3')({
    fontWeight: fontWeights.regular,
    marginBottom: 0,
    a: {
        borderBottom: `3px solid ${colors.greyDark}`,
        textDecoration: 'none',
        color: colors.greyDark,
        '&:visted': {
            borderColor: colors.grey2,
            color: colors.grey2
        }
    }
});

const withWrap = ({ name, color }) => WrappedComponent => {
    class HOC extends React.Component {
        render = () => (
            <Fragment>
                <Lede color={color}>
                    <h1>
                        <em>{name}</em> is a project by Max Barry
                    </h1>
                    <Tag>
                        I work on this and <a href="/">other projects</a> in
                        London and remote
                    </Tag>
                </Lede>
                <WrappedComponent />
                <ContactLinks style={{ marginTop: 0, marginBottom: 0 }} />
                <Center
                    style={{
                        textAlign: 'center',
                        padding: `${bs()} ${dimensions.mobilePadding}px`
                    }}
                >
                    <Tag>
                        I work on this and <a href="/">other projects</a> in
                        London and remote
                    </Tag>
                </Center>
            </Fragment>
        );
    }

    return HOC;
};

export default withWrap;
