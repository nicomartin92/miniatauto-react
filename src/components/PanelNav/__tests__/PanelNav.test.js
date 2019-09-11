import React from 'react';
import { shallow, render, mount } from 'enzyme';
import PanelNav from '../PanelNav';

import Provider from 'react-redux';

describe('<PanelNav>', () => {
    const wrapper = shallow(<PanelNav store={''} />);

    it('should do panelSwitcher to be false on button close', () => {
        const firstButton = wrapper.find('.buttonClose');
        firstButton.simulate('click');
        expect(wrapper.state().isOpen).toEqual(false);
    });

    it('should do panelSwitcher to be false on overlay expanded', () => {
        const firstButton = wrapper.find('.overlay');
        firstButton.simulate('click');
        expect(wrapper.state().isOpen).toEqual(false);
    });
});