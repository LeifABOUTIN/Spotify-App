import isLoggedInReducer from './loggedIn';
import tokenReducer from './token';
import userInfos from './userInfos';

import { combineReducers } from 'redux';


const allReducers = combineReducers({
    isLoggedInReducer,
    tokenReducer,
    userInfos,
})

export default allReducers;