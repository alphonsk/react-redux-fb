import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'

//  
import { usersReducer   } from './reducers/usersReducer';
import { followingReducer   } from './reducers/followingReducer';
import { showAllUsersReducer } from './reducers/showAllUsersReducer';

// reducers
const reducer = combineReducers({ 
    users: usersReducer,  
    following: followingReducer,
    showAllUsers: showAllUsersReducer,
})

// initial state
let initialState = {}

// middleware
const middlware = [thunk];
const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middlware)))

export default store;