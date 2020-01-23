import React from 'react';

import { H3, Span, Paragraph } from 'src/components/Typography';
import { VerticalSpacer, RowCenter } from 'src/components/Layout';

import { UserType } from 'src/pages/UsingAPIs';

import {
    UserCardWrapper,
    CoverColor,
    ImageWrapper,
    ImageContainer,
    BottomHalf,
} from './styles';

type Props = {
    user: UserType;
    color: string;
};

export const UserCard = ({
    user: {
        name: { first, last },
        picture,
        email,
        location: { street, city, state, postcode },
    },
    color,
}: Props) => {
    return (
        <UserCardWrapper>
            <RowCenter>
                <CoverColor color={color}>
                    <RowCenter>
                        <ImageWrapper>
                            <ImageContainer
                                src={picture.large}
                                alt='User image'
                            />
                        </ImageWrapper>
                    </RowCenter>
                </CoverColor>
            </RowCenter>
            <BottomHalf>
                <VerticalSpacer size='small' />
                <H3>
                    {first} {last}
                </H3>
                <VerticalSpacer size='small' />
                <Paragraph ellipsis={true}>
                    <Span bold={true}>Email: </Span> {email}
                </Paragraph>
                <Paragraph ellipsis={true}>
                    <Span bold={true}>Street: </Span>{' '}
                    <Span>
                        {street.number} {street.name}
                    </Span>
                </Paragraph>
                <Paragraph ellipsis={true}>
                    <Span bold={true}>City: </Span> {city}
                </Paragraph>
                <Paragraph ellipsis={true}>
                    <Span bold={true}>State: </Span> {state}
                </Paragraph>
                <Paragraph ellipsis={true}>
                    <Span bold={true}>Postcode: </Span> {postcode}
                </Paragraph>
            </BottomHalf>
        </UserCardWrapper>
    );
};
