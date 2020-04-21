import React from 'react';
import Post from './Post';
import NavBar from './NavBar';
import PostForm from '../PostForm/PostForm';

export default class Home extends React.Component{

    render(){
        console.log(this.props.comments)
        return(
            <div>
                <NavBar persistor={this.props.persistor}/>
                <PostForm createPost={this.props.createPost}/>
                <Post comments={this.props.comments} likes={this.props.likes} posts={this.props.posts} users={this.props.users} findUser={this.props.findUser}/>
            </div>
        )
    }
}