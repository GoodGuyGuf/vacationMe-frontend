import React, { Component } from 'react';
import moment from 'moment';
import Comment from '../Comment/Comment';
import CommentForm from '../Comment/CommentForm';
import { Link } from 'react-router-dom';

export default class Post extends Component {
    render(){
        return (
            <div key={this.props.index} id={'post_' + this.props.index}>
                <h2>@{this.props.user}</h2>
                <h3>Location: {this.props.post.location}</h3>
                <h4>Title: <Link key={this.props.index} to={`/posts/${this.props.post.id}`}>{this.props.post.title}</Link></h4>
                <h3>Description: </h3>
                <h4>{this.props.post.caption}</h4>
                <span>Created at: {moment(this.props.post.createdAt).format('MMMM Do YYYY, h:mm:ss a')}</span><br/>
                <span>Updated at: {moment(this.props.post.updatedAt).format('MMMM Do YYYY, h:mm:ss a')}</span>
                
                <h6>Likes: {this.props.post.likesCount}</h6>
                <h5>Comments:</h5>
                <Comment post={this.props.post} comments={this.props.comments}/>
                <CommentForm currentUser={this.props.currentUser} postId={this.props.post.id} createComment={this.props.createComment}/>
            </div>
        )
    }
}

// PostList -> Holds all posts in a div
// Posts -> Holds a post, a comment and a commentForm all in one.
// Post
// Comment
// CommentForm