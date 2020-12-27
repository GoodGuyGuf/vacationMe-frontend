import React, { Component } from 'react';
import Login from './components/login/Login.js';
import { Route, Redirect } from 'react-router-dom';
import Signup from './components/Signup/Signup';
import Home from './Containers/Home';
import Profile from './Containers/Profile.js';
import PostShow from './components/Posts/PostShow';
import PostEdit from './components/Posts/PostEdit';
import DestinationContainer from './Containers/DestinationContainer'
import './css/App.css';

export default class App extends Component{
  render(){
    return (
      <>
        <Route exact path="/login" render={() => {return( 
          <>
            <header id="container">
              <h1 id="pre-logo">vacationMe</h1>
            </header>
            <Login/>
          </>)
          }} 
        />
        {this.props.currentUser !== {} ? <Redirect to="/" /> : <Redirect to="/login" />}

        <Route exact path="/signup" component={Signup}/>
        <Route exact path="/" component={Home}/>

        {this.props.currentUser === {} ? <Redirect to="/" /> : <Redirect to="/login" />}

        <Route exact path="/profile" component={Profile}/>
        <Route exact path="/posts/:id" render={routerProps => {
          return(
            <PostShow {...routerProps}  
            />
            )
          }}
        />

        <Route exact path="/posts/:id/edit" render={routerProps => {
          return(
            <PostEdit {...routerProps} 
            posts={this.props.posts} 
            updatePost={this.props.updatePost}
            currentUser={this.props.currentUser}  />
            )
          }}
        />
        <Route exact path="/destinations" component={DestinationContainer}/>
      </>
    );
  }
}