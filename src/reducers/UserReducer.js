export default function userReducer(state = {users: [], requesting: false}, action){
    switch (action.type){
        case "ADD_USER":
            return {users: [...state.users, action.user]};
        case 'START_LOADING_USERS':
            return {users: [...state.users], requesting: true}
        default:
            return state;
    }
}