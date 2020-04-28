import React from 'react';
import NavBar from '../NavBar/NavBar';
import { Link } from 'react-router-dom';

export default class PostShow extends React.Component {

    findPost = postId => {
        const post = this.props.posts.find(post => post.id == postId)
        const user = this.props.users.find(user => user.id == post.userId)
          if (post || user){
            return {post: post, user: user}
          } else {
            return {post: "none", user: "none"}
        }
      }

    render(){
        let edit;
        if (this.findPost(this.props.match.params.id).user.id === parseInt(this.props.currentUser.id)){
            edit = (<Link to={"/posts/" + this.props.match.params.id + '/edit'}>Edit Post</Link>)
        }
        return (
            <div>
            <NavBar/>
                <h1>{this.props.findPost(this.props.match.params.id).post.title}</h1>
                <h3>By: {this.props.findPost(this.props.match.params.id).user.username}</h3>
                <h5>Location: {this.props.findPost(this.props.match.params.id).post.location}</h5>
                <p>Caption: {this.props.findPost(this.props.match.params.id).post.caption}</p>
                {edit}
            </div>
        )
    }

}