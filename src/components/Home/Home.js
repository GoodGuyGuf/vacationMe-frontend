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
                <Post />
            </div>
        )
    }
}

export default connect(null, { createPost })(Home)