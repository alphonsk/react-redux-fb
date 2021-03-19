 
import {
    GET_ADD_FOLLOWING_REQUEST, GET_ADD_FOLLOWING_SUCCESS, GET_ADD_FOLLOWING_FAILURE,
    GET_UNFOLLOWING_REQUEST, GET_UNFOLLOWING_SUCCESS, GET_UNFOLLOWING_FAILURE, 
    } from "../constants/userConstants";
 
  
//
export const addFollower = (user) => (dispatch, getState) => { 
   
    try {
        dispatch({ type: GET_ADD_FOLLOWING_REQUEST });   
        //   
        dispatch({
            type: GET_ADD_FOLLOWING_SUCCESS,
            payload: user
        })
    

    } catch (error) { 
        dispatch({
            type: GET_ADD_FOLLOWING_FAILURE,
            payload: error
        })
    } 
}

 

//
export const unFollower = (user) => (dispatch, getState) => { 
    try {
        dispatch({ type: GET_UNFOLLOWING_REQUEST }); 
        //   
        dispatch({
            type: GET_UNFOLLOWING_SUCCESS,
            payload: user
        })
    

    } catch (error) { 
        dispatch({
            type: GET_UNFOLLOWING_FAILURE,
            payload: error
        })
    } 
}

 

 