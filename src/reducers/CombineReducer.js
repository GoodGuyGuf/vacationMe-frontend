import { combineReducers } from 'redux';
import postReducer  from './PostReducer';
import userReducer  from './UserReducer';
import currentUserReducer from './CurrentUserReducer';
import likeReducer from './LikeReducer';
import commentReducer from './CommentReducer';

const rootReducer = combineReducers({
    users: userReducer,
    currentUser: currentUserReducer, // currentUser: => {object containing all of the logged in user's data.}
    posts: postReducer, 
    likes: likeReducer,
    comments: commentReducer
})

export default rootReducer;