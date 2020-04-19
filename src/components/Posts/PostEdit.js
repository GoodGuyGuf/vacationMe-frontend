import React from 'react';
import NavBar from '../Home/NavBar';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { updatePost } from '../../actions/UpdatePost.js'

class PostEdit extends React.Component{

    state = {
        id: "",
        title: "",
        location: "",
        caption: "",
        user_id: "",
        createdAt: "",
        updatedAt: ""
    }

    componentDidMount(){
        const post = this.props.posts.find(post => post.id === this.props.match.params.id)
        const currentUser = JSON.parse(localStorage.getItem("loggedIn")).userData
        this.setState({
            id: this.props.match.params.id,
            title: post.title,
            location: post.location,
            caption: post.caption,
            user_id: currentUser.id,
            createdAt: post.created_at,
            updatedAt: post.updated_at
        })
    }

    handleOnChange = event => {
        const currentUser = JSON.parse(localStorage.getItem("loggedIn")).userData
        this.setState({
            id: this.props.match.params.id,
            [event.target.name]: event.target.value,
            user_id: currentUser.id
        })
    }

    handleOnSubmit = event => {
        event.preventDefault();
        const post = {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(this.state)
        }

        fetch(`http://localhost:3000/posts/${this.state.id}`, post)
        .then(response => response.json())
        .then(json => {
            if (json.message === "Unable to save."){
                alert("Unable to save.")
            } else {
                console.log(json)
                const postData = {
                    id: json.data.id,
                    title: json.data.attributes.title, 
                    location: json.data.attributes.location, 
                    caption: json.data.attributes.caption,
                    userId: json.data.attributes.user_id,
                    createdAt: json.data.attributes.created_at,
                    updatedAt: json.data.attributes.updated_at
                }
                this.props.updatePost(postData)
                this.props.history.push("/profile")
            }
        })
    }

    render(){
        return (
        <div>
        <NavBar/>
            <form id="editPost" onSubmit={this.handleOnSubmit}>
                <h3>Edit post: </h3>
                    <input onChange={this.handleOnChange} type="text" name="title" value={this.state.title} placeholder="Title"/><br/>
                    <input onChange={this.handleOnChange} type="text" name="location" value={this.state.location} placeholder="Location"/><br/>
                    <textarea onChange={this.handleOnChange} type="text" name="caption" value={this.state.caption} placeholder="Caption"/><br/>
                    <input type="submit" value="Post"/>
                </form>
        </div>
        )
    }
}

export default compose(withRouter, connect(state => ({posts: state.posts}), {updatePost}))(PostEdit)