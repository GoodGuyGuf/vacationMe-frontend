export default function currentUserReducer(state = {}, action){
    switch (action.type){
        case "LOGIN_USER":
            return {...action.user}
        case 'START_LOGGING_IN_CURRENT_USER':
            return {...state};      
        default:
            return state;
    }
}