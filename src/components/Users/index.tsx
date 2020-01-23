import React, { FunctionComponent, useContext } from 'react';

import { colors as themeColors } from 'src/theme';
import { UserContext } from 'src/contexts/UserContext';

import { UserCard } from 'src/components/UserCard';
import { UserCardLoading } from 'src/components/UserCard/UserCardLoading';
import { Carousel } from 'src/components/Carousel';
import { ErrorMessage } from 'src/components/ErrorMessage';

// types
import { UserType } from 'src/pages/usingAPIs';

const chooseColor = (index: number): string => {
    const availableColours = [
        themeColors.pink,
        themeColors.yellow,
        themeColors.darkGrey,
    ];
    return availableColours[index % availableColours.length];
};

type Props = {
    isError: boolean;
    isLoading: boolean;
    users: UserType[] | null;
};

export const Users: FunctionComponent<Props> = ({
    isError,
    isLoading,
    users,
}) => {
    const [state, dispatch] = useContext(UserContext);

    const setCurrentPosition = (position: number): void => {
        if (position !== state.selectedPosition) {
            dispatch({ ...state, selectedPosition: position });
        }
    };

    return (
        <>
            {isError ? (
                <ErrorMessage errorMessage='Unable to retrieve user data' />
            ) : isLoading ? (
                <Carousel>
                    <UserCardLoading />
                    <UserCardLoading />
                    <UserCardLoading />
                </Carousel>
            ) : (
                <Carousel onPositionChanged={setCurrentPosition}>
                    {users &&
                        users.map((user: UserType, index: number) => (
                            <UserCard
                                key={user.login.uuid}
                                user={user}
                                color={chooseColor(index)}
                            />
                        ))}
                </Carousel>
            )}
        </>
    );
};

export default Users;
