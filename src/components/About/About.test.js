import React from "react";
import About from "./About";
import {shallow} from "enzyme";


describe("Validating the title of about page",()=>{
    let shallowWrapper;

    beforeEach(()=>{
        shallowWrapper=shallow(<About/>)
    })

    afterEach(()=>{
        shallowWrapper.unmount()
    })

    it("Should display title as Welcome to Product Inventory Management",()=>{
    //   console.log(shallowWrapper.debug())
       expect(shallowWrapper.find('CardTitle').render().text()).toEqual("Welcome to Product Inventory Management")

       
    })

    it("Should Contain one Carousel",()=>{
        expect(shallowWrapper.find("Carousel").length).toBe(1);
    })
})