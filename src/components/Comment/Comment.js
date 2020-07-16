import React, { Component } from 'react';

export default class Comment extends Component {

    delete = comment => {
        const postMarkedForDeletion = {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(comment.id)
        }

        fetch(`http://localhost:3000/comments/${comment.id}`, postMarkedForDeletion)
        .then(response => response.json())
        .then(json => {
            if (json.message === "Unable to delete"){
                alert("Unable to Delete.")
            } else {
                console.log(json)
                this.props.deleteComment(comment)
            }
        })
    }

    filterComments = post => {
        let comments = this.props.comments.filter(comment => comment.post_id == post.id)
        if (comments){
            return comments.map((comment, index) => {
                return (
                    <article key={index} id={"comment_" + comment.user_id}>
                        <p><em>@{comment.display_user}</em></p>
                        <p>{comment.description}</p>
                        {this.props.currentUser.id == comment.user_id ? <button id="deleteComment" onClick={() => {this.delete(comment)}}>Delete</button> : null}
                    </article>
                )
            })
        }
    }

    render(){
        return (
            <div id="AllComments">{this.filterComments(this.props.post)}</div>
        )
    }
}

// Comment.js should have defaultProps