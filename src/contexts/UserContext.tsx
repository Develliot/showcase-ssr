import React, {
    FunctionComponent,
    useState,
    Dispatch,
    SetStateAction,
} from 'react';
import { UserType } from 'src/pages/UsingAPIs';

export type UserContextStateType = {
    users: UserType[] | null;
    selectedPosition: number;
};

const defaultState: UserContextStateType = {
    users: null,
    selectedPosition: 0,
};

export type UserContextProviderType = [
    UserContextStateType,
    Dispatch<SetStateAction<UserContextStateType>>
];

export const UserContext = React.createContext<UserContextProviderType>([
    { ...defaultState },
    () => {},
]);

// making a provider HOC here so I can keep all the state code in this
// and not where ever this provider is used
export const UserProvider: FunctionComponent = ({ children }) => {
    const [state, setState] = useState({ ...defaultState });
    return (
        <UserContext.Provider value={[state, setState]}>
            {children}
        </UserContext.Provider>
    );
};
