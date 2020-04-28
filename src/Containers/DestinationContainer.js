import React, { Component } from 'react';
import { connect } from 'react-redux';
import DestinationForm from '../Destinations/DestinationForm';
import NavBar from '../components/NavBar/NavBar';
import {createComment} from '../actions/Actions'

class DestinationContainer extends Component{
    
    render(){
        return(
            <div>
                <NavBar/>
                <DestinationForm 
                posts={this.props.posts}
                users={this.props.users}
                comments={this.props.comments}
                currentUser={this.props.currentUser}
                createComment={this.props.createComment}
                 />
            </div>
        )
    }
}

export default connect(state => ({
    posts: state.posts, 
    users: state.users, 
    comments: state.comments, 
    currentUser: state.currentUser
}), {createComment})(DestinationContainer)