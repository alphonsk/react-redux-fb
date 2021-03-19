import { 
    GET_ADD_FOLLOWING_REQUEST, GET_ADD_FOLLOWING_SUCCESS, GET_ADD_FOLLOWING_FAILURE,
    GET_UNFOLLOWING_REQUEST, GET_UNFOLLOWING_SUCCESS, GET_UNFOLLOWING_FAILURE, 

} from "../constants/userConstants";

const initialState = {
    following: [],
}

export const followingReducer = (state = initialState, action) => {
    switch (action.type) {
 

        // FOLLOW USER
        case GET_ADD_FOLLOWING_REQUEST: 
            return {
                ...state,
                loading: true
            }

        case GET_ADD_FOLLOWING_SUCCESS: 
            let newFollowing = state.following
            return {
                ...state,
                loading: false,
                following: [...newFollowing, action.payload] 
            }

        case GET_ADD_FOLLOWING_FAILURE:
            return {
                ...state,
                loading: false,
                error: 'No user found'
            }


        // UN FOLLOW USER
        case GET_UNFOLLOWING_REQUEST:
            return {
                ...state,
                loading: true
            }

        case GET_UNFOLLOWING_SUCCESS: 
            // change follow
            let newUnFollow = state.following.filter((user) => user.id !== action.payload.id)
            return {
                ...state,
                loading: false,
                following: [...newUnFollow]
            }

        case GET_UNFOLLOWING_FAILURE:
            return {
                ...state,
                loading: false,
                error: 'No user found'
            }

        default:
            return state;
    }

}



