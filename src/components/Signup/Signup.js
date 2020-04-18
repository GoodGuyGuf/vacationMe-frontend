import React from 'react';
import { withRouter, Link } from 'react-router-dom';

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
        return (
        <div id="signupForm">
        <h1>vacationMe</h1>
            <form onChange={this.handleOnChange}>
                <input type="text" name="name" value={this.state.name} placeholder="Name"/>
                <br />
                <input type="text" name="username" value={this.state.username} placeholder="Username"/>
                <br />
                <input type="email" name="email" value={this.state.email} placeholder="Email"/>
                <br />
                <input type="password" name="password" value={this.state.password} placeholder="Password"/>
                <br />
                <input type="password" name="password_confirmation" value={this.state.password} placeholder="Password"/>
                <br />
                <input type="submit" value="Sign Up"/>
            </form>
            <h2>Already have an account? <Link to="/">Log In</Link></h2>
        </div>
        )
    }

}

export default withRouter(Signup);