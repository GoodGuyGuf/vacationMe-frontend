import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Post extends React.Component{

    findUser = searchedUser => {
        const user = this.props.users.find(user => user.id == searchedUser)
        if (user){
            return user.username
        } else {
            return null
        }
    }

    render(){
        return (
        <div id="posts">
            {this.props.posts.map((post, index) => { 
                return (<div key={index} id={'post_' + index}>
                <h2>@{this.findUser(post.userId)}</h2>
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

export default connect(state => ({posts: state.posts, users: state.users}))(Post)