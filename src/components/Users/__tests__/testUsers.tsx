import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { Users } from '../';
import * as UserContext from 'src/contexts/UserContext';
import Carousel from 'src/components/Carousel';

const mockUsers = [
    {
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
            uuid: '1',
        },
        name: { first: 'Angela', last: 'Castro' },
        picture: {
            large: 'https://randomuser.me/api/portraits/women/45.jpg',
        },
    },
];

const mockRetry = jest.fn();

const mockProps = {
    isError: false,
    isLoading: false,
    users: mockUsers,
    retry: mockRetry,
};

describe('Users', () => {
    it('renders with users', () => {
        const wrapper: ShallowWrapper = shallow(<Users {...mockProps} />);
        expect(wrapper).toMatchSnapshot();
    });

    it('renders with loading', () => {
        const wrapper: ShallowWrapper = shallow(
            <Users {...mockProps} isLoading={true} />
        );
        expect(wrapper).toMatchSnapshot();
    });

    it('renders with error', () => {
        const wrapper: ShallowWrapper = shallow(
            <Users {...mockProps} isError={true} />
        );
        expect(wrapper).toMatchSnapshot();
    });

    it('updates the user context when carousel position changes', () => {
        const contextValue: UserContext.UserContextStateType = {
            users: null,
            selectedPosition: 0,
        };

        const dispatch = jest.fn();

        jest.spyOn(UserContext, 'useUserContext').mockImplementation(() => {
            return [contextValue, dispatch];
        });

        const wrapper: ShallowWrapper = shallow(<Users {...mockProps} />);
        const carousel =
            wrapper.find(Carousel).at(0) && wrapper.find(Carousel).at(0);
        const onPositionChanged: ((position: number) => void) | null =
            carousel.props().onPositionChanged || null;

        if (onPositionChanged) {
            onPositionChanged(4);
        }

        expect(dispatch).toHaveBeenCalled();
        expect(dispatch).toHaveBeenCalledWith({
            users: null,
            selectedPosition: 4,
        });
    });
});
