import React from 'react';
import NavBar from '../Home/NavBar';
import UserPosts from './UserPosts';
// this component is rendering more than once after each link click. Needs fix.
export default class Profile extends React.Component{
    
    render(){
        const currentUser = JSON.parse(localStorage.getItem("loggedIn")).userData
        return(
            <div>
                <NavBar/>
                <h1 id="userInfo">{currentUser.username}</h1>
                <p id="userInfo">{currentUser.name}</p>
                <p id="userInfo">{currentUser.email}</p>
                <h5 id="userposts">Posts:</h5>
                <UserPosts/>
            </div>
        )
    }
}