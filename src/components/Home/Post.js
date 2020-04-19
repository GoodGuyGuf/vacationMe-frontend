import React from 'react';
import { Link } from 'react-router-dom';

export default class Post extends React.Component{

    render(){
        return (
        <div id="posts">
            {this.props.posts.reverse().map((post, index) => { 
                return (<div key={index} id={'post_' + index}>
                <h2>@{this.props.findUser(post.userId)}</h2>
                    <h3>Location: {post.location}</h3>
                    <h5><Link key={index} to={`/posts/${post.id}`}>Title: {post.title}</Link></h5>
                    <h3>Description: </h3>
                    <h4>{post.caption}</h4>
                    <span>Created at: {post.createdAt}</span><br/>
                    <span>Updated at: {post.updatedAt}</span>
                </div>) 
                })}
        </div>
        )
    }
}