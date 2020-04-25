import React from 'react';
import moment from 'moment';
import Comment from '../Comment/Comment';
import CommentForm from '../Comment/CommentForm';
import { Link } from 'react-router-dom';

const Post = ({post, index, findUser, comments}) => {
    console.log(comments)
    return (
        <div key={index} id={'post_' + index}>
        <h2>@{findUser(post.userId)}</h2>
        <h3>Location: {post.location}</h3>
        <h4>Title: <Link key={index} to={`/posts/${post.id}`}>{post.title}</Link></h4>
        <h3>Description: </h3>
        <h4>{post.caption}</h4>
        <span>Created at: {moment(post.createdAt).format('MMMM Do YYYY, h:mm:ss a')}</span><br/>
        <span>Updated at: {moment(post.updatedAt).format('MMMM Do YYYY, h:mm:ss a')}</span>
        <h6>Likes: {post.likesCount}</h6>
        <h5>Comments:</h5>
        <Comment post={post} comments={comments}/>
        {/* <CommentForm currentUser={this.props.currentUser} postId={post.id} createComment={this.props.createComment}/> */}
        </div>
    )
}

export default Post