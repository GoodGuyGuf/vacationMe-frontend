import React from 'react';
import NavBar from '../Home/NavBar';
import { Link } from 'react-router-dom';

export default class PostShow extends React.Component {

    render(){
        let edit;
        if (this.props.findPost(this.props.match.params.id).user.id === this.props.currentUser().id){
            edit = (<Link to={"/posts/" + this.props.match.params.id + '/edit'}>Edit Post</Link>)
        }
        return (
            <div>
            <NavBar/>
                <h1>{this.props.findPost(this.props.match.params.id).post.title}</h1>
                <h3>By: {this.props.findPost(this.props.match.params.id).user.username}</h3>
                <h5>Location: {this.props.findPost(this.props.match.params.id).post.location}</h5>
                <p>Caption: {this.props.findPost(this.props.match.params.id).post.caption}</p>
                {edit}
            </div>
        )
    }

}