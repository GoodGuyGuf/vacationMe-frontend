import { combineReducers } from 'redux';
import postReducer  from './PostReducer';
import userReducer  from './UserReducer';
import likeReducer from './LikeReducer';
import commentReducer from './CommentReducer';

const rootReducer = combineReducers({
    users: userReducer,
    posts: postReducer,
    likes: likeReducer,
    comments: commentReducer
})

export default rootReducer;