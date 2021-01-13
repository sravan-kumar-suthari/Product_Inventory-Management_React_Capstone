import React from "react";
import NavigationBar from "./NavigationBar";
import {mount} from "enzyme";
import {BrowserRouter} from "react-router-dom"
import store from "./redux/store/configureStore"
import {Provider} from "react-redux"

describe("Navigation bar should render correctly",()=>{
    let mountWrapper;

    beforeEach(()=>{
        mountWrapper=mount(
            <Provider store={store}>
        <BrowserRouter>
        <NavigationBar />
        </BrowserRouter>
        </Provider>
        )
    })

    afterEach(()=>{
        mountWrapper.unmount();
    })

    test("Brand name should be 'Product Inventory'",()=>{
       // console.log(mountWrapper.debug())
        expect(mountWrapper.find('NavbarBrand').render().text()).toEqual('Product Inventory')
    })

    test("Should have 'Most Viewed Products' as first NavLink",()=>{
        expect(mountWrapper.find('NavLink').at(0).render().text()).toEqual("Most Viewed Products")
    })

    test("Should have 'Home' as second NavLink",()=>{
        expect(mountWrapper.find('NavLink').at(1).render().text()).toEqual("Home")
    })

    test("Should have 'About' as Third NavLink",()=>{
        expect(mountWrapper.find('NavLink').at(2).render().text()).toEqual("About")
    })

})
