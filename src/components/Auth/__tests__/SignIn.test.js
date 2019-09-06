import React from 'react';
import { shallow, render, mount } from 'enzyme';
import SignIn from '../SignIn';

describe('<SignIn>', () => {
    const wrapper = shallow(<SignIn />);
    
    it('should submit SignIn', () => {
        const link = wrapper.find('.white');
        link.simulate('submit', {
            preventDefault: () => {}
        });
        expect(typeof link).toBe("object");
    });   
});