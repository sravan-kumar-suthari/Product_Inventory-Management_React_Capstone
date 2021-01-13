import React, { PureComponent } from "react";

//import "./AllProductsPage.css";

import ProductsList from "./ProductsList";
import {connect} from "react-redux"
import { getListOfProducts } from "../redux/actions/productActions";
import {authContext} from "../../App";



class AllProductsPage extends PureComponent {
  
  componentDidMount(){

    this.props.getProducts()
  }
 
  

  render() {
    //console.log(this.props);
    return (
      <div >
        <authContext.Consumer>
        { context=>{
            return  <ProductsList productList={this.props.productsList} context={context}/>
        }
      }
              </authContext.Consumer>
      </div>
    );
  }
}

const mapStateToProps=(state)=>{
  return {
    productsList : state.productReducer
  }
}
const mapDispatchToProps=dispatch=>{
  return {
    getProducts : ()=>dispatch(getListOfProducts())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(AllProductsPage);
