import React from 'react';
import { shallow, render, mount } from 'enzyme';
import Shape from '../Shape';

const items = {
    views: [
        {
            image1: 'image'
        }
    ]
}


describe('<Shape>', () => {
    const wrapper = shallow(<Shape item={items} />);

    it('renders a Shape', () => {    
        // expect(wrapper.find('<header>').length).toEqual(1);
        console.log(wrapper);
    });
});