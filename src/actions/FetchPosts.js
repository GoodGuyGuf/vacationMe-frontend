export function fetchPosts(){
    return dispatch => {
        dispatch({ type: 'START_LOADING_USER_POSTS' })
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
                            userId: element.attributes.user_id
                        }
                    })
                })
            });
        }
}