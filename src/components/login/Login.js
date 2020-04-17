import React from 'react';

export default class Login extends React.Component{
    render(){
        return(
            <div id="loginform">
                <form>
                    <input type="text"/>
                    <input type="submit"/>
                </form>
            </div>
        )
    }
}