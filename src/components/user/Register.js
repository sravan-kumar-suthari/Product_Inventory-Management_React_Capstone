import React,{ useRef,useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { Button ,Card} from 'react-bootstrap';
import {addUser} from "../redux/actions/userActions"
import {connect} from "react-redux";
import { withRouter,Prompt } from "react-router";

const phoneNumber=/^\d{10}$/;

const validationSchema = Yup.object({
  email : Yup.string().email().required("Email Required"),
  password : Yup.string().min(8).max(16).required("Password Required"),
  passwordConfirmation : Yup.string().oneOf(
      [Yup.ref("password"),null],
      "Passwords do not match"
    ),
  firstName : Yup.string().required("First Name Required"),
  lastName : Yup.string().required("Last Name Required"),
  location : Yup.string().required("Location Required"),
  mobile : Yup.string().matches(phoneNumber,"enter a valid phone number").required("phone number is required")
 
});

 const Register =(props)=> {
   
    const passRef = useRef('password')
    const errorStyle = {color : "red","fontWeight":"bold"}
    const [isSubmitted,setIsSubmitted]=useState(false);
    
    
 
  return (
      <div style={{paddingTop : "10px"}}>
      <Card >
      <Formik
        
        initialValues={{ email:"",password:"",firstName:"",lastName:"",location:"",mobile:"" }}
        validationSchema={validationSchema}
        validateOnChange={false}
        validateOnBlur={false}

        onSubmit={(value,formikbag) => {
       
        setIsSubmitted(true);
       // console.log(props);
        let user = {};
       
         setTimeout(()=>
         {
      
          user.email = value.email;
          user.password = value.password;
          user.firstName = value.firstName;
          user.lastName=value.lastName;
          user.location=value.location;
          user.mobile=value.mobile;
     
         let existingUser=props.users.filter(olduser=> olduser.email===user.email)
         
         if(existingUser.length===0){
          props.addUser(user)
          alert('Registration success')
          
         }
         else {
             alert(`${user.email} is already registered`)
         }
         }

         

          ,1000);
        
        }}
      >
        {({ handleSubmit, handleChange, values, errors }) => (
          <form onSubmit={handleSubmit} style={{"margin": "0 auto","width":"30%","paddingBottom":"30px","minHeight":"100vh"}}>

           <Prompt
              when={
                
                (values.email !==""||
                values.password !=="" ||
                values.firstName !=="" ||
                values.lastName !=="" ||
                values.location !==""||
                values.mobile !=="") &&  ( isSubmitted===false)
              }
              message="You have unsaved changes, are you sure you want to leave?"
            /> 


            <h4 style={{"display":"flex","justifyContent":"center","fontWeight":"bold"}}>User Registration</h4>
           
           <div className="form-group" 
              >
           <label htmlFor="email" >Email</label>
            <input
              type="text"
              className="form-control"
              id="email"
              onChange={handleChange}
              value={values.email}
              name="email"
            />

<span style={errorStyle}>{errors.email}</span>
           </div>

            <div className="form-group">
           <label htmlFor="password" >Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              onChange={handleChange}
              value={values.password}
              name="password"
              ref={passRef}
            />
           </div>
            <span style={errorStyle}>{errors.password}</span>

            <div className="form-group">
           <label htmlFor="passwordConfirmation" >Confirm Password</label>
            <input
              type="password"
              className="form-control"
              id="passwordConfirmation"
              onChange={handleChange}
              value={values.passwordConfirmation}
              name="passwordConfirmation"
            />
           </div>
            <span style={errorStyle}>{errors.passwordConfirmation}</span>

            <div className="form-group">
           <label htmlFor="firstName" >First Name</label>
            <input
              type="text"
              className="form-control"
              id="firstName"
              onChange={handleChange}
              value={values.firstName}
              name="firstName"
            />
           </div>
            <span style={errorStyle}>{errors.firstName}</span>

            <div className="form-group">
           <label htmlFor="lastName" >Last Name</label>
            <input
              type="text"
              className="form-control"
              id="lastName"
              onChange={handleChange}
              value={values.lastName}
              name="lastName"
            />
           </div>
            <span style={errorStyle}>{errors.lastName}</span>

            <div className="form-group">
           <label htmlFor="location" >Location</label>
            <input
              type="text"
              className="form-control"
              id="location"
              onChange={handleChange}
              value={values.location}
              name="location"
            />
           </div>
            <span style={errorStyle}>{errors.location}</span>

            <div className="form-group">
           <label htmlFor="mobile" >Mobile No.</label>
            <input
              type="text"
              className="form-control"
              id="mobile"
              onChange={handleChange}
              value={values.mobile}
              name="mobile"
            />
           </div>
            <span style={errorStyle}>{errors.mobile}</span>
            <br/>
            <div style={{"display":"flex","justifyContent":"center"}}><Button type="submit" style={{"fontWeight":"bold"}}>Register</Button></div>
          </form>
        )}
      </Formik>
      </Card>
      </div>
    );
}

const mapStateToProps=state=>{
    return {
        users : state.userReducer
    }
}

export default connect(mapStateToProps,{addUser})(withRouter(Register));