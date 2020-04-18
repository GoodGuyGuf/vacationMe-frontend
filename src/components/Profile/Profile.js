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
                <h1>{currentUser.username}</h1>
                <p>{currentUser.name}</p>
                <p>{currentUser.email}</p>
                <h5>Posts:</h5>
                <UserPosts/>
            </div>
        )
    }
}