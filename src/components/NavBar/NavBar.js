import React from 'react';
import { Link } from 'react-router-dom';

export default class NavBar extends React.Component {

    render(){
        return (
            <header>
                <nav id="NavBar" role="navigation" aria-label="site feature links">
                    <h1 id="homeLink"><Link to="/" >Home</Link></h1>
                    <h1 id="logo">vacationMe</h1>
                    <h1 id="destinationFilter"><Link to="/destinations">Destinations</Link></h1>
                    <h1 id="profile"><Link to="/profile">Profile</Link></h1>
                    <h1 id="logout"><Link to="/login" onClick={this.props.logoutUser}>Logout</Link></h1>
                </nav>
            </header>
        )
    }
}