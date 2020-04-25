export function fetchComments(){
    return dispatch => {
        dispatch({ type: 'START_LOADING_COMMENTS' })
            fetch("http://localhost:3000/comments")
            .then(response => response.json())
            .then(json => {
                json.data.forEach(element => {
                    dispatch({
                        type: "ADD_COMMENT", 
                        comment: {id: element.id,  ...element.attributes}
                    })
                })
            });
        }
}