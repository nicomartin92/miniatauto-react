import React from 'react';
import { shallow, render, mount } from 'enzyme';
import Button from '../Button';

describe('<Button>', () => {
    it('renders a button', () => {
        const wrapper = shallow(<Button />);
        expect(wrapper.find('.buttonTest').length).toEqual(1);
    });
});