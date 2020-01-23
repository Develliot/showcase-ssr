import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { TextInput } from '../';

it('renders correctly', () => {
    const wrapper: ShallowWrapper = shallow(
        <TextInput name='input' labelText='some label text' />
    );
    expect(wrapper).toMatchSnapshot();
});
