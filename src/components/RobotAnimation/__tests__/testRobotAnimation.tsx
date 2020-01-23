import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { RobotAnimation } from '../';

it('renders correctly', () => {
    const wrapper: ShallowWrapper = shallow(<RobotAnimation />);
    expect(wrapper).toMatchSnapshot();
});
