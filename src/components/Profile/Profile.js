import React from 'react';
import NavBar from '../Home/NavBar';

export default class Profile extends React.Component{
    
    render(){
        const currentUser = JSON.parse(localStorage.getItem("loggedIn")).userData
        return(
            <div>
                <NavBar/>
                <h1>{currentUser.username}</h1>
                <p>{currentUser.name}</p>
                <p>{currentUser.email}</p>
            </div>
        )
    }
}