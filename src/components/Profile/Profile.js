import React from 'react';
import { Link } from 'react-router-dom';

export default class Profile extends React.Component{

    logout = event => {
        localStorage.removeItem("loggedIn")
    }
    
    render(){
        const currentUser = JSON.parse(localStorage.getItem("loggedIn")).userData
        return(
            <div>
                <h1><Link to="/home">vacationMe</Link></h1>
                {/* <h1><Link to="/destinations">Destinations</Link></h1> */}
                <h1>{currentUser.username}</h1>
                <p>{currentUser.name}</p>
                <p>{currentUser.email}</p>
                <h3><Link to="/" onClick={this.logout}>Logout</Link></h3>
            </div>
        )
    }
}