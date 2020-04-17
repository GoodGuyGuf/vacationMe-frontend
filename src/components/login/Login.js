import React from 'react';

export default class Login extends React.Component{

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
        .then(json => console.log(json))
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