import React from "react";
import {Carousel,Card} from "react-bootstrap"
import laptop from "../../assets/images/laptop.jpg"

import mobile from "../../assets/images/mobile.jpg"

import Technology from "../../assets/images/Technology.jpg"

import printer from "../../assets/images/printer.jpg"

import bulb from "../../assets/images/bulb.jpg"




const About =(props)=>{
    return(
                <>  
                <div className="col-12">
                           <Card.Body className="text-center">   
                            <Card.Title>Welcome to Product Inventory Management</Card.Title>
                            </Card.Body>
                        </div>

                 <div className='container-fluid'style={{"marginTop":"10px"}} >  
                         <Carousel interval={1000}>  
                         <Carousel.Item style={{'height':"400px"}} >  
                         <img style={{'height':"400px"}}  
                         className="d-block w-100"
                            src={laptop} alt="laptop" />  
                                 </Carousel.Item  >  
                                 <Carousel.Item style={{'height':"400px"}}>  
                                 <img style={{'height':"400px"}}  
                                   className="d-block w-100"  
                                    src={mobile}  alt="mobile"  />  
                                         </Carousel.Item>  
                                         <Carousel.Item style={{'height':"400px"}}>  
                                       <img style={{'height':"400px"}}  
                                        className="d-block w-100"  
                                         src={Technology} alt="Technology"  /> 
                                         </Carousel.Item>  

                                         <Carousel.Item style={{'height':"400px"}}>  
                                       <img style={{'height':"400px"}}  
                                        className="d-block w-100"  
                                         src={printer} alt="printer"  /> 
                                         </Carousel.Item>

                                         <Carousel.Item style={{'height':"400px"}}>  
                                       <img style={{'height':"400px"}}  
                                        className="d-block w-100"  
                                         src={bulb} alt="bulb"  /> 
                                         </Carousel.Item>
                                        </Carousel>  
                                </div>  

                                <div className="col-12">
                           <Card.Body className="text-center">   
                            <Card.Text>You can add customized product, edit the existing product, delete the products which you dont want,customize the columns which you would like to see,View complete details of the particular product and also can see the line Chart for most viewed products</Card.Text>
                            </Card.Body>
                        </div>

                        </>  
    )

}

export default About;