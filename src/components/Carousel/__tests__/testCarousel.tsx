import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { Carousel, CarouselLeftButton, CarouselRightButton } from '../';

it('renders correctly', () => {
    const wrapper: ShallowWrapper = shallow(
        <Carousel>
            {['a', 'b', 'c'].map((item, index) => {
                return <div key={index}>{item}</div>;
            })}
        </Carousel>
    );
    expect(wrapper).toMatchSnapshot();
});

it('renders navigates correctly', () => {
    const wrapper: ShallowWrapper = shallow(
        <Carousel>
            {['a', 'b', 'c'].map((item, index) => {
                return <div key={index}>{item}</div>;
            })}
        </Carousel>
    );

    expect(wrapper.find(CarouselRightButton)).toHaveLength(1);
    wrapper.find(CarouselRightButton).simulate('click');
    expect(wrapper.find(CarouselLeftButton)).toHaveLength(1);
    wrapper.find(CarouselRightButton).simulate('click');
    expect(wrapper.find(CarouselRightButton)).toHaveLength(0);
    wrapper.find(CarouselLeftButton).simulate('click');
    expect(wrapper).toMatchSnapshot();
});
