import React from 'react';
import NavBar from '../Home/NavBar';
import UserPosts from './UserPosts';
import { fetchPosts } from '../../actions/FetchPosts';
import { fetchUsers } from '../../actions/FetchUsers';
import { removePosts } from '../../actions/RemovePosts';
import { removeUsers } from '../../actions/RemoveUsers';
import { connect } from 'react-redux';
// this component is rendering more than once after each link click. Needs fix.
class Profile extends React.Component{

    componentDidMount(){
        this.props.fetchPosts()
        this.props.fetchUsers()
    }

    componentWillUnmount(){
        this.props.removePosts()
        this.props.removeUsers()
    }
    
    render(){
        const currentUser = JSON.parse(localStorage.getItem("loggedIn")).userData
        return(
            <div>
                <NavBar/>
                <h1 id="userInfo">{currentUser.username}</h1>
                <p id="userInfo">{currentUser.name}</p>
                <p id="userInfo">{currentUser.email}</p>
                <h5 id="userposts">Posts:</h5>
                <UserPosts posts={this.props.posts}/>
            </div>
        )
    }
}

export default connect(state => ({posts: state.posts}), {fetchPosts, fetchUsers, removePosts, removeUsers})(Profile)