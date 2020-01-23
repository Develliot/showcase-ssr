import React from 'react';

import { colors } from 'src/theme';
import { camelCaseToCaptilalisedCase } from 'src/utils/StringUtils';
import {
    PageWrapper,
    PageContent,
    ContentWrapper,
    VerticalSpacer,
    ColorBlock,
} from 'src/components/Layout';
import { H1, H2, H3, Span, Paragraph } from 'src/components/Typography';
import { Button } from 'src/components/Button';
import { TextInput } from 'src/components/TextInput';
import { UserCard } from 'src/components/UserCard';
import { UserCardLoading } from 'src/components/UserCard/UserCardLoading';
import { Carousel } from 'src/components/Carousel';
import { ErrorMessage } from 'src/components/ErrorMessage';

import {
    TilesWrapper,
    ColorTile,
    ColorLabelWrapper,
    ColorTileWrapper,
    FlexWrapRow,
} from '../pageStyles/styles';

const colorLabelList = Object.keys(colors);

const mockUser = {
    email: 'angela.castro@example.com',
    location: {
        street: {
            number: '8267',
            name: 'Grove Road',
        },
        city: 'Stevenage',
        state: 'Durham',
        postcode: 'BD18 8JD',
        coordinates: {
            latitude: 61.2773,
            longitude: 45.9598,
        },
    },
    login: {
        uuid: '1255d3c5-a9c8-414e-8eb5-127478a19f62',
    },
    name: { first: 'Angela', last: 'Castro' },
    picture: {
        large: 'https://randomuser.me/api/portraits/women/45.jpg',
    },
};

export const DesignSystem = () => {
    return (
        <PageWrapper>
            <PageContent>
                <ColorBlock>
                    <VerticalSpacer size='extraExtraLarge' />
                    <ContentWrapper>
                        <H1>Design System</H1>
                        <VerticalSpacer size='large' />
                        <H2>Colours</H2>
                        <VerticalSpacer size='large' />
                        <TilesWrapper>
                            <FlexWrapRow>
                                {colorLabelList.map(color => (
                                    <ColorTileWrapper key={color}>
                                        <ColorTile color={colors[`${color}`]}>
                                            <ColorLabelWrapper>
                                                <Span>
                                                    {camelCaseToCaptilalisedCase(
                                                        color
                                                    )}
                                                    :
                                                </Span>
                                                <Span>
                                                    {colors[`${color}`]}
                                                </Span>
                                            </ColorLabelWrapper>
                                        </ColorTile>
                                    </ColorTileWrapper>
                                ))}
                            </FlexWrapRow>
                        </TilesWrapper>
                    </ContentWrapper>
                </ColorBlock>

                <ColorBlock color='yellow'>
                    <VerticalSpacer size='medium' />
                    <ContentWrapper>
                        <H2 color='darkGrey'>Colour Sections</H2>
                        <VerticalSpacer size='large' />
                        <H3 color='darkGrey'>Yellow</H3>
                        <VerticalSpacer size='large' />
                        <Paragraph color='darkGrey'>
                            Example section text
                        </Paragraph>
                    </ContentWrapper>
                </ColorBlock>

                <ColorBlock color='blue'>
                    <VerticalSpacer size='medium' />
                    <ContentWrapper>
                        <H3 color='white'>Blue</H3>
                        <VerticalSpacer size='large' />
                        <Paragraph color='white'>
                            Example section text
                        </Paragraph>
                    </ContentWrapper>
                </ColorBlock>

                <ColorBlock color='white'>
                    <VerticalSpacer size='medium' />
                    <ContentWrapper>
                        <H3 color='darkGrey'>White</H3>
                        <VerticalSpacer size='large' />
                        <Paragraph color='darkGrey'>
                            Example section text
                        </Paragraph>
                    </ContentWrapper>
                </ColorBlock>

                <ColorBlock color='pink'>
                    <VerticalSpacer size='medium' />
                    <ContentWrapper>
                        <H3 color='white'>Pink</H3>
                        <VerticalSpacer size='large' />
                        <Paragraph color='white'>
                            Example section text
                        </Paragraph>
                    </ContentWrapper>
                </ColorBlock>

                <ColorBlock color='darkGrey'>
                    <VerticalSpacer size='medium' />
                    <ContentWrapper>
                        <H3 color='white'>Dark Grey</H3>
                        <VerticalSpacer size='large' />
                        <Paragraph color='white'>
                            Example section text
                        </Paragraph>
                    </ContentWrapper>
                </ColorBlock>

                <ColorBlock color='blue'>
                    <VerticalSpacer size='medium' />
                    <ContentWrapper>
                        <H2 color='white'>Typography</H2>
                        <VerticalSpacer size='large' />
                        <H1 color='white'>H1 Example text</H1>
                        <VerticalSpacer size='large' />
                        <H2 color='white'>H2 Example text</H2>
                        <VerticalSpacer size='large' />
                        <H3 color='white'>H3 Example text</H3>
                        <VerticalSpacer size='large' />
                        <Paragraph color='white'>
                            Paragraph example text
                        </Paragraph>
                    </ContentWrapper>
                </ColorBlock>

                <ColorBlock color='white' padding={false}>
                    <VerticalSpacer size='extraLarge' />
                    <ContentWrapper>
                        <VerticalSpacer size='medium' />
                        <H2 color='darkGrey'>Controls</H2>
                        <VerticalSpacer size='large' />
                        <H3 color='darkGrey'>Buttons</H3>
                        <VerticalSpacer size='large' />
                        <Button>Blue button (default)</Button>
                        <VerticalSpacer size='small' />
                        <Button color='pink'>Pink Button</Button>
                        <VerticalSpacer size='small' />
                        <Button color='darkGrey'>Dark Grey Button</Button>
                        <VerticalSpacer size='tiny' />
                    </ContentWrapper>
                </ColorBlock>
                <ColorBlock color='pink' padding={false}>
                    <VerticalSpacer size='tiny' />
                    <ContentWrapper>
                        <Button color='yellow'>Yellow Button</Button>
                        <VerticalSpacer size='small' />
                        <Button color='white'>white Button</Button>
                        <VerticalSpacer size='tiny' />
                    </ContentWrapper>
                </ColorBlock>
                <ColorBlock color='white' padding={false}>
                    <VerticalSpacer size='tiny' />
                    <ContentWrapper>
                        <VerticalSpacer size='large' />
                        <H3 color='darkGrey'>Form inputs</H3>
                        <VerticalSpacer size='medium' />
                        <TextInput
                            name='textfield'
                            labelText='Enter some text here:'
                        />
                    </ContentWrapper>
                    <VerticalSpacer size='extraExtraLarge' />
                </ColorBlock>

                <ColorBlock color='blue' padding={false}>
                    <VerticalSpacer size='extraLarge' />
                    <ContentWrapper>
                        <VerticalSpacer size='medium' />
                        <H2 color='white'>Components</H2>
                        <VerticalSpacer size='large' />
                        <H3 color='white'>User card</H3>
                        <VerticalSpacer size='medium' />
                        <UserCard color={colors.pink} user={mockUser} />
                        <VerticalSpacer size='large' />
                        <H3 color='white'>User card loading</H3>
                        <VerticalSpacer size='medium' />
                        <UserCardLoading />
                        <VerticalSpacer size='large' />
                        <H3 color='white'>
                            Carousel (scrollable mobile friendly)
                        </H3>
                        <VerticalSpacer size='medium' />
                        <Carousel>
                            <UserCard color={colors.yellow} user={mockUser} />
                            <UserCard color={colors.darkGrey} user={mockUser} />
                            <UserCard color={colors.pink} user={mockUser} />
                            <UserCard color={colors.darkGrey} user={mockUser} />
                        </Carousel>
                        <VerticalSpacer size='large' />
                        <H3 color='white'>Error message</H3>
                        <VerticalSpacer size='medium' />
                        <ErrorMessage
                            errorMessage='This is an error message'
                            retry={() => {}}
                        />
                        <VerticalSpacer size='large' />
                    </ContentWrapper>
                    <VerticalSpacer size='extraExtraLarge' />
                </ColorBlock>
            </PageContent>
        </PageWrapper>
    );
};

export default DesignSystem;
