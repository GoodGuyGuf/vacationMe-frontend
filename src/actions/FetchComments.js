export function fetchComments(){
    return dispatch => {
        dispatch({ type: 'START_LOADING_COMMENTS' })
            fetch("http://localhost:3000/comments")
            .then(response => response.json())
            .then(json => {
                json.data.forEach(element => {
                    dispatch({
                        type: "ADD_COMMENT", 
                        comment: {
                            id: element.id, 
                            description: element.attributes.description,
                            userId: element.attributes.user_id,
                            postId: element.attributes.post_id,
                            createdAt: element.attributes.created_at,
                            updatedAt: element.attributes.updated_at,
                            user: element.attributes.display_user
                        }
                    })
                })
            });
        }
}