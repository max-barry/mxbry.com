import React, { Fragment } from 'react';
import { Hero, FocusText, Img, List } from '../../components/Display';
import { dimensions, bs } from '../../settings';
import { Section, FlexibleGrid, Center } from '../../components/Structures';
import { route1 } from './constants';

import cover from '../../images/projects/route1/cover.jpg';
import appScreenshot from '../../images/projects/route1/app.png';
import appScreenshotTwo from '../../images/projects/route1/app2.png';

const { name, color, deck, url } = route1;

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
        <Hero color={color} title={name} img={cover} deck={deck} year={2017} />
        <Section maxWidth="none">
            <FocusText color={color}>
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
                        alt="Screenshot of the Route1 app I"
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
                        alt="Screenshot of the Route1 app II"
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
            <List color={color} items={listItems} />
        </Section>
    </Fragment>
);

Route1.details = {
    name,
    color,
    deck,
    url
};

export default Route1;
