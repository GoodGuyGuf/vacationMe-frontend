import React from 'react';
import { connect } from 'react-redux';
import NavBar from '../Home/NavBar';

class PostShow extends React.Component {

    findPost = postId => {
        const post = this.props.posts[`${postId}`]
        const user = this.props.users[`${post.userId}`]
        if (post && user){
            return {title: post.title, location: post.location, caption: post.caption, user: user.username}
        } else {
            return null
        }
    }

    render(){
        return (
            <div>
            <NavBar/>
                <h1>{this.findPost(this.props.match.params.id).title}</h1>
                <h3>By: {this.findPost(this.props.match.params.id).user}</h3>
                <h5>Location: {this.findPost(this.props.match.params.id).location}</h5>
                <p>Caption: {this.findPost(this.props.match.params.id).caption}</p>
            </div>
        )
    }

}

export default connect(state => ({posts: state.posts, users: state.users}))(PostShow)