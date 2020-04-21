import React from 'react';
import Post from './Post';
import NavBar from './NavBar';
import PostForm from '../PostForm/PostForm';

export default class Home extends React.Component{

    render(){
        return(
            <div>
                <NavBar />
                <PostForm createPost={this.props.createPost}/>
                <Post currentUser={this.props.currentUser} createComment= {this.props.createComment} comments={this.props.comments} likes={this.props.likes} posts={this.props.posts} users={this.props.users} findUser={this.props.findUser}/>
            </div>
        )
    }
}