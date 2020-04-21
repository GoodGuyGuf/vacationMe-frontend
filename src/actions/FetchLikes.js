export function fetchLikes(){
    return dispatch => {
        dispatch({ type: 'START_LOADING_LIKES' })
            fetch("http://localhost:3000/likes")
            .then(response => response.json())
            .then(json => {
                json.data.forEach(element => {
                    console.log(json.data)
                    dispatch({
                        type: "ADD_LIKE", 
                        like: {
                            id: element.id, 
                            count: element.attributes.count,
                            userId: element.attributes.user_id,
                            postId: element.attributes.post_id,
                            createdAt: element.attributes.created_at,
                            updatedAt: element.attributes.updated_at
                        }
                    })
                })
            });
        }
}