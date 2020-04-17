import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Post from './Post';
import {fetchPosts} from './FetchPosts'

class Home extends React.Component{

    logout = event => {
        localStorage.removeItem("loggedIn")
    }

    componentDidMount(){
        this.props.fetchPosts()
    }

    render(){
        return(
            <div>
                <h1><Link to="/home">vacationMe</Link></h1>
                <h1><Link to="/profile">Profile</Link></h1>
                <h3><Link to="/" onClick={this.logout}>Logout</Link></h3>
                {/* <h1><Link to="/destinations">Destinations</Link></h1> */}
                <Post/>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchPosts: () => dispatch(fetchPosts())
    }
}

export default connect(null, mapDispatchToProps)(Home)