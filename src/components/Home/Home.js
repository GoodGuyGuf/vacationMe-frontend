import React from 'react';
import { Link } from 'react-router-dom';

export default class Home extends React.Component{

    logout = event => {
        localStorage.removeItem("loggedIn")
    }

    render(){
        return(
            <div>
                <h1><Link to="/home">vacationMe</Link></h1>
                <h1><Link to="/profile">Profile</Link></h1>
                <h3><Link to="/" onClick={this.logout}>Logout</Link></h3>
                {/* <h1><Link to="/destinations">Destinations</Link></h1> */}
            </div>
        )
    }
}