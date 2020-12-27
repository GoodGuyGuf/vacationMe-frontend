export default function LikeReducer(state = [], action){
  switch (action.type){
    case "ADD_LIKE":
      return [...state, action.like];
    case "REMOVE_LIKE":
      let idx = state.findIndex(object => object.id === action.like.id);
      return [...state.slice(0, idx), ...state.slice(idx + 1)];
    case 'START_LOADING_LIKES':
      return [...state];
    default:
      return state;
  }
}