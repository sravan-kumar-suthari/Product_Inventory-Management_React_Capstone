import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { Button } from 'react-bootstrap';
import { Prompt, withRouter } from 'react-router';
import {connect} from "react-redux"
import {updateProduct} from "../redux/actions/productActions"
//import {withRouter} from "react-router-dom"




const validationSchema = Yup.object({
  productName: Yup.string().required("Product Name is required"),
  quantity: Yup.number().required("Quantity is required"),
  price: Yup.number().required("Price is required"),
  manufacturer:Yup.string().required("Manufacturer details required"),
  description:Yup.string().required("Descriptopn Needed")
});

 class EditProductForm extends React.Component {
  constructor(props) {
 super(props);
    this.state={
        isSubmitted : false
    }
  }

componentDidMount(){
  this.setState({isSubmitted:false});
}

    render() {
      const errorStyle={"color":"red","fontWeight":"bold"}
      //console.log(this.props);

      const filteredId=this.props.product.filter(product=>product.id===this.props.match.params.id*1)
  //console.log(filteredId);
     
  const product=filteredId[0];
  //console.log(product.productName)
    return (
        
      <Formik
       initialValues={{ productName: product.productName,description: product.description,manufacturer: product.manufacturer,price: product.price,quantity: product.quantity,views:product.views  }}
        validationSchema={validationSchema}
        validateOnChange={false}
        validateOnBlur={false}


        onSubmit={(value) => {
            let updatedProduct = {};
            this.setState({isSubmitted : true})
          
            setTimeout(() => {
            
              updatedProduct.id          = product.id;
              updatedProduct.productName        = value.productName;
              updatedProduct.description = value.description;
              updatedProduct.price       = value.price;
              updatedProduct.quantity    = value.quantity;
              updatedProduct.manufacturer = value.manufacturer;
           //  this.props.actions.updateProduct(updatedProduct)
           updatedProduct.views=value.views;
              alert("Product Edited SuccessFully");
              this.props.editProduct(updatedProduct)
              this.props.history.push("/")
            }, 500);
            //this.props.actions.getListOfProducts();
          // setTimeout(()=> window.location.reload(),1000)
         
           

          // }
        }}
      >

        

        {({ handleSubmit, handleChange, values, errors }) => (
          <form onSubmit={handleSubmit} style={{"margin": "0 auto","width":"30%"}}>

        
            {<Prompt when={
             !values.productName || !values.quantity || !values.price || !values.manufacturer || !values.description || (this.state.isSubmitted===false) 
            } message="are you sure you want to leave?"/>}

          <h4 style={{"display":"flex","justifyContent":"center","fontWeight":"bold"}}> Update Product Details </h4>

            <div className="form-group">
            <label htmlFor="name" >Name </label>
            <input
              type="text"
              onChange={handleChange}
              value={values.productName}
              placeholder="Enter Product Name"
              name="productName"
              id="productName"
              className="form-control"
            />
            <span style={errorStyle}>{errors.productName}</span>
            </div>

            <div className="form-group">
            <label htmlFor="quantity" >Quantity </label>
            <input
              type="number"
              onChange={handleChange}
              value={values.quantity}
              placeholder="Enter Quantity"
              name="quantity"
              id="quantity"
              className="form-control"
            />
            <span style={errorStyle}>{errors.quantity}</span>
            </div>

            <div className="form-group">
            <label htmlFor="price" >Price  </label>
            <input
              type="number"
              step="1"
              onChange={handleChange}
              value={values.price}
              placeholder="Enter Price"
              name="price"
              id="price"
              className="form-control"
            />
            <span style={errorStyle}>{errors.price}</span>
            </div>

            <div className="form-group">
            <label htmlFor="description" >Description </label>
            <input
              type="text"
              onChange={handleChange}
              value={values.description}
              placeholder="Enter description"
              name="description"
              id="description"
              className="form-control"
            />
            <span style={errorStyle}>{errors.description}</span>
            </div>

            <div className="form-group">
            <label htmlFor="manufacturer" >Manufacturer </label>
            <input
              type="text"
              onChange={handleChange}
              value={values.manufacturer}
              placeholder="Enter manufacturer"
              name="manufacturer"
              id="manufacturer"
              className="form-control"
            />
            <span style={errorStyle}>{errors.manufacturer}</span>
            </div>

            
            <div style={{"display":"flex","justifyContent":"center"}}><Button type="submit" style={{"fontWeight":"bold"}}>Submit</Button></div>
          </form>
        )}
      </Formik>
    );
  }
}

const mapStateToProps=state=>{
    return {
        product : state.productReducer
    }
}

const mapDispatchToProps=dispatch=>{
    return{
      editProduct: updatedProduct=>dispatch(updateProduct(updatedProduct))
    }
  }

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(EditProductForm));