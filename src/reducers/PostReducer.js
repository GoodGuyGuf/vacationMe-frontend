export default function PostReducer(state = {posts: [], requesting: false}, action){
    switch (action.type){
        case "ADD_POST":
            return {posts: [...state.posts, action.post]};
        case 'START_LOADING_USERS_POSTS':
            return {posts: [...state.posts], requesting: true}
        default:
            return state;
    }
}