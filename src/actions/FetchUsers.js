export function fetchUsers(){
    return dispatch => {
        dispatch({ type: 'START_LOADING_USERS' })
            fetch("http://localhost:3000/users")
            .then(response => response.json())
            .then(json => {
                json.data.forEach(element => {
                    dispatch({
                        type: "ADD_USER", 
                        user: {
                            id: element.id, 
                            name: element.attributes.name,
                            username: element.attributes.username,
                        }
                    })
                })
            });
        }
}