import React, { Component } from "react";

import Product from "./Product";
import { Link, withRouter } from "react-router-dom";
//import classes from "./ProductsList.css";
import {Card,Button,Badge,Form,Dropdown,Container} from "react-bootstrap";
import {connect} from "react-redux";
import {deleteProduct} from "../redux/actions/productActions"
import {authContext} from "../../App";



class ProductsList extends Component {

  constructor(props){
    super(props);
    this.state={
      selectedList : [],
      search:"",
      showProduct:true,
      showPrice:false,
      showQuantity:true,
      showManufacturer:true,
      showDescription:false
    }
  }
  
  checkBoxHandler=(e)=>{
    let selectedList=[...this.state.selectedList]
    if(e.target.checked===true)
    {
      let id=e.target.id
      selectedList.push(id)
    
    }
    else{
      let id=e.target.id
      //console.log(id);
      
      selectedList=selectedList.filter(list=>list !== id)
      
    }
    this.setState({selectedList:selectedList})
    
  }

  deleteHandler=(selectedList,context)=>{

    if(context.isLoggedIn===true){
      if (window.confirm("Are you sure you want to delete the selected items?")) {
        
    let newList=[...selectedList];
    newList.forEach(id=>{
      id=id*1;
      this.props.deleteProduct(id)
      alert("Deleted Selected Product")
    })
      } else {
        this.props.history.replace("/");
      }
}
    else{
      context.handleShow();
    }
  }

  

  searchHandler=(e)=>{
    let keyword=e.target.value;
    //console.log(keyword)
    this.setState({search:keyword})
  }

  productSelectedHandler = (data,context) => {
    // console.log(this.props.match.url + "/" + product)
   if(context.isLoggedIn===true){
     this.props.history.push(this.props.match.url  + "productdetails/" +   data.id);
     // this.setState({blocking:false})
      
 
     if (window.confirm("Are you sure you want to view the details?")) {
       //console.log("happy");
     } else {
       this.props.history.replace("/");
     }
    }
    else {
      context.handleShow();
    }
    }
 
  render() {
   // console.log(this.props);
  
    //console.log(this.state.selectedList);

    // let data = this.props.productList.map((list) => {
    //   console.log(list);
    //   return (
    //     <Product
    //       key={list.id}
    //       id={list.id}
    //       product={list.productName}
    //       quantity={list.quantity}
    //       price={list.price}
    //       description={list.description}
    //       manufacturer={list.manufacturer}
    //       checkBoxHandler={this.checkBoxHandler}
    //     />
    //   );
    // });
    const items=this.props.productList && this.props.productList.filter(data=>{
      if(this.state.search==="")
      return data;
      else if(data.productName.toLowerCase().includes(this.state.search.toLowerCase())){
        return data;
      }
    }).map(data=>{
      return(
        <Product
          key={data.id}
          id={data.id}
          product={data.productName}
          quantity={data.quantity}
          price={data.price}
          description={data.description}
          manufacturer={data.manufacturer}
          views={data.views}
          checkBoxHandler={this.checkBoxHandler}
          showProduct={this.state.showProduct}
          showDescription={this.state.showDescription}
          showPrice={this.state.showPrice}
          showQuantity={this.state.showQuantity}
          showManufacturer={this.state.showManufacturer}
          clicked={this.productSelectedHandler.bind(this, data,this.props.context)}
        />

      )
    })

    return (
      <>
      <authContext.Consumer>
        { context=>{ 

     return <div style={{"padding":"10px 0"}}>
        <Card style={{"backgroundColor" : "#bbbbbb"}} >
        <div className="row">
        <div className="col-6 col-lg-2" >
                            <Card.Body >
                            
                         <Link to="/addproduct">  <Button  variant="success" onClick={()=>!context.isLoggedIn && context.handleShow()}>
                            <Badge pill variant="success">
                              Add Product
                              </Badge>
    </Button></Link> 

                            </Card.Body>
                        </div>
                        <div className="col-6 col-lg-2" >
                            <Card.Body >
                            
                            <Button variant="danger" disabled={this.state.selectedList.length===0}
                            onClick={ this.deleteHandler.bind(this,this.state.selectedList,context)}
                            >
                            <Badge pill variant="danger" >
                              Delete
                              </Badge>
                              </Button>

                            </Card.Body>
                        </div>

                          <div className="col-12 col-lg-3" >
                          <Card.Body>
                          <Dropdown>
  <Dropdown.Toggle variant="primary" id="dropdown-basic" >
    Select Columns To be Visible
  </Dropdown.Toggle>
   <Container>                    
  <Dropdown.Menu >
  <Form.Group id="formGridCheckbox" >
    <Form.Check type="checkbox" label="Product Name" style={{"margin": "5px"}}   defaultChecked={this.state.showProduct} onClick={()=>{this.setState({showProduct:!this.state.showProduct})}}/>
  </Form.Group>
  
                            <Form.Group id="formGridCheckbox">
    <Form.Check type="checkbox" label="Price" style={{"margin": "5px"}}   defaultChecked={this.state.showPrice} onClick={()=>{this.setState({showPrice:!this.state.showPrice})}}/>
  </Form.Group>
  <Form.Group id="formGridCheckbox">
    <Form.Check type="checkbox" label="Quantity" style={{"margin": "5px"}}   defaultChecked={this.state.showQuantity} onClick={()=>{this.setState({showQuantity:!this.state.showQuantity})}}/>
  </Form.Group>
  <Form.Group id="formGridCheckbox">
    <Form.Check type="checkbox" label="Manufacturer" style={{"margin": "5px"}}  defaultChecked={this.state.showManufacturer} onClick={()=>{this.setState({showManufacturer:!this.state.showManufacturer})}}/>
  </Form.Group>
  <Form.Group id="formGridCheckbox">
    <Form.Check type="checkbox" label="Description" style={{"margin": "5px"}}  defaultChecked={this.state.showDescription} onClick={()=>{this.setState({showDescription:!this.state.showDescription})}} />
  </Form.Group>

  </Dropdown.Menu>
  </Container> 
</Dropdown>
                            </Card.Body>
                            </div>

                        <div className="col-12 col-lg-5" >
                          <Card.Body>
                        <Form.Group>
                        <Form.Control size="sm" type="text" placeholder="Search Product" onChange={e=>this.searchHandler(e)} value={this.state.search}/>
                        </Form.Group>
                        </Card.Body>
                        </div>
            </div>



        </Card>
      </div>
       }
      }
    </authContext.Consumer>
      {items}
       
      </>
    );
  }
}
const mapDispatchToProps=(dispatch)=>{
  return {
    deleteProduct: id=>dispatch(deleteProduct(id))
  }
}
export default connect(null,mapDispatchToProps)(withRouter(ProductsList));
