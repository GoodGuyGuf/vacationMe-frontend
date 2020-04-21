export default function PostReducer(state = [], action){
    switch (action.type){
        case "ADD_POST":
            return [...state, action.post];
        case "UPDATE_POST":
            const array = state.filter(object => object.id != action.post.id)
            return [...array, action.post]
        // case "ADD_LIKE":
        //     const posts = state.filter(object => object.id != action.post.id)
        //     return [...posts, {
        //         id: action.post.id, 
        //         title: action.post.title,
        //         location: action.post.location,
        //         caption: action.post.caption,
        //         userId: action.post.user_id,
        //         createdAt: action.post.created_at,
        //         updatedAt: action.post.updated_at,
        //         likesCount: action.post.likes_count + 1
        //     }]
        // case "REMOVE_LIKE":
        //     const postArray = state.filter((post, id) => id != action.post.id)
        //     return [...postArray, {
        //         id: action.post.id, 
        //         title: action.post.title,
        //         location: action.post.location,
        //         caption: action.post.caption,
        //         userId: action.post.user_id,
        //         createdAt: action.post.created_at,
        //         updatedAt: action.post.updated_at,
        //         likesCount: action.post.likes_count - 1
        //     }
        // ]
        case "DELETE_POST":
            let idx = state.findIndex(object => object.id === action.post.id);
            return [...state.slice(0, idx), ...state.slice(idx + 1)];
        case 'START_LOADING_USERS_POSTS':
            return [...state];
        default:
            return state;
    }
}