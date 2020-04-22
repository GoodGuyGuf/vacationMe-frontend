import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class NavBar extends React.Component {

    logout = () => {
        localStorage.removeItem("loggedIn")
    }
    
    render(){
        return (
            <div id="NavBar">
                <h1 id="homeLink"><Link to="/" >Home</Link></h1>
                <h1 id="logo">vacationMe</h1>
                <h1 id="profile"><Link to="/profile">Profile</Link></h1>
                <h1 id="logout"><Link to="/login" onClick={this.logout}>Logout</Link></h1>
            </div>
        )
    }
}

export default connect(null)(NavBar)