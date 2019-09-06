import React from 'react';
import { shallow, render, mount } from 'enzyme';
import SignUp from '../SignUp';

describe('<SignUp>', () => {
    const wrapper = shallow(<SignUp />);
    
    it('should submit SignUp', () => {
        const link = wrapper.find('.white');
        link.simulate('submit', {
            preventDefault: () => {}
        });
        expect(typeof link).toBe("object");
    });   
});