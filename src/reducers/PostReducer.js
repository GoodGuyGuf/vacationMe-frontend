export default function PostReducer(state = [], action){
    switch (action.type){
        case "ADD_POST":
            return [...state, action.post];
        case "UPDATE_POST":
            const array = state.filter(object => object.id != action.post.id)
            return [...array, action.post]
        case 'START_LOADING_USERS_POSTS':
            return [...state];
        default:
            return state;
    }
}