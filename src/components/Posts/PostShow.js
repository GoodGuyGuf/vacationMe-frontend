import React from 'react';
import { connect } from 'react-redux';
import NavBar from '../Home/NavBar';

class PostShow extends React.Component {

    findPost = postId => {
        const post = this.props.posts.find(post => post.id == postId)
        const user = this.props.users.find(user => user.id == post.userId)
        if (post && user){
            return {post: post, user: user.username}
        } else {
            return "none"
        }
    }

    render(){
        return (
            <div>
            <NavBar/>
                <h1>{this.findPost(this.props.match.params.id).post.title}</h1>
                <h3>By: {this.findPost(this.props.match.params.id).user}</h3>
                <h5>Location: {this.findPost(this.props.match.params.id).post.location}</h5>
                <p>Caption: {this.findPost(this.props.match.params.id).post.caption}</p>
            </div>
        )
    }

}

export default connect(state => ({posts: state.posts, users: state.users}))(PostShow)