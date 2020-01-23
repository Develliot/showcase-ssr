import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { AnimatedContentWrapper } from '../';

it('renders correctly with children', () => {
    const wrapper: ShallowWrapper = shallow(
        <AnimatedContentWrapper>
            <div>Hello</div>
            <div>World</div>
        </AnimatedContentWrapper>
    );
    expect(wrapper).toMatchSnapshot();
});
