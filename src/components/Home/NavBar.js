import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../components/Logo/Logo'

const NavBar = () => {

    const logout = event => {
        localStorage.removeItem("loggedIn")
    }

    return (
        <div id="NavBar">
        <h2><Link to="/home"><Logo /></Link></h2>
        <h1><Link to="/profile">Profile</Link></h1>
        <h3><Link to="/" onClick={logout}>Logout</Link></h3>
        {/* <h1><Link to="/destinations">Destinations</Link></h1> */}
        </div>
    )
}

export default NavBar