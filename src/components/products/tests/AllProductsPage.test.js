import React from "react";

import AllProductsPage from "../AllProductsPage";
import {mount} from "enzyme";
import store from "../../redux/store/configureStore";
import {Provider} from "react-redux"
import {BrowserRouter} from "react-router-dom"

describe("All Products Page renders correctly",()=>{
    let mountWrapper;
    beforeEach(()=>{
        mountWrapper=mount(<Provider store={store}><BrowserRouter><AllProductsPage /></BrowserRouter> </Provider>)
    })

    afterEach(()=>{
        mountWrapper.unmount();
    })

    test("Should Present two Buttons",()=>{
      // console.log(mountWrapper.find('Button').debug())
        expect(mountWrapper.find('Button').length).toBe(3);
    })

    test("Should present one input Element",()=>{
        expect(mountWrapper.find('input').length).toBe(1);
    })


    test("Text should be 'Add Product' for the first button",()=>{
        expect(mountWrapper.find('Button').at(0).render().text()).toEqual('Add Product')
       
    })

    test("Text should be 'Delete' for the second button",()=>{
        expect(mountWrapper.find('Button').at(1).render().text()).toEqual('Delete')
    })

    test("Text should be 'Select Columns To be Visible' for the dropdown",()=>{
        expect(mountWrapper.find('Dropdown').render().text()).toEqual("Select Columns To be Visible")
    })

    test("onChange event should trigger correctly for search product",()=>{
        mountWrapper.find('input').simulate('change',{
            target :{value : "Moto"}
        })
        mountWrapper.update();
        expect(mountWrapper.find('input').prop('value')).toEqual("Moto")

    })


})