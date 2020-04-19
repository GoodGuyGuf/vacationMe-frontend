import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {

    const logout = event => {
        localStorage.removeItem("loggedIn")
    }

    return (
        <div id="NavBar">
        <h1 id="logo"><Link to="/home">vacationMe</Link></h1>
        <h1 id="profile"><Link to="/profile">Profile</Link></h1>
        <h3 id="logout"><Link to="/" onClick={logout}>Logout</Link></h3>
        {/* <h1><Link to="/destinations">Destinations</Link></h1> */}
        </div>
    )
}

export default NavBar