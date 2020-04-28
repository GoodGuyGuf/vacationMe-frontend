export function createComment(comment){
    return {type: "ADD_COMMENT", comment}
}

export function createPost(post){
    return {type: "ADD_POST", post}
}

export function deletePost(post){
    return {type: "DELETE_POST", post}
}

export function updatePost(post){
    return {type: "UPDATE_POST", post}
}

export function loginUser(user){
    return {type: "LOGIN_USER", user}
}

export function logoutUser(){
    return {type: "LOGOUT_USER"}
}