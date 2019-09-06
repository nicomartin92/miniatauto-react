import React from 'react';
import { shallow, render, mount } from 'enzyme';
import sinon from "sinon";
import AddForm from '../AddForm';

const expectedJson = {
    "brand": null, 
    "carList": [{"brand": "Peugeot", "id": 1, "model": "205", "version": "GTI Gutmann"}, {"brand": "Renault", "id": 2, "model": "Megane 4", "version": "GTI GutmannRS"}, {"brand": "Bmw", "id": 3, "model": "E92", "version": "M3"}], 
    "model": null, 
    "searchString": "", 
    "undefined": "spam", 
    "version": null}

const event = {target: {value: "spam"}};

describe('<AddForm>', () => {
    const spy = sinon.spy();
    const wrapper = shallow(<AddForm />);
    
    it('renders a Addform', () => {
        const onChange = wrapper.find('#brand');
        onChange.simulate('change', event);
        expect(wrapper.update().state()).toEqual(expectedJson);
    });
});