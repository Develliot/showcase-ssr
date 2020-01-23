import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { Header } from '../';

// not much point testing not visible because snapshot
// won't capture changes in styled component
it('renders visible', () => {
    const wrapper: ShallowWrapper = shallow(
        <Header currentRoute='/' visible={true} />
    );
    expect(wrapper).toMatchSnapshot();
});
