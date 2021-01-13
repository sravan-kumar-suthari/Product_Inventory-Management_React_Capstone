import React from "react";
import { Button, Modal,Form} from "react-bootstrap";
import {Formik} from "formik";
import * as Yup from "yup";
import { withRouter } from 'react-router'
import {connect} from "react-redux";



const LoginModal=props=>{
  //console.log(props.users);
    const initialValues={
        email : "",
        password : ""
    }
    const validationSchema=Yup.object({
        email : Yup.string().email('Invalid email Format').required("email required"),
        password : Yup.string().required("password required")
    })

    const onSubmit=(values)=>{
       // console.log(values);
        
      const existingUser=props.users.filter(oldUser => (oldUser.email===values.email) && (oldUser.password===values.password))
    
    //  console.log(existingUser);

      if(existingUser.length!== 0){
        localStorage.setItem("user",JSON.stringify(existingUser))
        localStorage.setItem("loggedIn",true)
        props.loginhandler();
        props.onHide();
        props.history.push('/')
      }
      else {
        alert("Invalid Credentails or Not Registered ");
      }


    }

    return(
      <Modal
        show={props.show}
        onHide={props.onHide}
       
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Login Form 
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit} validateOnChange={false} validateOnBlur={false}>
            {
                formik=>(
                   
                    <Form onSubmit={formik.handleSubmit}>
  <Form.Group controlId="formBasicEmail" >
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" onChange={formik.handleChange} value={formik.values.email}  name="email" />
     <span style={{"color" : "red"}}>{formik.errors.email}</span>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" onChange={formik.handleChange} value={formik.values.password} name="password"  />
    <span style={{"color" : "red"}}>{formik.errors.password}</span>
  </Form.Group>
 
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
                )
}  
 </Formik>
          
 </Modal.Body>
                  </Modal>
             
       
    )

}

const mapStateToProps=(state)=>{
  return{
  users : state.userReducer
}
}
export default connect(mapStateToProps)(withRouter(LoginModal));
