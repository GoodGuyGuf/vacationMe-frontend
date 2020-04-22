import React from 'react';
import { Link } from 'react-router-dom';
import Comment from '../Comment/Comment';
import CommentForm from '../Comment/CommentForm';

export default class Post extends React.Component{

    render(){
        return (
        <div id="posts">
            <div id="post-container">
                {this.props.posts.map((post, index) => { 
                    return (<div key={index} id={'post_' + index}>
                    <h2>@{this.props.findUser(post.userId)}</h2>
                        <h3>Location: {post.location}</h3>
                        <h4>Title: <Link key={index} to={`/posts/${post.id}`}>{post.title}</Link></h4>
                        <h3>Description: </h3>
                        <h4>{post.caption}</h4>
                        <span>Created at: {post.createdAt}</span><br/>
                        <span>Updated at: {post.updatedAt}</span>
                        <h6>Likes: {post.likesCount}</h6>
                        <h5>Comments:</h5>
                        <Comment post={post} comments={this.props.comments}/>
                        <CommentForm currentUser={this.props.currentUser} postId={post.id} createComment={this.props.createComment}/>
                    </div>) 
                })}
            </div>
        </div>
        )
    }
}