import React,{useEffect} from "react";
import { withRouter } from "react-router-dom";
import {addViewProduct} from "../redux/actions/productActions"
import {connect} from "react-redux"
import {Card,Button} from "react-bootstrap";


const ViewProductDetail = (props) => {
//  console.log(props.productList);

  const filteredId=props.productList && props.productList.filter(product=>product.id===props.match.params.productId*1)
 //console.log(filteredId);
 // let id=filteredId[0].id;
 // let count=filteredId[0].views;
   
 // count=count+1;
  //const productWithUpdatedView={...filteredId}
 // productWithUpdatedView[0].views=count;
  const productDetails=filteredId[0]
       
   //console.log(productDetails);
    useEffect(()=>{

        productDetails.views++;
          //  console.log(productDetails)
           props.addViewProduct(productDetails);
           //console.log(id,count);
    },[])


  const style={"display":"flex", "justifyContent":"center"}
  return(
          <div style={style}>
              <Card  >
                  <Card.Body style={{style}}>
                      <Card.Title style={{"fontSize":"30px","fontWeight":"bold","display":"flex", "justifyContent":"center"}}> {filteredId[0].productName} </Card.Title>
                      <Card.Text><strong>Quantity    :</strong>{filteredId[0].quantity}</Card.Text>
                      <Card.Text><strong>Price       :</strong>{filteredId[0].price}</Card.Text>
                      <Card.Text><strong>Manufacturer:</strong>{filteredId[0].manufacturer}</Card.Text>
                      <Card.Text><strong>Description :</strong>{filteredId[0].description}</Card.Text>
                      <div>
                      <Button onClick={()=> props.history.push("/")} variant="primary" style={{ height: "6vh","fontWeight":"bold" }}>Back</Button>
                      </div>
                  </Card.Body>
              </Card>
          </div>
      );
};

const mapStateToProps = state=>{
    return{
        productList : state.productReducer
    }
}

const mapDispatchToProps=dispatch=>{
    return{
        addViewProduct : (productDetails)=>dispatch(addViewProduct(productDetails))
    }
}
export default React.memo(connect(mapStateToProps,mapDispatchToProps)(withRouter(ViewProductDetail)));
