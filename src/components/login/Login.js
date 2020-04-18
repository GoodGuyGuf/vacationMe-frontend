import React from 'react';
import { withRouter, Link } from 'react-router-dom';

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
        return(
            <div id="loginform">
                <h1>vacationMe</h1>
                <form onSubmit={this.handleOnSubmit}>
                    <input onChange={this.handleOnChange}
                     type="email" 
                     name="email" 
                     value={this.state.email} 
                     placeholder="Email"
                     />
                     <br/>
                    <input onChange={this.handleOnChange}
                     type="password" 
                     name="password" 
                     value={this.state.password}
                     placeholder="Password"
                     />
                     <br/>
                    <input type="submit"/>
                </form>
                <h2>Already have an account? <Link to="/signup">Signup</Link></h2>
            </div>
        )
    }
}

export default withRouter(Login);
