import React from 'react';
import NavBar from '../components/NavBar/NavBar';
import PostForm from '../components/Posts/PostForm';
import PostsList from '../components/Posts/PostsList';
import { createPost, updatePost, createComment, deleteComment, logoutUser } from '../actions/Actions';
import { connect } from 'react-redux';

class Home extends React.Component{

    /* Home component acts as a container for the NavBar, PostForm & PostsList components. It currently passes down props to each
    component. The child components could have connected to redux, but each one also renders within one another. Currently since this
    is the container or parent component, it feels better to pass down props from here. */
    render(){
        return(
            <>
                <NavBar logoutUser={this.props.logoutUser}/>

                <main>
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
                        deleteComment={this.props.deleteComment}
                    />
                 </main>
            </>
        )
    }
}

export default connect(state => ({
    posts: state.posts, 
    users: state.users, 
    comments: state.comments, 
    currentUser: state.currentUser
}), {createPost, updatePost, createComment, deleteComment, logoutUser})(Home)
