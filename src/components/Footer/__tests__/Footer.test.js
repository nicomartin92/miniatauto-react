import React from 'react';
import { shallow, render, mount } from 'enzyme';
import Footer from '../Footer';

describe('<Footer>', () => {
    it('renders a Footer', () => {
        const wrapper = shallow(<Footer />);
        expect(wrapper.find('.footer').length).toEqual(1);
    });
});