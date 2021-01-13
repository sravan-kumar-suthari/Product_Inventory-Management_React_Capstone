// import { render, screen } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });


import React from "react";
import store from "./components/redux/store/configureStore"
import {Provider} from "react-redux";
import {loadUsers} from "./components/redux/actions/userActions";
import {mount} from "enzyme";
import {BrowserRouter} from "react-router-dom"
import App from "./App"
import {getListOfProducts} from "./components/redux/actions/productActions";


describe("App renders correctly",()=>{
  let mountwrapper;
  beforeEach(()=>{
    store.dispatch(loadUsers());
    store.dispatch(getListOfProducts())
    mountwrapper=mount(
      <Provider store={store}>
        <BrowserRouter>
        <App/>
        </BrowserRouter>
      </Provider>
    )
  })

  afterEach(()=>{
    mountwrapper.unmount();
  })

  test("App should match the snapshot correctly",()=>{
    expect(mountwrapper).toMatchSnapshot()
  })
})