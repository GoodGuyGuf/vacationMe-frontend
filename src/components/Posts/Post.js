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
        let edit;
        if (this.props.post.userId == this.props.currentUser.id){
            edit = <h4><Link to={`/posts/${this.props.post.id}/edit`}>Edit Post</Link></h4>
        }
        return (
            <>
                <section id='postData'>
                    <Link key={this.props.index} to={`/posts/${this.props.post.id}`}>{this.props.post.title}</Link>
                    <p><em>@{this.props.user}</em></p>
                    <p>Location: {this.props.post.location}</p>
                    <p>Description: </p>
                    <p>{this.props.post.caption}</p>
                    <p>Created at: {moment(this.props.post.createdAt).format('MMMM Do YYYY, h:mm:ss a')}</p>
                    <p>Updated at: {moment(this.props.post.updatedAt).format('MMMM Do YYYY, h:mm:ss a')}</p>
                    {edit}
                </section>

                <section id='likes'>
                    <p>Likes: {this.props.post.likesCount}</p>
                    <Like post={this.props.post} />
                </section>

                <section id='comments'>
                    <p>Comments:</p>
                    <Comment post={this.props.post} comments={this.props.comments}/>
                </section>
                
                <CommentForm currentUser={this.props.currentUser} postId={this.props.post.id} createComment={this.props.createComment}/>
            </>
        )
    }
}