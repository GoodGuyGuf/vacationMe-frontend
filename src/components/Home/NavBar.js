import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {

    const logout = event => {
        localStorage.removeItem("loggedIn")
    }

    return (
        <div id="NavBar">
        <h1><Link to="/" >Home</Link></h1>
        <h1 id="logo">vacationMe</h1>
        <h1 id="profile"><Link to="/profile">Profile</Link></h1>
        <h1 id="logout"><Link to="/login" onClick={logout}>Logout</Link></h1>
        {/* <h1><Link to="/destinations">Destinations</Link></h1> */}
        </div>
    )
}

export default NavBar