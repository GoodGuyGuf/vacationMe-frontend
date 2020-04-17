import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Home extends React.Component{

    logout = event => {
        localStorage.removeItem("loggedIn")
    }

    componentDidMount(){
        fetch("http://localhost:3000/posts")
        .then(response => response.json())
        .then(json => {
            json.data.forEach(element => {
                this.props.dispatch({
                    type: "ADD_POST", 
                    post: {
                        id: element.id,
                        location: element.attributes.location,
                        title: element.attributes.title,
                        caption: element.attributes.caption, 
                        userId: element.attributes.user_id
                    }
                })
            })
        });
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

export default connect(state => ({posts: state.posts}))(Home)