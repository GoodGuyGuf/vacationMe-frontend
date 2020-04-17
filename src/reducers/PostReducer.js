export default function PostReducer(state = {posts: []}, action){
    switch (action.type){
        case "ADD_POST":
            console.log({posts: [...state.posts, action.post]});
            return {posts: [...state.posts, action.post]};
        default:
            return state;
    }
}