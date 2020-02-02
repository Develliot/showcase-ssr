import React from 'react';

import { H1, H2, Paragraph } from 'src/components/Typography';
import { PageWrapper, PageContent } from 'src/components/Layout';
import AnimatedContentWrapper from 'src/components/AnimatedContentWrapper';
import {
    ContentWrapper,
    VerticalSpacer,
    ColorBlock,
} from 'src/components/Layout';
import { RobotAnimation } from 'src/components/RobotAnimation';
import Head from 'src/components/Head';

export const Home = () => {
    return (
        <PageWrapper>
            <Head
                title='SSR Showcase'
                description='Home page for my SSR showcase'
            />
            <PageContent>
                <ColorBlock>
                    <ContentWrapper>
                        <VerticalSpacer size='extraExtraLarge' />
                        <H1> welcome</H1>
                        <VerticalSpacer size='large' />
                        <Paragraph>
                            Welcome to my front-end showcase. I originally
                            created this site to try out TypeScript as an
                            alternative to JS + Flow. This was also an exercise
                            to see if I could make a website using pure
                            functional components and hooks without touching
                            classes and their life cycle functions.{' '}
                            <a
                                target='_blank'
                                rel='noopener noreferrer'
                                href='https://github.com/Develliot/showcase'
                            >
                                Source code
                            </a>
                            .
                        </Paragraph>
                    </ContentWrapper>
                </ColorBlock>

                <ColorBlock color='blue' padding={false}>
                    <RobotAnimation />
                </ColorBlock>

                <ColorBlock color='darkGrey'>
                    <AnimatedContentWrapper>
                        <H2 color='white'> under the hood</H2>

                        <VerticalSpacer size='medium' />
                        <Paragraph color='white'>
                            React
                            <br />
                            React Router
                            <br />
                            Typescript
                            <br />
                            Styled components
                            <br />
                            Prettier
                            <br />
                            Jest + Enzyme snapshot regression testing
                        </Paragraph>
                    </AnimatedContentWrapper>
                </ColorBlock>
            </PageContent>
        </PageWrapper>
    );
};

export default Home;
