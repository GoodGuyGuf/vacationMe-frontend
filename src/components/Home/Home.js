import React from 'react';
import { connect } from 'react-redux';
import Post from './Post';
import { fetchPosts } from '../../actions/FetchPosts';
import { fetchUsers } from '../../actions/FetchUsers';
import NavBar from './NavBar';
import { Link } from 'react-router-dom';
import PostForm from '../PostForm/PostForm';

class Home extends React.Component{

    componentDidMount(){
        this.props.fetchPosts()
        this.props.fetchUsers()
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

export default connect(null, { fetchPosts, fetchUsers })(Home)