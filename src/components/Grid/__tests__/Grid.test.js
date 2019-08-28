import React from 'react';
import { shallow, render, mount } from 'enzyme';
import Grid from '../Grid';

const items = {
    id: 1,
    available: true,
    preference: 1,
    views: [
        {
            "image1": "/cars/peugeot/peugeot-305-gtx-profil.jpg",
            "image2": "/cars/peugeot/peugeot-305-gtx-rear.jpg"
        }
    ],
    brand: 'Peugeot',
    model: '205',
    version: 'GTI',
    brandshop: 'Ottomobile',
    year: '1984',
    description: 'description'
}

const itemsNoAvailable = {
    id: 1,
    available: false,
    preference: 1,
    views: [
        {
            "image1": "/cars/peugeot/peugeot-305-gtx-profil.jpg",
            "image2": "/cars/peugeot/peugeot-305-gtx-rear.jpg"
        }
    ],
    brand: 'Peugeot',
    model: '205',
    version: 'GTI',
    brandshop: 'Ottomobile',
    year: '1984',
    description: 'description'
}

const isLoading = true;
const isNotLoading = false;
const keyId = 1;

describe('<Grid>', () => {
    it('renders a grid', () => {
        const wrapper = shallow(<Grid item={items} isLoading={isLoading} key={keyId} />);
        expect(wrapper.instance().props.isLoading).toEqual(true);
    });

    it('should the grid is not loading', () => {
        const wrapper = shallow(<Grid item={itemsNoAvailable} isLoading={isNotLoading} key={keyId} />);
        expect(wrapper.instance().props.isLoading).toEqual(false);
    });
});