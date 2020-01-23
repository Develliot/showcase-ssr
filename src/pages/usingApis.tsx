import React, { useContext, useEffect } from 'react';
import { NextPage } from 'next';
import fetch from 'isomorphic-unfetch';

import { H1, H2, H3, Paragraph } from 'src/components/Typography';
import { PageWrapper, PageContent } from 'src/components/Layout';
import {
    ContentWrapper,
    VerticalSpacer,
    ColorBlock,
} from 'src/components/Layout';
import Users from 'src/components/Users';
import { UserContext } from 'src/contexts/UserContext';
import Map from 'src/components/Map';
import {
    scaleLatitudeGlobalToUK,
    scaleLongitudeGlobalToUK,
} from 'src/utils/NumberUtils';

export type UserType = {
    name: { first: string; last: string };
    login: { uuid: string };
    picture: { large: string };
    email: string;
    location: {
        street: { number: string; name: string };
        city: string;
        state: string;
        postcode: string;
        coordinates: {
            latitude: number;
            longitude: number;
        };
    };
};

type Props = {
    isError: boolean;
    isLoading: boolean;
    users: UserType[] | null;
};

const transformCoords = (users: UserType[]): UserType[] => {
    return users.map(user => {
        return {
            ...user,
            location: {
                ...user.location,
                coordinates: {
                    latitude: scaleLatitudeGlobalToUK(
                        user.location.coordinates.latitude
                    ),
                    longitude: scaleLongitudeGlobalToUK(
                        user.location.coordinates.longitude
                    ),
                },
            },
        };
    });
};

export const UsingAPIs: NextPage<Props> = ({ isError, isLoading, users }) => {
    const [state, dispatch] = useContext(UserContext);

    useEffect(() => {
        // only get mock user data if there is no exiting user data
        if (!state.users) {
            dispatch({ ...state, users });
        }
    }, [users, dispatch, state]);

    return (
        <PageWrapper>
            <PageContent>
                <ColorBlock color='blue'>
                    <ContentWrapper>
                        <VerticalSpacer size='extraExtraLarge' />
                        <H1 color='white'>Using APIs</H1>
                        <VerticalSpacer size='large' />
                        <H2 color='white'>Random User Data</H2>
                        <VerticalSpacer size='medium' />
                        <Users
                            isError={isError}
                            isLoading={isLoading}
                            users={users}
                        />
                        <VerticalSpacer size='large' />
                        <Map />
                    </ContentWrapper>
                </ColorBlock>

                <ColorBlock color='yellow'>
                    <ContentWrapper>
                        <VerticalSpacer size='extraExtraLarge' />
                        <H3>Data strategy</H3>
                        <VerticalSpacer size='medium' />
                        <Paragraph>
                            With Next JS the getInitialProps method which deal
                            with data on SSR needs to happen on a page an not
                            This was so components so I couldn't use a reusable
                            hook to load data. I did however push that data to a
                            context using a hook when the page renders. This is
                            fine because the component that uses this data to
                            make another api call will work in the client only
                        </Paragraph>
                        <VerticalSpacer size='small' />
                        <Paragraph>
                            The user data comes from the https://randomuser.me/
                            random user generator API. The coordinates are a bit
                            random so I have had to transform them from a global
                            range to a UK range so point marks don't end up in
                            weird places. The maps are from google maps
                            Javascript API.
                        </Paragraph>
                        <VerticalSpacer size='large' />
                        <H3>Separating the data and display</H3>
                        <VerticalSpacer size='medium' />
                        <Paragraph>
                            The request itself is triggered by the
                            UsersContainer. The containers job is to perform the
                            request via the hook and pump data into a
                            userContext or pass error and loading states
                            directly to the visible component.
                        </Paragraph>
                        <VerticalSpacer size='large' />
                        <H3>Context API</H3>
                        <VerticalSpacer size='medium' />
                        <Paragraph>
                            I don't think something like Redux was required for
                            state management. Data from the URL request and the
                            carousel's currently selected User are stored in the
                            usersContext. The Map component knows which User
                            Marker to scroll to when the index of the carousel
                            changes by using the state from this context.
                        </Paragraph>
                    </ContentWrapper>
                </ColorBlock>
            </PageContent>
        </PageWrapper>
    );
};

UsingAPIs.getInitialProps = async () => {
    let users: UserType[] | null = null;
    let isError: boolean = false;
    let isLoading: boolean = false;

    try {
        const url =
            'https://randomuser.me/api/?nat=gb&results=5&inc=name,email,login,location,picture&noinfo';
        const res = await fetch(url);
        const json = await res.json();
        users = transformCoords(json.results);
        isError = res.status > 299 ? true : false;
        isLoading = false;
    } catch (error) {
        users = [];
        isError = true;
        isLoading = false;
    }

    return { users, isError, isLoading };
};

export default UsingAPIs;
