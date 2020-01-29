import React, {
    FunctionComponent,
    useState,
    useContext,
    Dispatch,
    SetStateAction,
} from 'react';
import { UserType } from 'src/pages/usingAPIs';

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

// Using custom hook on components instead of the built-in use context,
// 1) it's neater
// 2) I can mock out this custom implementation here testing components that use this context
export const useUserContext = () => useContext(UserContext);

export const UserProvider: FunctionComponent = ({ children }) => {
    const [state, setState] = useState({
        ...defaultState,
    });

    return (
        <UserContext.Provider value={[state, setState]}>
            {children}
        </UserContext.Provider>
    );
};
