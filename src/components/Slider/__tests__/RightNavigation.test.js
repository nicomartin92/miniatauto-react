import React from 'react';
import { shallow, render, mount } from 'enzyme';
import RightNavigation from '../RightNavigation';

describe('<RightNavigation>', () => {
    const wrapper = shallow(<RightNavigation />);
    
    it('should render a right navigation', () => {
        expect(wrapper.find('.nextArrow').length).toEqual(1);
    });   
});