import {ADD_USER_SUCCESS, LOAD_USERS_SUCCESS} from "../actions/actionTypes"
import {initialState} from "./initialState"


const userReducer =(prevState=initialState.users,action)=>{
//console.log(action);
switch(action.type){

    case  LOAD_USERS_SUCCESS :
        return [...action.users];

    
    case ADD_USER_SUCCESS:
        return [
            ...prevState,
            action.user
        ]

    default : return prevState;
}

}

export default userReducer;