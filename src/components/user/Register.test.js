import React from "react";
import Register from "./Register";
import {mount} from "enzyme";
import store from "../redux/store/configureStore";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom"

describe("Should render Register form details correctly",()=>{
let mountWrapper;

beforeEach(()=>{
    mountWrapper=mount(
    <Provider store={store}>
        <BrowserRouter>
    <Register/>
    </BrowserRouter>
    </Provider>)
})
afterEach(()=>{
    mountWrapper.unmount()
})

test("Heading should be'User Registration'",()=>{
    //console.log(mountWrapper.debug())
    expect(mountWrapper.find('h4').render().text()).toEqual('User Registration')
})

test("Register button should be present",()=>{
    expect(mountWrapper.find('.btn').render().text()).toEqual("Register")
})

test("Should render one card",()=>{
    expect(mountWrapper.find('Card').length).toBe(1);
})

})