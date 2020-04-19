export default function userReducer(state = [], action){
    switch (action.type){
        case "ADD_USER":
            return [...state, action.user];
        case 'START_LOADING_USERS':
            return [...state];
        case "PURGE":
            return state        
        default:
            return state;
    }
}