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

    render(){
        return (
            <div>
                <form>
                <h3>Write a new post:</h3>
                    <input onChange={this.handleOnChange} type="text" name="title" value={this.state.title} /><br/>
                    <input onChange={this.handleOnChange} type="text" name="location" value={this.state.title}/><br/>
                    <input onChange={this.handleOnChange} type="text" name="caption" value={this.state.title}/><br/>
                    <input type="submit" value="Post"/>
                </form>
            </div>
        )
    }
}