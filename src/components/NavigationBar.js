import React from "react";
import {Navbar,Nav,Button} from "react-bootstrap";
import {NavLink,Link} from "react-router-dom";
import LoginModal from "./user/LoginModal";

const NavigationBar=(props)=>{

    const navLinksStyle={ color: "white","fontWeight": "bold","padding":"0px 8px 0px 8px"  }
    return(
       <div>
           <Navbar  expand="lg" style={{"backgroundColor" : "#03506f"}} variant="dark">
  <Navbar.Brand >
  <Link to="/" style={{"color" : "white"}}  >
      Product Inventory 
            </Link>

  </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <NavLink to="/mostViewedProductChart"  style={navLinksStyle} activeStyle={{"color" : "red"}} > 
        Most Viewed Products  
    </NavLink> 
    </Nav>
    <Nav className="ml-auto">
    <NavLink to="/" exact style={navLinksStyle} activeStyle={{ "color": "red"}} >
                Home
              </NavLink>
            
              <NavLink to="/about"  style={navLinksStyle} activeStyle={{ "color": "red"}} >
                About
              </NavLink>

             {!props.isLoggedIn &&  <NavLink to="/register"  style={navLinksStyle} activeStyle={{ "color": "red"}} > 
                SignUp
              </NavLink> }

              {props.isLoggedIn ? (
            <div>
              <NavLink to="/profile"   style={navLinksStyle}>
               {props.loggedInUser!==null ? (props.loggedInUser.map(user=>user.firstName +" " + user.lastName)) : false }
              </NavLink>

              <Button variant="danger" onClick={props.logouthandler}  style={navLinksStyle}>
              Sign Out
              </Button >
            </div>
          ) : (
              <Button variant="primary" onClick={props.handleShow}  style={navLinksStyle} >
              Sign In
            </Button>
           
          )}

    <LoginModal show={props.modalShow}
        onHide={props.handleClose} loginhandler={props.loginhandler} />  

          
      </Nav>    
  </Navbar.Collapse>
</Navbar>
       </div>
    )
}
export default NavigationBar;