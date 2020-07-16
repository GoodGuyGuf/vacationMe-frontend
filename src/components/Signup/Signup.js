import React from 'react';
import { compose } from 'redux';
import { withRouter, Link } from 'react-router-dom';
import { signupUser } from '../../actions/Actions';
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
                console.log(`This is Signup userData.username: ${userData.username}, user.id: ${userData.id}`)
                this.props.signupUser(userData)
                this.props.history.push("/");
            }
        })
    }

    render(){
        return (
            <main>
                <header id="container">
                    <h1 id="pre-logo">vacationMe</h1>
                </header>
            
                <section>
                    <form id="signup" onSubmit={this.handleOnSubmit}>
                        <input id="loginInput" onChange={this.handleOnChange} type="text" name="name" value={this.state.name} placeholder="Name"/>
                        <br />
                        <input id="loginInput" onChange={this.handleOnChange} type="text" name="username" value={this.state.username} placeholder="Username"/>
                        <br />
                        <input id="loginInput" onChange={this.handleOnChange} type="email" name="email" value={this.state.email} placeholder="Email"/>
                        <br />
                        <input id="loginInput" onChange={this.handleOnChange} type="password" name="password" value={this.state.password} placeholder="Password"/>
                        <br />
                        <input id="signupSubmit" type="submit" value="Sign Up"/>
                        <h1>Already have an account? <Link to="/login">Log In</Link></h1>
                    </form>
                </section>
            </main>
        )
    }

}

export default compose(withRouter, connect(null, { signupUser }))(Signup)