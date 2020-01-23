import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { Dots } from '../Dots';
import { Dot } from '../styles';

it('renders the correct selected dot', () => {
    const wrapper: ShallowWrapper = shallow(
        <Dots count={4} currentPosition={3} scrollToPosition={() => {}} />
    );
    expect(wrapper).toMatchSnapshot();
});

it('fires the correct scroll to function after a dot is clicked', () => {
    const mockScrollToPostion = jest.fn();

    const wrapper: ShallowWrapper = shallow(
        <Dots
            count={4}
            currentPosition={3}
            scrollToPosition={mockScrollToPostion}
        />
    );
    wrapper
        .find(Dot)
        .first()
        .simulate('click');
    expect(mockScrollToPostion).toHaveBeenCalledWith(0);
});
