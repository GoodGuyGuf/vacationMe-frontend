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
                console.log(json.data)
                this.props.createComment({id: json.data.id, type: json.data.type, ...json.data.attributes})
            }
        })
    }

    render(){
        return (
            <section id="CommentForm">
                <form onSubmit={this.handleOnSubmit}>
                    <textarea onChange={this.handleOnChange} id="commentform" type="text" name="description" value={this.state.description} placeholder="Comment"/><br/>
                    <input id="commentsubmit" type="submit" value="Submit"/>
                </form>
            </section>
        )
    }
}