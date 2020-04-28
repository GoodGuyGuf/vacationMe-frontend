import React, { Component } from 'react';

export default class CommentForm extends Component{

    state = {
        description: "",
        user_id: "",
        post_id: ""
    }

    handleOnChange = event => {
        this.setState({
            [event.target.name]: event.target.value,
            user_id: this.props.currentUser.id,
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
                this.props.createComment(json.data)
            }
        })
    }

    render(){
        return (
            <div id="CommentForm">
                <form onSubmit={this.handleOnSubmit}>
                <p>Comment: </p>
                    <textarea onChange={this.handleOnChange} id="commentform" type="text" name="description" value={this.state.description} /><br/>
                    <input id="commentsubmit" type="submit" value="Submit"/>
                </form>
            </div>
        )
    }
}