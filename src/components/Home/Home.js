import React from 'react';
import { connect } from 'react-redux';
import Post from './Post';
import { fetchPosts } from '../../actions/FetchPosts';
import { fetchUsers } from '../../actions/FetchUsers';
import { removePosts } from '../../actions/RemovePosts';
import { removeUsers } from '../../actions/RemoveUsers';
import NavBar from './NavBar';
import { Link } from 'react-router-dom';
import PostForm from '../PostForm/PostForm';

class Home extends React.Component{

    componentDidMount(){
        this.props.fetchPosts()
        this.props.fetchUsers()
    }

    componentWillUnmount(){
        this.props.removePosts()
        this.props.removeUsers()
    }

    render(){
        return(
            <div>
                <NavBar/>
                <PostForm/>
                <Post/>
            </div>
        )
    }
}

export default connect(null, { fetchPosts, fetchUsers, removePosts, removeUsers })(Home)