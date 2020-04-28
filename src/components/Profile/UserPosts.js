import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';

export default class UserPosts extends React.Component{

    renderPosts = () => {
        return this.props.findPosts(this.props.currentUser.id).map((post, index) => {
            return (
                <div key={index} id="UserPost">
                    <h4>Title: {post.title}</h4>
                    <h4>Location: {post.location}</h4>
                    <p>{post.caption}</p>
                    <h4><Link key={index} to={`/posts/${post.id}/edit`}>Edit</Link></h4>
                    <span>Created at: {moment(post.createdAt).format('MMMM Do YYYY, h:mm:ss a')}</span><br/>
                    <span>Updated at: {moment(post.updatedAt).format('MMMM Do YYYY, h:mm:ss a')}</span><br />
                    <button onClick={() => {this.props.deleter(post)}}>Delete</button>
                </div>
                    )
                })
    }

    render(){
        return(
            <div>
            {this.renderPosts()}
            </div>
        )
    }
}