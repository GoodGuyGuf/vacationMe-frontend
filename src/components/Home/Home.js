import React from 'react';
import NavBar from './NavBar';
import PostForm from '../Posts/PostForm';
import PostsList from '../Posts/PostsList';

export default class Home extends React.Component{

    render(){
        return(
            <div>
                <NavBar />
                <PostForm createPost={this.props.createPost}/>
                <PostsList
                // currentUser={this.props.currentUser} 
                createComment={this.props.createComment} comments={this.props.comments} likes={this.props.likes} 
                // posts={this.props.posts} users={this.props.users} 
                // findUser={this.props.findUser}

                />
            </div>
        )
    }
}

/* 
Home should be responsible for rendering the navbar component, the PostForm component and the posts component. Posts will
Then be in charge of rendering the post, the comments and the comment form.

1. NavBar is okay
2. PostForm should not have to accept props like this. Home should pass down the createPost, not App.js.
3. Posts should be responsible for sending its own props by connecting to redux in the Posts component.
4. Home should not render all posts. Once user reaches bottom of the page, they should be able to then render more posts.
*/