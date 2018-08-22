import React, { Fragment } from 'react';
import { Hero, FocusText, Img, List } from '../../components/Display';
import { dimensions, bs } from '../../settings';
import { Section, FlexibleGrid, Center } from '../../components/Structures';
import withWrap from './Wrap';

import cover from '../../images/projects/route1/cover.jpg';
import appScreenshot from '../../images/projects/route1/app.png';
import appScreenshotTwo from '../../images/projects/route1/app2.png';

const projectName = 'Route1';
const projectDeck =
    'Chief of Technology and responsible for big-picture product direction of a London white-collar recruitment technology startup.';
export const projectColor = '#fe6224';
export const projectHeader = 'route1';
export const projectUrl = '/route-1';

const listItems = [
    {
        title: 'legaltechnology.com',
        deck: 'A good overview of the B2C project from industry press',
        link:
            'https://www.legaltechnology.com/latest-news/startup-corner-disruption-ahead-as-route1-aims-to-become-the-tinder-of-the-legal-recruitment-scene/'
    },
    {
        title: 'Audrey Magré',
        deck: 'The visual design for this project was done by Audrey Magré',
        link: 'http://audddrey.xyz/'
    }
];

const Route1 = props => (
    <Fragment>
        <Hero
            id={projectHeader}
            color={projectColor}
            title={projectName}
            img={cover}
            deck={projectDeck}
            year={2017}
        />
        <Section maxWidth="none">
            <FocusText color={projectColor}>
                Route1 is a mid-stage, white-collar recruitment technology
                startup, with a team of around 15. They supply B2B web based
                data products to law and accountancy firms, as well as a B2C
                native mobile app.
                <br />
                <br />
                They hired me as their Chief of Technology mid-2016 and was
                responsible for product development, and leading teams across
                design &amp; technology. I frequently pitched to decision makers
                at legal and accountancy firms for new clients, as well as to
                European venture capital groups for funding.
            </FocusText>
        </Section>
        <Center maxWidth={dimensions.narrowContainer}>
            <FlexibleGrid
                gap={bs(2)}
                column1={
                    <Img
                        x={503}
                        y={1023}
                        transparent
                        shadow={false}
                        src={appScreenshot}
                        style={{
                            maxWidth: 200,
                            marginLeft: 'auto',
                            marginRight: 'auto'
                        }}
                    />
                }
                column2={
                    <Img
                        x={503}
                        y={1023}
                        transparent
                        shadow={false}
                        src={appScreenshotTwo}
                        style={{
                            maxWidth: 200,
                            marginLeft: 'auto',
                            marginRight: 'auto'
                        }}
                    />
                }
            />
        </Center>
        <Section maxWidth={dimensions.narrowContainer}>
            <List color={projectColor} items={listItems} />
        </Section>
    </Fragment>
);

export default Route1;

export const WrappedRoute1 = withWrap({
    name: projectName,
    color: projectColor
})(Route1);
