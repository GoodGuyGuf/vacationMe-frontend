export default function currentUserReducer(state = {}, action){
    switch (action.type){
        case 'START_LOGGING_IN_CURRENT_USER':
            return state  
        case "LOGIN_USER":
            return {...action.user}
        case 'LOGOUT_USER':
            return {}   
        default:
            return state;
    }
}