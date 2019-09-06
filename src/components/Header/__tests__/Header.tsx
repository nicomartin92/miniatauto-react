import React from 'react';
import { shallow, render, mount } from 'enzyme';
import Header from '../Header';

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

describe('<Header>', () => {
    it('renders a Header with isLoading false', () => {
        const wrapper = shallow(<Header />);
        // expect(wrapper.find('<header>').length).toEqual(1);
        console.log(wrapper);
    }); 

    /* it('renders a List with isLoading false', () => {
        const wrapper = shallow(<List item={items} isLoading={isLoadingTrue} />);
    }); */
});