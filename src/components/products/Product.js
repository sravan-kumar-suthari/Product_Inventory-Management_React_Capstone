import React from "react";
import {Card,Button,InputGroup,Badge} from "react-bootstrap";

import {authContext} from "../../App"
import {withRouter} from "react-router-dom";





const Product = (props) => {
   // console.log(props);

    const productList={id:props.id, name:props.product, price : props.price, quantity : props.quantity, manufacturer: props.manufacturer,description : props.description,views:props.views}



  return (
    <>
    {(props.showPrice || props.showDescription || props.showManufacturer || props.showProduct || props.showQuantity) && <div style={{"padding":"10px 0"}}>
  
      <Card style={{"backgroundColor" : "#bbbbbb"}}>
               
                    <div className="row">
                       
                    {props.showProduct &&   <div className="col-12 col-lg-3">
                           <Card.Body>
                                <Card.Subtitle className="text-muted label-text">Name</Card.Subtitle>
                                <Card.Text onClick={props.clicked}>{props.product}</Card.Text>
                            </Card.Body>
                        </div>
}
                       
                        { props.showPrice &&  <div className="col-6 col-lg-3">
                          <Card.Body>
                                <Card.Subtitle className="text-muted label-text">Price</Card.Subtitle>
                                <Card.Text>{props.price}</Card.Text>
                          </Card.Body> 
                        </div>
}
                      
                        { props.showQuantity &&  <div className="col-6 col-lg-3">   
                            <Card.Body>
                                <Card.Subtitle className="text-muted label-text">Quantity</Card.Subtitle>
                                <Card.Text>{props.quantity}</Card.Text>
                            </Card.Body>
                          </div> }
                        
                    
                          { props.showManufacturer &&  <div className="col-12  col-lg-3">
                            <Card.Body>
                                <Card.Subtitle className="text-muted label-text">Manufacturer</Card.Subtitle>
                                <Card.Text>{props.manufacturer}</Card.Text>
                            </Card.Body>
                        </div>
}
                        </div>
                    <div className="row">
                        
                    { props.showDescription &&   <div className="col-12  col-lg-6">
                            <Card.Body>
                                <Card.Subtitle className="text-muted label-text">Description</Card.Subtitle>
                                <Card.Text>{props.description}</Card.Text>
                            </Card.Body>
</div> }

                        
                        
                  <div className="col-3 col-lg-3" >
                            
                <authContext.Consumer>
                  {context=>{

                 
                    
                        return    <Card.Body >
                            
                          <Button variant="warning" onClick={() => context.isLoggedIn ? props.history.push(props.match.url  + "editproduct/" +   productList.id) : context.handleShow()}>
                            <Badge pill variant="warning">
                              Edit
                              </Badge>
                              </Button>
                                 

                            </Card.Body>
                          }}
                            </authContext.Consumer>
                        </div>

 <div className="col-9 col-lg-3" >
                          <Card.Body>
                          <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                             <InputGroup.Checkbox aria-label="Checkbox for following text input" id={props.id} onClick={(e)=>props.checkBoxHandler(e)}/>
                             
                             </InputGroup.Prepend>
                             <span style={{"padding":"3px"}} >Select to Delete</span>
                            </InputGroup>
                            
                          </Card.Body>
                        </div> 

                       </div> 
               
            
            </Card>
        
    </div>
}
</>
  );
};


export default  withRouter(Product);
