export default function PostReducer(state = [], action){
    switch (action.type){
        case "ADD_POST":
            return [...state, action.post];
        case 'START_LOADING_USERS_POSTS':
            return [...state];
        default:
            return state;
    }
}