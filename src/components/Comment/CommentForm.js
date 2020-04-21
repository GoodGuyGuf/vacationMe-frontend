import React, { Component } from 'react';

export default class CommentForm extends Component{

    state = {
        description: "",
        user_id: "",
        post_id: ""
    }

    handleOnChange = event => {
        const currentUser = JSON.parse(localStorage.getItem("loggedIn")).userData
        this.setState({
            [event.target.name]: event.target.value,
            user_id: currentUser.id,
            post_id: this.props.postId
        })
    }

    handleOnSubmit = event => {
        event.preventDefault();
        const comment = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(this.state)
        }

        fetch("http://localhost:3000/comments", comment)
        .then(response => response.json())
        .then(json => {
            if (json.message === "Unable to save."){
                alert("Unable to save.")
            } else {
                const commentData = {
                    id: json.data.id,
                    description: json.data.attributes.description, 
                    userId: json.data.attributes.user_id, 
                    PostId: json.data.attributes.post_id,
                    createdAt: json.data.attributes.created_at,
                    updatedAt: json.data.attributes.updated_at
                }
                this.props.createComment(commentData)
            }
        })
    }

    render(){
        return (
            <div>
                <form onSubmit={this.handleOnSubmit}>
                <p>Comment: </p>
                    <textarea onChange={this.handleOnChange} type="text" name="description" value={this.state.description} /><br/>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        )
    }
}