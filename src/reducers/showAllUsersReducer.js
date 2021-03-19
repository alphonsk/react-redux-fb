
import { 
    GET_SHOW_ALL_USERS_REQUEST, GET_SHOW_ALL_USERS_SUCCESS, GET_SHOW_ALL_USERS_FAILURE, 
    
} from "../constants/userConstants";

const initialState = {
    showAllUsers: true,
}

export const showAllUsersReducer = (state = initialState, action) => {
    switch (action.type) {
    
        // FOLLOW USER
        case GET_SHOW_ALL_USERS_REQUEST: 
            return {
                ...state,
                loading: true
            }

        case GET_SHOW_ALL_USERS_SUCCESS: 
        let newShowAllUsers = action.payload;
            return {
                ...state,
                loading: false,
                showAllUsers: !newShowAllUsers
            }

        case GET_SHOW_ALL_USERS_FAILURE:
            return {
                ...state,
                loading: false,
                error: 'Try again'
            } 
        default:
            return state;
    }

}
 

 
 