import React, { Component } from 'react';

export default class Comment extends Component {

    filterComments = post => {
        let comments = this.props.comments.filter(comment => comment.post_id == post.id)
        if (comments){
            return comments.map((comment, index) => {
                return (
                    <div key={index} id={"comment_" + comment.user_id}>
                        <h4>@{comment.display_user}</h4>
                        <p>{comment.description}</p>
                    </div>
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