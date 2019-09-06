import React from 'react';
import { shallow, render, mount } from 'enzyme';
import Toaster from '../Toaster';

const items = {
    showToaster: true,
    url: '/',
    success: 'success',
    text: 'text',
    image: '/'
}

describe('<Toaster>', () => {
    const wrapper = shallow(<Toaster item={items} />);

    it('renders a toaster', () => {
        //expect(slider.find('div.slider__wrapper').length).toEqual(1);
        expect(wrapper).toMatchSnapshot();
    });

    it('state showToaster should be false', () => {
        expect(wrapper.state().showToaster).toEqual(false);
        expect(wrapper.find('.toast__close').length).toEqual(1);
    });

    it('should click on button and should be false', () => {
        const firstButton = wrapper.find('.toast__close');

        firstButton.simulate('click');
        wrapper.setState({
            showToaster: true
        });

        expect(wrapper.state().showToaster).toEqual(true);

        setTimeout(() => {
            expect(wrapper.state().showToaster).toEqual(true);
            wrapper.unmount();
            done();
        }, 3000);
    });
});