import React from 'react';

export default class PostForm extends React.Component{

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
                // const postData = {
                //     id: json.data.id,
                //     name: json.data.attributes.name, 
                //     username: json.data.attributes.username, 
                //     email: json.data.attributes.email
                // }
            }
        })
    }

    render(){
        return (
            <div>
                <form onSubmit={this.handleOnSubmit}>
                <h3>Write a new post: </h3>
                <label for="title" >Title </label>
                    <input onChange={this.handleOnChange} type="text" name="title" value={this.state.title} /><br/>
                    <label for="location" >Location </label>
                    <input onChange={this.handleOnChange} type="text" name="location" value={this.state.location}/><br/>
                    <label for="caption" >Caption </label>
                    <textarea onChange={this.handleOnChange} type="text" name="caption" value={this.state.caption}/><br/>
                    <input type="submit" value="Post"/>
                </form>
            </div>
        )
    }
}