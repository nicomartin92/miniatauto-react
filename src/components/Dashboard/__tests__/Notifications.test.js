import React from 'react';
import { shallow, render, mount } from 'enzyme';
import Notifications from '../Notifications';

describe('<Notifications>', () => {
    it('renders a Notification', () => {
        const wrapper = shallow(<Notifications />);
        expect(wrapper.find('.notifications').length).toEqual(1);
    });
});