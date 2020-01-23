import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { Users } from '../';

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
