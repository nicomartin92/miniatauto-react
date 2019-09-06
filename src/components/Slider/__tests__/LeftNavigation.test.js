import React from 'react';
import { shallow, render, mount } from 'enzyme';
import LeftNavigation from '../LeftNavigation';

describe('<LeftNavigation>', () => {
    const wrapper = shallow(<LeftNavigation />);
    
    it('should render a left navigation', () => {
        expect(wrapper.find('.backArrow').length).toEqual(1);
    });   
});