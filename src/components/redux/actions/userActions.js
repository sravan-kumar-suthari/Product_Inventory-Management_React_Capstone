import * as types from "./actionTypes";

import axios from "axios";


export const loadUserSuccess=(users)=>{
  return{
   type :types.LOAD_USERS_SUCCESS,
   users
}
}

export const addUserSuccess=(user)=>{
    return {
        type :types.ADD_USER_SUCCESS,
        user
    }
}




export  const loadUsers=()=>{
    return dispatch=>{ 
        axios.get("http://localhost:4000/users").then(response=>{
       //     console.log(response.data);
            dispatch(loadUserSuccess(response.data))
        }).catch(error=>console.log(error))

    }
}

export const addUser=(user)=>{
    return dispatch=>{
        axios.post("http://localhost:4000/users",user).then(response=>{
            //console.log(response.data);
            dispatch(addUserSuccess(user))
        }).catch(error=>console.log(error))
    }
}