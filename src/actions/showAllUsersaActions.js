 
import { 
    GET_SHOW_ALL_USERS_REQUEST, GET_SHOW_ALL_USERS_SUCCESS, GET_SHOW_ALL_USERS_FAILURE 
    } from "../constants/userConstants"; 

 
export const toggleUserView = (currentView) => (dispatch, getState) => {  
     
    try {
        dispatch({ type: GET_SHOW_ALL_USERS_REQUEST }); 
        //   
        dispatch({
            type: GET_SHOW_ALL_USERS_SUCCESS,
            payload: currentView
        })
    

    } catch (error) { 
        dispatch({
            type: GET_SHOW_ALL_USERS_FAILURE,
            payload: error
        })
    } 
}

 