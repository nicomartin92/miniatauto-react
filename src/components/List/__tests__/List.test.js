import React from 'react';
import { shallow, render, mount } from 'enzyme';
import List from '../List';

const items = {
    title: 'title',
    brandshop: 'ottomobile',
    brand: 'Peugeot',
    model: '504',
    version: 'riviera',
    year: '1970',
    reference: 'OT504'
}

const isLoadingTrue = {
    isLoading: true
}

const isLoadingFalse = {
    isLoading: false
}

describe('<List>', () => {
    it('renders a List with isLoading false', () => {
        const wrapper = shallow(<List item={items} />);
        expect(wrapper.find('.list__item').length).toEqual(1);
    });

    it('renders a List with isLoading false', () => {
        const wrapper = shallow(<List item={items} isLoading={isLoadingTrue} />);
    });
});