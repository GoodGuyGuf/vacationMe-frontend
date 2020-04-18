import React from 'react';
import { withRouter } from 'react-router-dom';

class Signup extends React.Component{

    state = {
        name: "",
        username: "",
        email: "",
        password: "",
        password_confirmation: ""
    }

    handleOnChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleOnSubmit = event => {
        event.preventDefault();
        const user = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(this.state)
        }

        fetch("http://localhost:3000/signup", user)
        .then(response => response.json())
        .then(json => {
            if (json.message === "No User Found."){
                alert("Incorrect Login")
            } else {
                console.log(json.data)
                const userData = {
                    id: json.data.id,
                    name: json.data.attributes.name, 
                    username: json.data.attributes.username, 
                    email: json.data.attributes.email
                }
                localStorage.setItem('loggedIn', JSON.stringify({userData}))
                this.props.history.push("/home");
            }
        })
    }

    render(){
        <div id="signupForm">
            <form onChange={this.handleOnChange}>
                <input type="text" name="name" value={this.state.name} placeholder="Name"/>
                <input type="text" name="username" value={this.state.username} placeholder="Username"/>
                <input type="email" name="email" value={this.state.email} placeholder="Email"/>
                <input type="password" name="password" value={this.state.password} placeholder="Password"/>
                <input type="password" name="password_confirmation" value={this.state.password} placeholder="Password"/>
                <input type="submit" value="Submit"/>
            </form>
        </div>
    }

}

export default withRouter(Signup);