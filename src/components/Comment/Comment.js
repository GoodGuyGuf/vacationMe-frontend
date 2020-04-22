import React, { Component } from 'react';

export default class Comment extends Component {

    filterComments = post => {
        let comments = this.props.comments.filter(comment => comment.postId == post.id)
        if (comments){
            return comments.map(comment => <div id={"comment_" + comment.userId}><h4>@{comment.user}</h4><p>{comment.description}</p></div>)
        }
    }

    render(){
        return (
            <div>{this.filterComments(this.props.post)}</div>
        )
    }
}