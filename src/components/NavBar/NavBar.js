import React from 'react';
import { Link } from 'react-router-dom';

export default class NavBar extends React.Component {

    render(){
        return (
            <header id="logoContainer">
                <h1 id="logo">vacationMe</h1>
                <nav id="NavBarContainer">
                    <ul id="NavBar">
                        <li className="navLinks"><Link to="/" >Home</Link></li>
                        <li className="navLinks"><Link to="/profile">Profile</Link></li>
                        <li className="navLinks"><Link to="/destinations">Destinations</Link></li>
                        <li id="logout"><Link to="/login" onClick={this.props.logoutUser}>Logout</Link></li>
                    </ul>
                </nav>
            </header>
        )
    }
}