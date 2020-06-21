import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { loginUser } from '../../actions/Actions';

class Login extends Component{
    /* We use react component state for this component so that we can send the information to our UserReducer in rootReducer.
    state is just an object. Either you initialize state in a constructor function or you can write it like this.
    If using the constructor method, you have to include super() because we are inheriting from the react component.*/

    state = { 
        email: "",
        password: ""
    }

    /* handleOnChange is a callback function that our form uses. it will set state using by using the event onChange provies,
    updating state by each change in the input. event.target.name is the input attribute name, event.target.value is what
    is inside of the input field box at any time.*/

    handleOnChange = event => { 
        this.setState({ // 
            [event.target.name]: event.target.value
        }) 
    }

    /*handleOnSubmit is used as a callback function for our form onSubmit event. We prevent the form from actually submitting
    so that we can set what this submission actually does instead of the default behavior. Then we create an object that we will
    use to send with our fetch request to the login route in our Rails API. */

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

    /*In order for the fetch to work, we have to specify how we are going to send data. The key of 'method' is used to specify what
    type of fetch request we are sending. Headers are metadata that is sent ahead of our data payload of our POST request. It will 
    tell our API what type of data we are sending, which is JSON. JSON is JavaScript Object Notation, which is in the form of a
    JS object. The Rails API will then send back a response and we have to specify what kind of data we will be accepting. Then
    the actual data we send has to be sent in the key of body. JSON only accepts strings, so we have to stringify our state.*/

        fetch("http://localhost:3000/login", user)
        .then(response => response.json())
        .then(json => {
            if (json.message === "No User Found."){
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
                console.log(`This is Login userData: ${userData.username}`)
                this.props.loginUser(userData)
                this.props.history.push("/");
            }
        })
    /* The way that fetch works is that it will send a request to our Rails API. Then it will return to us a Promise.
    A promise is an object that may produce a single value some time in the future. The .then will return another promise
    and turn it into json. */

    // this.props.history works with withRouter. It allows us to redirect to another URL.
    }

    render(){
        return(
            <main id="loginform">
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
            </main>
        )
    }
}

export default compose(withRouter, connect(null, { loginUser }))(Login)
// we can set our mapStateToProps first argument to null if we don't want to connect our redux store to this component.
// Instead we can provide which action we want mapDispatchToProps to use insead.