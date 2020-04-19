import React from 'react';
import Post from './Post';
import NavBar from './NavBar';
import PostForm from '../PostForm/PostForm';
import { createPost } from '../../actions/CreatePost.js'
import { connect } from 'react-redux';

class Home extends React.Component{

    render(){
        return(
            <div>
                <NavBar/>
                <PostForm createPost={this.props.createPost}/>
                <Post posts={this.props.posts} users={this.props.users}/>
            </div>
        )
    }
}

export default connect(state => ({posts: state.posts, users: state.users}), { createPost })(Home)