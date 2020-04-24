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

/*  1. Posts.js should be a container component responsible for rendering a Post component for each post
    and it should be responsible for rendering the comments component & the comment form component.
    2. Post should send down props to comment component since comment component should be a functional stateless component.
    3. Post should pass down props to commentForm for the current user, the post id and the createComment Dispatcher.
    4. Posts should be the component that defines the dynamic routes that are defined in App.js.
    5. To show most recent posts, you have to create a variable, slice state and then reverse the array so that you don't mutate state.
    6. Post.js Should have defaultProps.
*/