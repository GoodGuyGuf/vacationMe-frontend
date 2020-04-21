import React from 'react';
import { Link } from 'react-router-dom';

export default class Post extends React.Component{

    renderComments = post => {
        let comments = this.props.comments.filter(comment => comment.postId == post.id)
        if (comments){
            return comments.map(comment => <div><p>{comment.description}</p></div>)
        }
    }

    render(){
        console.log(this.props.comments)
        return (
        <div id="posts">
            <div id="post-container">
                {this.props.posts.reverse().map((post, index) => { 
                    return (<div key={index} id={'post_' + index}>
                    <h2>@{this.props.findUser(post.userId)}</h2>
                        <h3>Location: {post.location}</h3>
                        <h5><Link key={index} to={`/posts/${post.id}`}>Title: {post.title}</Link></h5>
                        <h3>Description: </h3>
                        <h4>{post.caption}</h4>
                        <span>Created at: {post.createdAt}</span><br/>
                        <span>Updated at: {post.updatedAt}</span>
                        <h6>Likes: {post.likesCount}</h6>
                        <h5>Comments:</h5>
                        {this.renderComments(post)}
                    </div>) 
                })}
            </div>
        </div>
        )
    }
}