import React from 'react';
import { withRouter } from 'react-router-dom';

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
            if (json.message === "No User Found."){
                console.log(json)
            } else {
                console.log(json.data)
                localStorage.setItem('loggedIn', JSON.stringify({username: json.data.attributes.username}))
                this.props.history.push("/home");
            }
        })
    }

    render(){
        return(
            <div id="loginform">
                <form onSubmit={this.handleOnSubmit}>
                    <input onChange={this.handleOnChange}
                     type="email" 
                     name="email" 
                     value={this.state.email} 
                     placeholder="Email"
                     />
                    <input onChange={this.handleOnChange}
                     type="password" 
                     name="password" 
                     value={this.state.password}
                     placeholder="Password"
                     />
                    <input type="submit"/>
                </form>
            </div>
        )
    }
}

export default withRouter(Login);
