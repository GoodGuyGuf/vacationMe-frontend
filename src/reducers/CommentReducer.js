export default function commentReducer(state = [], action){
  switch (action.type){
    case "ADD_COMMENT":
      return [...state, action.comment];
    // case "UPDATE_LIKE":
    //     const array = state.filter(object => object.id != action.post.id)
    //     return [...array, action.post]
    case "REMOVE_COMMENT":
      let idx = state.findIndex(object => object.id === action.comment.id);
      return [...state.slice(0, idx), ...state.slice(idx + 1)];
    case 'START_LOADING_COMMENTS':
      return [...state];
    default:
      return state;
  }
}