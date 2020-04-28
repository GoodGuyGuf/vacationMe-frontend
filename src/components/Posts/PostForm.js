import React from 'react';

export default class PostForm extends React.Component{

    state = {
        title: "",
        location: "",
        caption: "",
        user_id: ""
    }

    handleOnChange = event => {
        this.setState({
            [event.target.name]: event.target.value,
            user_id: parseInt(this.props.currentUser.id)
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
                const postData = {
                    id: json.data.id,
                    title: json.data.attributes.title, 
                    location: json.data.attributes.location, 
                    caption: json.data.attributes.caption,
                    userId: json.data.attributes.user_id,
                    createdAt: json.data.attributes.created_at,
                    updatedAt: json.data.attributes.updated_at,
                    likesCount: json.data.attributes.likes_count
                }
                console.log(`This is post form userId: ${postData.userId}`)
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