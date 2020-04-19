import React from 'react';
import Post from './Post';
import NavBar from './NavBar';
import PostForm from '../PostForm/PostForm';

export default class Home extends React.Component{

    render(){
        return(
            <div>
                <NavBar persistor={this.props.persistor}/>
                <PostForm createPost={this.props.createPost}/>
                <Post posts={this.props.posts} users={this.props.users} findUser={this.props.findUser}/>
            </div>
        )
    }
}