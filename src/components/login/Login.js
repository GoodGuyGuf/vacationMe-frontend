import React from 'react';

export default class Login extends React.Component{

    state = {
        email: "",
        password: ""
    }

    handleOnChange = event => {
        event.preventDefault()
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render(){
        return(
            <div id="loginform">
                <form>
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