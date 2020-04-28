import React from 'react';
import { compose } from 'redux';
import { withRouter, Link } from 'react-router-dom';
import { loginUser } from '../../actions/Actions';
import { connect } from 'react-redux';

class Signup extends React.Component{

    state = {
        name: "",
        username: "",
        email: "",
        password: ""
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

        fetch("http://localhost:3000/users", user)
        .then(response => response.json())
        .then(json => {
            if (json.message === "Incorrect fields"){
                alert("Incorrect Login")
            } else {
                const userData = {
                    id: json.data.id,
                    name: json.data.attributes.name, 
                    username: json.data.attributes.username, 
                    email: json.data.attributes.email,
                    createdAt: json.data.attributes.created_at,
                    updatedAt: json.data.attributes.updated_at
                }
                this.props.loginUser(userData)
                this.props.history.push("/");
            }
        })
    }

    render(){
        return (
        <div>
        <h1 id="pre-logo">vacationMe</h1>
            <form id="signup" onSubmit={this.handleOnSubmit}>
                <input id="loginInput" onChange={this.handleOnChange} type="text" name="name" value={this.state.name} placeholder="Name"/>
                <br />
                <input id="loginInput" onChange={this.handleOnChange} type="text" name="username" value={this.state.username} placeholder="Username"/>
                <br />
                <input id="loginInput" onChange={this.handleOnChange} type="email" name="email" value={this.state.email} placeholder="Email"/>
                <br />
                <input id="loginInput" onChange={this.handleOnChange} type="password" name="password" value={this.state.password} placeholder="Password"/>
                <br />
                <input id="loginSubmit" type="submit" value="Sign Up"/>
                <h1>Already have an account? <Link to="/login">Log In</Link></h1>
            </form>
        </div>
        )
    }

}

export default compose(withRouter, connect(null, { loginUser }))(Signup)