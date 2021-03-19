
import {
    GET_USERS_DATA_REQUEST, GET_USERS_DATA_SUCCESS, GET_USERS_DATA_FAILURE,
    GET_FOLLOW_USER_REQUEST, GET_FOLLOW_USER_SUCCESS, GET_FOLLOW_USER_FAILURE,
    GET_UNFOLLOW_USER_REQUEST, GET_UNFOLLOW_USER_SUCCESS, GET_UNFOLLOW_USER_FAILURE,
    GET_BLOCK_USER_REQUEST, GET_BLOCK_USER_SUCCESS, GET_BLOCK_USER_FAILURE,
    
} from "../constants/userConstants";

const initialState = {
    users: [],
}

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USERS_DATA_REQUEST:
            return {
                loading: true,
                users: [],
            }

        case GET_USERS_DATA_SUCCESS:
            // add 3 fields
            const data = addIsFollowing(action.payload)
            return {
                loading: false,
                users: data,
            }

        case GET_USERS_DATA_FAILURE:
            return {
                loading: false,
                error: action.payload
            }


        // FOLLOW USER
        case GET_FOLLOW_USER_REQUEST: 
            return {
                ...state,
                loading: true
            }

        case GET_FOLLOW_USER_SUCCESS:
            // change follow
            const newUsers = state.users.map((user) => {
                if (user.id === action.payload.id) {
                    user = action.payload;
                }
                return user;
            })
            return {
                ...state,
                loading: false,
                users: [...newUsers]
            }

        case GET_FOLLOW_USER_FAILURE:
            return {
                ...state,
                loading: false,
                error: 'No user found'
            }


        // UN FOLLOW USER
        case GET_UNFOLLOW_USER_REQUEST: 
            return {
                ...state,
                loading: true
            }

        case GET_UNFOLLOW_USER_SUCCESS:
            // change follow
            const newUnFollow = state.users.map((user) => {
                if (user.id === action.payload.id) {
                    user = action.payload;
                }
                return user;
            })
            return {
                ...state,
                loading: false,
                users: [...newUnFollow]
            }

        case GET_UNFOLLOW_USER_FAILURE:
            return {
                ...state,
                loading: false,
                error: 'No user found'
            }


        // BLOCK USER 
        case GET_BLOCK_USER_REQUEST:  
            return {
                ...state,
                loading: true
            }

        case GET_BLOCK_USER_SUCCESS: 
            //    
            const newBlock = state.users.filter((user) =>  user.id !== action.payload.id)  
            return {
                ...state,
                loading: false,
                users: [...newBlock]
            }

        case GET_BLOCK_USER_FAILURE:
            return {
                ...state,
                loading: false,
                error: 'No user found'
            }

        default:
            return state;
    }

}
 

 

//add follow:false, unFollow:false, block: fileds to data method
const addIsFollowing = (data) => {
    if (data) {
        const newUsers = data.map((item) => {
            const { email, firstName, id, lastName, picture, title } = item

            return { email, firstName, id, lastName, picture, title, follow: false, block: false }
        })
        return newUsers;
    }
}