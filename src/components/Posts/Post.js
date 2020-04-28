import React, { Component } from 'react';
import moment from 'moment';
import Comment from '../Comment/Comment';
import CommentForm from '../Comment/CommentForm';
import Like from '../Like/LikeButton'
import { Link } from 'react-router-dom';

/* Post component is a presentational component. It only renders one post with the posts attributes. I used moment.js
to easily format the createdAt & updatedAt timestamps of a post instance. Then the post houses all of the likes, the Like component
(which is just a button creating new like instances for the rails API), a Comment Component which renders all of the comments and below
the comments is the Commentform that allows any user to comment on the post.*/

export default class Post extends Component {
    render(){
        return (
            <>
                <h2>@{this.props.user}</h2>
                <h3>Location: {this.props.post.location}</h3>
                <h4>Title: <Link key={this.props.index} to={`/posts/${this.props.post.id}`}>{this.props.post.title}</Link></h4>
                <h3>Description: </h3>
                <h4>{this.props.post.caption}</h4>
                <span>Created at: {moment(this.props.post.createdAt).format('MMMM Do YYYY, h:mm:ss a')}</span><br/>
                <span>Updated at: {moment(this.props.post.updatedAt).format('MMMM Do YYYY, h:mm:ss a')}</span>
                
                <h6>Likes: {this.props.post.likesCount}</h6>
                <Like />
                <h5>Comments:</h5>
                <Comment post={this.props.post} comments={this.props.comments}/>
                <CommentForm currentUser={this.props.currentUser} postId={this.props.post.id} createComment={this.props.createComment}/>
            </>
        )
    }
}