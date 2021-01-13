import React,{useState,Suspense} from "react";
import NavigationBar from "./components/NavigationBar"
import AllProductsPage from "./components/products/AllProductsPage"
import AddProduct from "./components/products/AddProduct"
import EditProduct from "./components/products/EditProductForm"
//import ViewProductDetail from "./components/products/ViewProductDetail"
//import MostViewedProducts from "./components/products/MostViewedProducts"
import Register from "./components/user/Register"
//import Profile from "./components/user/Profile"

import About from "./components/About/About"
import {Switch,Route,Redirect, withRouter} from "react-router-dom"
import {connect} from "react-redux";
import { Container } from "react-bootstrap";

const MostViewedProducts=React.lazy(()=>import("./components/products/MostViewedProducts"))
const Profile=React.lazy(()=>import("./components/user/Profile"))
const ViewProductDetail=React.lazy(()=>import("./components/products/ViewProductDetail"))



export const authContext=React.createContext();

function App(props) {

  //console.log(props);
  const [modalShow, setModalShow] = React.useState(false);
  const handleClose     = () => {
    setModalShow(false);
    props.history.push("/");
   
  }
  const handleShow      = () => {setModalShow(true)}

  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("loggedIn")!==null? JSON.parse(localStorage.getItem("loggedIn")) :false);
  const loginhandler = () => {setIsLoggedIn(JSON.parse(localStorage.getItem("loggedIn")))}
  const logouthandler=()=>{
    localStorage.setItem("loggedIn",false);
 setIsLoggedIn(JSON.parse(localStorage.getItem("loggedIn")));
  localStorage.clear();
}

  const loggedInUser = JSON.parse(localStorage.getItem("user"));



  return (
   
    <Container>
      <authContext.Provider value={{isLoggedIn : isLoggedIn,  handleShow : handleShow}}>
<NavigationBar  isLoggedIn={isLoggedIn} loginhandler={loginhandler} loggedInUser={loggedInUser} logouthandler={logouthandler} handleShow={handleShow} modalShow={modalShow} handleClose={handleClose}/>
<Switch>
  {/* <Route  path="/"  exact component={()=><AllProductsPage productsList={props.productsList}/>}/> */}
   {/* <Route path="/login" component={()=><LoginModal show={modalShow}
        onHide={handleClose} loginHandler={loginHandler} />}/>  */}
  <Route path="/" exact component={AllProductsPage}/>
  <Route  path="/about" render={About}/>
  <Route path="/addproduct" component={()=>isLoggedIn ? <AddProduct />  : <Redirect to="/" /> } />
  <Route path="/editproduct/:id" component={()=>isLoggedIn ? <EditProduct /> : <Redirect to="/"/>} />
 
  <Route path="/mostViewedProductChart" render={()=> <Suspense fallback={ <div>Loading...</div>}> <MostViewedProducts/> 
    </Suspense>} />
  <Route path="/register" component={Register}/>
  <Route path="/profile" render={()=><Suspense fallback={ <div>Loading...</div>}> <Profile/> 
    </Suspense>}/>
  <Route path="/productdetails/:productId" render={()=><Suspense fallback={ <div>Loading...</div>}> <ViewProductDetail/> 
    </Suspense>} />
  <Route component={() => <h1 style={{"display":"flex","justifyContent":"center", "padding" :"100px"}}>Page Not Found</h1> }/>
 
</Switch>
</authContext.Provider>
</Container> 
  
  );
}

const mapStateToProps=(state)=>{
return {
  productsList:state.productReducer
}
}
export default connect(mapStateToProps)(withRouter(App));
