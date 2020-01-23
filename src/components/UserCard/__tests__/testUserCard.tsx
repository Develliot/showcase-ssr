import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { UserCard } from '../';

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

it('renders correctly', () => {
    const wrapper: ShallowWrapper = shallow(
        <UserCard user={mockUser} color='#A93F55' />
    );
    expect(wrapper).toMatchSnapshot();
});
