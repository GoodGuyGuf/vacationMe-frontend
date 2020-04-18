import React from 'react';
import NavBar from '../Home/NavBar';

export default class PostEdit extends React.Component{

    state = {
        title: "",
        location: "",
        caption: "",
        user_id: ""
    }

    render(){
        return (
        <div>
        <NavBar/>
            <form onSubmit={this.handleOnSubmit}>
                <h3>Edit post: </h3>
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