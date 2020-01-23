import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { UserCardLoading } from '../UserCardLoading';

it('renders correctly', () => {
    const wrapper: ShallowWrapper = shallow(<UserCardLoading />);
    expect(wrapper).toMatchSnapshot();
});
