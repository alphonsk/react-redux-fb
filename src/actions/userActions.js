import axios from 'axios'; 

import { GET_USERS_DATA_REQUEST, GET_USERS_DATA_SUCCESS, GET_USERS_DATA_FAILURE,
    GET_FOLLOW_USER_REQUEST, GET_FOLLOW_USER_SUCCESS, GET_FOLLOW_USER_FAILURE,
    GET_UNFOLLOW_USER_REQUEST, GET_UNFOLLOW_USER_SUCCESS, GET_UNFOLLOW_USER_FAILURE,
    GET_BLOCK_USER_REQUEST, GET_BLOCK_USER_SUCCESS, GET_BLOCK_USER_FAILURE,
    } from "../constants/userConstants";

const BASE_URL = 'https://dummyapi.io/data/api';
const APP_ID = '6050ce38e4af1e6674f40593'; // '{APP_ID}';

 
export const getUsers = () => async (dispatch) => {  
   
    try {
        dispatch({ type: GET_USERS_DATA_REQUEST })
        const { data } = await axios.get(`${BASE_URL}/user`, { headers: { 'app-id': APP_ID } }) 
        // const { data } = await axios.get(`${BASE_URL}/post`, { headers: { 'app-id': APP_ID } }) 

        // console.log(data);
        dispatch({
            type: GET_USERS_DATA_SUCCESS,
            payload: data.data
        })

    } catch (error) { 
        dispatch({
            type: GET_USERS_DATA_FAILURE,
            payload: error.response.status
        })
    }

    // //
    // await axios.get(`${BASE_URL}/user`, { headers: { 'app-id': APP_ID } })
    //     .then(({ data }) => {
    //         setUsers(data.data);
    //         // console.log(typeof users);
    //         console.log(data.data);
    //     })
    //     .catch(error => alert(error))
    //     .finally(() => setIsLoading(false));
}


//
export const followUser = (user) => (dispatch, getState) => { 
   
    try {
        dispatch({ type: GET_FOLLOW_USER_REQUEST }); 
        //   
        dispatch({
            type: GET_FOLLOW_USER_SUCCESS,
            payload: user
        })
    

    } catch (error) { 
        dispatch({
            type: GET_FOLLOW_USER_FAILURE,
            payload: error
        })
    } 
}

 

//
export const unFollowUser = (user) => (dispatch, getState) => { 
   
    try {
        dispatch({ type: GET_UNFOLLOW_USER_REQUEST }); 
        //   
        dispatch({
            type: GET_UNFOLLOW_USER_SUCCESS,
            payload: user
        })
    

    } catch (error) { 
        dispatch({
            type: GET_UNFOLLOW_USER_FAILURE,
            payload: error
        })
    } 
}

 

//
export const blockUser = (user) => (dispatch, getState) => { 
   
    try { 
        dispatch({ type: GET_BLOCK_USER_REQUEST }); 
        //    
        dispatch({
            type: GET_BLOCK_USER_SUCCESS,
            payload: user
        })
    

    } catch (error) { 
        dispatch({
            type: GET_BLOCK_USER_FAILURE,
            payload: error
        })
    } 
}