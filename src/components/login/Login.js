import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { loginUser } from '../../actions/LoginUser'

class Login extends React.Component{

    state = {
        email: "",
        password: ""
    }

    handleOnChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleOnSubmit = event => {
        event.preventDefault()

        const user = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(this.state)
        }

        fetch("http://localhost:3000/login", user)
        .then(response => response.json())
        .then(json => {
            console.log(json.data)
            if (json.message === "No User Found."){
                alert("Incorrect Login")
            } else {
                this.props.loginUser(json.data)
                const userData = {
                    id: json.data.id,
                    name: json.data.attributes.name, 
                    username: json.data.attributes.username, 
                    email: json.data.attributes.email,
                    createdAt: json.data.attributes.created_at,
                    updatedAt: json.data.attributes.updated_at
                }
                localStorage.setItem('loggedIn', JSON.stringify({userData}))
                this.props.history.push("/");
            }
        })
    }

    render(){
        return(
            <div id="loginform">
                <form onSubmit={this.handleOnSubmit}>
                    <input id="loginInput" onChange={this.handleOnChange}
                     type="email" 
                     name="email" 
                     value={this.state.email} 
                     placeholder="Email"
                     />
                     <br/>
                    <input id="loginInput" onChange={this.handleOnChange}
                     type="password" 
                     name="password" 
                     value={this.state.password}
                     placeholder="Password"
                     />
                     <br/>
                    <input id="loginSubmit" type="submit" value="Log In"/>
                    <h1>Don't have an account? <Link to="/signup">Signup</Link></h1>
                </form>
            </div>
        )
    }
}

export default compose(withRouter, connect(null, { loginUser }))(Login)
