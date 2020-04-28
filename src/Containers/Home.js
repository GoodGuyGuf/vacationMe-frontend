import React from 'react';
import NavBar from '../components/NavBar/NavBar';
import PostForm from '../components/Posts/PostForm';
import PostsList from '../components/Posts/PostsList';
import { createPost, updatePost, createComment } from '../actions/Actions';
import { connect } from 'react-redux';

class Home extends React.Component{

    render(){
        return(
            <>
                <NavBar />

                <PostForm 
                    createPost={this.props.createPost} 
                    currentUser={this.props.currentUser}
                />
                
                <PostsList
                    posts={this.props.posts}
                    users={this.props.users}
                    currentUser={this.props.currentUser}
                    comments={this.props.comments}
                    createComment={this.props.createComment}
                 />
            </>
        )
    }
}

export default connect(state => ({
    posts: state.posts, 
    users: state.users, 
    comments: state.comments, 
    currentUser: state.currentUser
}), {createPost, updatePost, createComment})(Home)
