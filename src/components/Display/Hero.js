import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'react-emotion';
import { readableColor } from 'polished';
import {
    dimensions,
    bs,
    shevy,
    colors,
    fontWeights,
    bsint,
    styles
} from '../../settings';
import { Img } from './Media';

const topSpacing = bsint(4);

const Container = styled('div')({
    maxWidth: 680,
    marginTop: topSpacing * 2,
    marginBottom: topSpacing * 2,
    marginLeft: 'auto',
    marginRight: 'auto'
});

const Headline = styled('div')({
    display: 'flex',
    justifyContent: 'space-between',
    paddingBottom: topSpacing
});

const headlineTitle = color =>
    css(shevy.h1, {
        color,
        maxWidth: '50%'
    });

const Lede = styled('div')(styles.fn.dotMatrix(), ({ color }) => ({
    color: colors.white,
    backgroundColor: color,
    padding: bs(),
    paddingTop: topSpacing,
    borderTop: `7px solid ${colors.black}`
}));

const LedeContent = styled('div')(shevy.h4, {
    maxWidth: '70%',
    marginBottom: 0,
    fontWeight: fontWeights.regular,
    lineHeight: shevy.baseLineHeight
});

const Main = styled('div')({
    position: 'relative',
    minHeight: topSpacing * 8,
    zIndex: 0,
    width: '100%',
    display: 'flex',
    alignItems: 'flex-end',
    padding: bs()
});

const BgImage = styled('span')(({ img, color }) => ({
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    zIndex: -1,
    '&::after, &::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
    },
    '&::after': {
        backgroundImage: `url(${img})`,
        backgroundSize: 'cover',
        filter: 'grayscale(100%) contrast(1.2)',
        zIndex: -2
    },
    '&::before': {
        backgroundColor: color,
        mixBlendMode: 'hard-light',
        zIndex: -1
    }
}));

const FootNumber = styled('h6')({
    fontSize: 124,
    fontWeight: fontWeights.heavy,
    marginBottom: 0,
    color: colors.white,
    lineHeight: 1
});

const RepeatHeadline = styled('h5')(shevy.h1, {
    color: colors.white,
    position: 'absolute',
    top: bs(),
    right: bs(),
    writingMode: 'vertical-rl',
    lineHeight: 1
});

const Hero = ({ color, img, title, deck, year, ...props }) => (
    <Container {...props}>
        <Headline>
            <h2 className={headlineTitle(color)}>{title}</h2>
            <h5 className={headlineTitle(color)}>{year}</h5>
        </Headline>
        <Lede color={color}>
            <LedeContent>{deck}</LedeContent>
        </Lede>
        <Main>
            <BgImage color={color} img={img} />
            <RepeatHeadline>{title}</RepeatHeadline>
            <FootNumber>{year}</FootNumber>
        </Main>
    </Container>
);

Hero.defaultProps = {};
Hero.propTypes = {};

export default Hero;

// const gridGap = '30px';

// const Container = styled('div')`
//     width: 100%;
//     display: grid;
//     grid-template-columns: repeat(12, 1fr);
//     grid-template-rows: repeat(5, auto);
//     grid-gap: ${gridGap};
// `;
// grid-gap: 40px;
// grid-template-areas:
//     '. . . lede lede lede lede . . . . .'
//     '. . . headline headline headline headline headline headline . . .'
//     '. . . headline headline headline headline headline headline . . .'
//     '. . im2 im2 im2 im2 im2 . . . . .'
//     'foot foot foot foot foot foot foot foot foot . . .';

// const Lede = styled('h3')(shevy.h4, {
//     margin: 0,
//     color: colors.greyDark,
//     lineHeight: 1.4,
//     gridColumn: '4 / span 5',
//     gridRow: '1 / span 1',
//     position: 'relative',
//     zIndex: 0,
//     fontWeight: fontWeights.light
// });

// const Headline = styled('h1')(shevy.h1, {
//     margin: 0,
//     gridColumn: '4 / span 6',
//     gridRow: '2 / span 1',
//     lineHeight: 1.4
// });

// const ImPrimary = styled('div')({
//     gridRow: '2 / span 2',
//     gridColumn: '8 / span 4',
//     zIndex: -1
// });

// const ImSecondary = styled('div')({
//     gridColumn: '2 / span 5',
//     gridRow: '3 / span 1'
// });

// const Footer = styled('div')({
//     gridColumn: '1 / span 9',
//     gridRow: '3 / span 3',
//     alignSelf: 'end',
//     zIndex: -1,
//     height: 110,
//     width: '100%',
//     backgroundColor: '#B8E986'
// });

// const Hero = props => (
//     <Container>
//         <Lede>
//             This is the lede to the section that explains in brief what is going
//             on in this world
//         </Lede>
//         <Headline>The big title of this thing</Headline>
//         <ImPrimary>
//             <Img
//                 alt="Example image"
//                 src="https://source.unsplash.com/random/620x530"
//                 x={620}
//                 y={530}
//             />
//         </ImPrimary>
//         <ImSecondary>
//             <Img
//                 alt="Example image"
//                 src="https://source.unsplash.com/random/620x530"
//                 x={620}
//                 y={530}
//             />
//         </ImSecondary>
//         <Footer />
//     </Container>
// );

// Hero.defaultProps = {};
// Hero.propTypes = {};

// export default Hero;

// ({
//     width: '100%',
//     gridTemplateAreas:
//     "fig-1  aside  aside  aside  aside"
//     "fig-1  title  title  title  title"
//     "banner  banner  banner  banner  banner"
//     "....  main  main  main  main"

//     // display: 'grid',
//     // gridTemplateColumns: 'repeat(3, 1fr)',
//     // gridTemplateRows: 'repeat(9, 1fr)',
//     // gridTemplateRows: '1fr 1fr',
//     // display: 'grid',
//     // gridAutoRows: 'minmax(1fr, auto)',
//     // gridAutoColumns: 'minmax(9fr, auto)',
//     // gridTemplateColumns: 'repeat(9, 1fr)',
//     // gridTemplateAreas: '"hd" "main" "sd" "ft"',
//     // justifyItems: 'center',
//     // alignItems: 'start',
//     // gridGap: bs(),
//     // padding: bs()
// })

{
    /* <Container>
        <Main>
            <h1>This is my title</h1>
            <h4>
                This is some text that I can put here and also I could write if
                it needs to be the long list of text possible
            </h4>
        </Main>
        <Item>
            <Img
                alt="Example image"
                src="https://source.unsplash.com/random/640x360"
            />
        </Item>
        <Item>
            <Img
                alt="Example image"
                src="https://source.unsplash.com/random/640x360"
            />
        </Item>
        <LandscapeItem>
            <Img
                alt="Example image"
                src="https://source.unsplash.com/random/1280x360"
                x={1280}
                y={360}
            />
        </LandscapeItem>
        <PortraitItem>
            <Img
                alt="Example image"
                src="https://source.unsplash.com/random/640x720"
                x={640}
                y={720}
            />
        </PortraitItem>
        <Item>
            <Img
                alt="Example image"
                src="https://source.unsplash.com/random/640x360"
            />
        </Item>
    </Container> */
}
