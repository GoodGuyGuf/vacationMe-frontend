import { combineReducers } from 'redux';
import postReducer  from './PostReducer';
import userReducer  from './UserReducer';

const rootReducer = combineReducers({
    users: userReducer,
    posts: postReducer
})

export default rootReducer;