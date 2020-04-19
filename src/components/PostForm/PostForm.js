import React from 'react';
import { createPost } from '../../actions/CreatePost.js'
import { connect } from 'react-redux';

class PostForm extends React.Component{

    state = {
        title: "",
        location: "",
        caption: "",
        user_id: ""
    }

    handleOnChange = event => {
        const currentUser = JSON.parse(localStorage.getItem("loggedIn")).userData

        this.setState({
            [event.target.name]: event.target.value,
            user_id: currentUser.id
        })
    }

    handleOnSubmit = event => {
        event.preventDefault();
        const post = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(this.state)
        }

        fetch("http://localhost:3000/posts", post)
        .then(response => response.json())
        .then(json => {
            if (json.message === "Unable to save."){
                alert("Unable to save.")
            } else {
                console.log(json.data)
                const postData = {
                    id: json.data.id,
                    title: json.data.attributes.title, 
                    location: json.data.attributes.location, 
                    caption: json.data.attributes.caption,
                    userId: json.data.attributes.user_id
                }
                this.props.createPost(postData)
            }
        })
    }

    render(){
        return (
            <div id="PostForm">
                <form onSubmit={this.handleOnSubmit}>
                <h3>Write a new post: </h3>
                    <input onChange={this.handleOnChange} type="text" name="title" value={this.state.title} placeholder="Title" /><br/>
                    <input onChange={this.handleOnChange} type="text" name="location" value={this.state.location} placeholder="Location"/><br/>
                    <textarea onChange={this.handleOnChange} type="text" name="caption" value={this.state.caption} placeholder="Caption"/><br/>
                    <input type="submit" value="Post"/>
                </form>
            </div>
        )
    }
}

export default connect(null, {createPost})(PostForm)