import React from 'react';
import { shallow, render, mount } from 'enzyme';
import CarInfo from '../CarInfo';

const items = {
    id: 1,
    brand: 'Peugeot',
    model: '205',
    version: 'GTI Gutmann'
}

describe('<CarInfo>', () => {
    it('renders a toaster', () => {
        const wrapper = shallow(<CarInfo item={items} />);
    });
});