import React from "react";
//import moxios from "moxios";
import AddProductForm from "../AddProductForm";
import {mount} from "enzyme";
import store from "../../redux/store/configureStore";
import {Provider} from "react-redux"
import {BrowserRouter} from "react-router-dom"
//


describe("AddProductForm snapshot",()=>{
    let mountWrapper;

    beforeEach(()=>{
        mountWrapper=mount(<Provider store={store}><BrowserRouter><AddProductForm /></BrowserRouter> </Provider>)
    })

    afterEach(()=>{
        mountWrapper.unmount();
    })

    test("AddProductForm snapshot renders correctly",()=>{
        expect(mountWrapper).toMatchSnapshot();
        
    })
})

describe("AddProductForm rendering of elements",()=>{
    let mountWrapper;
    beforeEach(()=>{
        mountWrapper=mount(<Provider store={store}><BrowserRouter><AddProductForm /></BrowserRouter> </Provider>)
    })  
    afterEach(()=>{
    mountWrapper.unmount();
})

it("should display 'Add Product' as heading",()=>{
    expect(mountWrapper.find('h4').render().text()).toEqual('Add Product')
})

it("should contain 5 input Elements",()=>{
    expect(mountWrapper.find('input').length).toBe(5);
})

it("should contain one submit button",()=>{
    expect(mountWrapper.find('Button').length).toBe(1)
})

})

