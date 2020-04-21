import React from 'react';
import NavBar from '../Home/NavBar';
import UserPosts from './UserPosts';
// this component is rendering more than once after each link click. Needs fix.
export default class Profile extends React.Component{

    render(){
        return(
            <div>
                <NavBar persistor={this.props.persistor} />
                <h1 id="userInfo">{this.props.currentUser().username}</h1>
                <p id="userInfo">{this.props.currentUser().name}</p>
                <p id="userInfo">{this.props.currentUser().email}</p>
                <h5 id="userposts">Posts:</h5>
                <UserPosts posts={this.props.posts}/>
            </div>
        )
    }
}