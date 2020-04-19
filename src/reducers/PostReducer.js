export default function PostReducer(state = [], action){
    switch (action.type){
        case "ADD_POST":
            return [...state, action.post];
        case "UPDATE_POST":
            const array = state.filter(object => object.id != action.post.id)
            return [...array, action.post]
        case "DELETE_POST":
            let idx = state.findIndex(object => object.id === action.post.id);
            return [...state.slice(0, idx), ...state.slice(idx + 1)];
        case 'START_LOADING_USERS_POSTS':
            return [...state];

        default:
            return state;
    }
}