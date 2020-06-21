import React, { Component } from 'react';

export default class Comment extends Component {

    filterComments = post => {
        let comments = this.props.comments.filter(comment => comment.post_id == post.id)
        if (comments){
            return comments.map((comment, index) => {
                return (
                    <article key={index} id={"comment_" + comment.user_id}>
                        <p><em>@{comment.display_user}</em></p>
                        <p>{comment.description}</p>
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