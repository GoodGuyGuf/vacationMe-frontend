export function fetchPosts(){
    return dispatch => {
        dispatch({ type: 'START_LOADING_USERS_POSTS' })
            fetch("http://localhost:3000/posts")
            .then(response => response.json())
            .then(json => {
                json.data.forEach(element => {
                    dispatch({
                        type: "ADD_POST", 
                        post: {
                            id: element.id, 
                            title: element.attributes.title,
                            location: element.attributes.location,
                            caption: element.attributes.caption,
                            userId: element.attributes.user_id,
                            createdAt: element.attributes.created_at,
                            updatedAt: element.attributes.updated_at,
                            likesCount: element.attributes.likes_count,
                            images: element.attributes.images
                        }
                    })
                })
            });
        }
}